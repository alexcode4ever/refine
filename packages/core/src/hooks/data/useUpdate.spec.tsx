import { act, renderHook, waitFor } from "@testing-library/react";

import { MockJSONServer, TestWrapper, mockRouterBindings } from "@test";

import { useUpdate } from "./useUpdate";
import * as UseInvalidate from "../invalidate/index";
import {
    renderUseOne,
    renderUseList,
    renderUseMany,
    assertList,
    assertOne,
    assertMutationSuccess,
} from "@test/mutation-helpers";

describe("useUpdate Hook", () => {
    it("should work with pessimistic update", async () => {
        const { result } = renderHook(() => useUpdate(), {
            wrapper: TestWrapper({
                dataProvider: MockJSONServer,
                resources: [{ name: "posts" }],
            }),
        });

        act(() => {
            result.current.mutate({
                resource: "posts",
                mutationMode: "pessimistic",
                id: "1",
                values: { id: "1", title: "test" },
            });
        });

        await waitFor(() => {
            expect(result.current.isSuccess).toBeTruthy();
        });

        const { isSuccess } = result.current;

        expect(isSuccess).toBeTruthy();
    });

    it("should work with optimistic update", async () => {
        const initialTitle =
            "Necessitatibus necessitatibus id et cupiditate provident est qui amet.";
        const updatedTitle = "optimistic test";

        const { result } = renderHook(() => useUpdate(), {
            wrapper: TestWrapper({
                dataProvider: {
                    ...MockJSONServer.default,
                    update: async () => {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                return reject(new Error("Error"));
                            }, 500);
                        });
                    },
                },
            }),
        });

        const useOneResult = renderUseOne();

        const useListResult = renderUseList();

        const useManyResult = renderUseMany();

        await assertOne(useOneResult, "title", initialTitle);

        await assertList(useListResult, "title", initialTitle);

        await assertList(useManyResult, "title", initialTitle);

        act(() => {
            result.current.mutate({
                resource: "posts",
                mutationMode: "optimistic",
                id: "1",
                values: { title: updatedTitle },
            });
        });

        await assertOne(useOneResult, "title", updatedTitle);

        await assertList(useListResult, "title", updatedTitle);

        await assertList(useManyResult, "title", updatedTitle);

        await waitFor(() => {
            expect(result.current.isError).toEqual(true);
        });

        await assertOne(useOneResult, "title", initialTitle);

        await assertList(useListResult, "title", initialTitle);

        await assertList(useManyResult, "title", initialTitle);
    });

    it("should work with undoable update", async () => {
        const initialTitle =
            "Necessitatibus necessitatibus id et cupiditate provident est qui amet.";
        const updatedTitle = "undoable test";

        const { result } = renderHook(() => useUpdate(), {
            wrapper: TestWrapper({
                dataProvider: MockJSONServer,
            }),
        });

        const useOneResult = renderUseOne();

        const useListResult = renderUseList();

        const useManyResult = renderUseMany();

        await assertOne(useOneResult, "title", initialTitle);

        await assertList(useListResult, "title", initialTitle);

        await assertList(useManyResult, "title", initialTitle);

        act(() => {
            result.current.mutate({
                resource: "posts",
                mutationMode: "undoable",
                undoableTimeout: 1000,
                id: "1",
                values: { title: updatedTitle },
            });
        });

        await assertOne(useOneResult, "title", updatedTitle);

        await assertList(useListResult, "title", updatedTitle);

        await assertList(useManyResult, "title", updatedTitle);

        await assertMutationSuccess(result);
    });

    it("should only pass meta from the hook parameter and query parameters to the dataProvider", async () => {
        const updateMock = jest.fn();

        const { result } = renderHook(() => useUpdate(), {
            wrapper: TestWrapper({
                dataProvider: {
                    default: {
                        ...MockJSONServer.default,
                        update: updateMock,
                    },
                },
                routerProvider: mockRouterBindings({
                    params: { baz: "qux" },
                }),
                resources: [{ name: "posts", meta: { dip: "dop" } }],
            }),
        });

        result.current.mutate({
            resource: "posts",
            id: "1",
            values: {},
            meta: { foo: "bar" },
        });

        await waitFor(() => {
            expect(updateMock).toBeCalled();
        });

        expect(updateMock).toBeCalledWith(
            expect.objectContaining({
                meta: expect.objectContaining({
                    foo: "bar",
                    baz: "qux",
                }),
            }),
        );
    });

    it("works correctly with `interval` and `onInterval` params", async () => {
        const onInterval = jest.fn();
        const { result } = renderHook(
            () =>
                useUpdate({
                    overtimeOptions: {
                        interval: 100,
                        onInterval,
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            update: () => {
                                return new Promise((res) => {
                                    setTimeout(() => res({} as any), 1000);
                                });
                            },
                        },
                    },
                    resources: [{ name: "posts" }],
                }),
            },
        );

        result.current.mutate({
            resource: "posts",
            id: 1,
            values: {
                title: "foo",
            },
        });

        await waitFor(() => {
            expect(result.current.isLoading).toBeTruthy();
            expect(result.current.overtime.elapsedTime).toBe(900);
            expect(onInterval).toBeCalled();
        });

        await waitFor(() => {
            expect(result.current.isLoading).toBeFalsy();
            expect(result.current.overtime.elapsedTime).toBeUndefined();
        });
    });

    describe("usePublish", () => {
        it("publish live event on success", async () => {
            const onPublishMock = jest.fn();

            const { result } = renderHook(() => useUpdate(), {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                    liveProvider: {
                        unsubscribe: jest.fn(),
                        subscribe: jest.fn(),
                        publish: onPublishMock,
                    },
                }),
            });

            result.current.mutate({
                resource: "posts",
                mutationMode: "undoable",
                undoableTimeout: 0,
                id: "1",
                values: { id: "1", title: "undoable test" },
            });

            await waitFor(() => {
                expect(result.current.isSuccess).toBeTruthy();
            });

            expect(onPublishMock).toBeCalled();
            expect(onPublishMock).toHaveBeenCalledWith({
                channel: "resources/posts",
                date: expect.any(Date),
                type: "updated",
                payload: {
                    ids: ["1"],
                },
            });
        });

        it("publish live event without `ids` if no `id` is returned from the dataProvider", async () => {
            const onPublishMock = jest.fn();

            const { result } = renderHook(() => useUpdate(), {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            update: jest.fn().mockResolvedValue({ data: {} }),
                        },
                    },
                    resources: [{ name: "posts" }],
                    liveProvider: {
                        unsubscribe: jest.fn(),
                        subscribe: jest.fn(),
                        publish: onPublishMock,
                    },
                }),
            });

            result.current.mutate({
                resource: "posts",
                id: "1",
                values: { title: "foo" },
            });

            await waitFor(() => {
                expect(result.current.isSuccess).toBeTruthy();
            });

            expect(onPublishMock).toHaveBeenCalledWith({
                channel: "resources/posts",
                date: expect.any(Date),
                type: "updated",
                payload: {},
            });
        });
    });

    describe("useNotification", () => {
        it("should call `open` from the notification provider on success", async () => {
            const openNotificationMock = jest.fn();

            const { result } = renderHook(() => useUpdate(), {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    notificationProvider: {
                        open: openNotificationMock,
                    },
                    resources: [{ name: "posts" }],
                }),
            });

            result.current.mutate({
                resource: "posts",
                id: "1",
                values: {},
            });

            await waitFor(() => {
                expect(result.current.isSuccess).toBeTruthy();
            });

            expect(openNotificationMock).toBeCalledWith({
                description: "Successful",
                key: "1-posts-notification",
                message: "Successfully updated post",
                type: "success",
            });
        });

        it("should call `open` from the notification provider on error", async () => {
            const updateMock = jest.fn().mockRejectedValue(new Error("Error"));
            const notificationMock = jest.fn();

            const { result } = renderHook(() => useUpdate(), {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            update: updateMock,
                        },
                    },
                    notificationProvider: {
                        open: notificationMock,
                    },
                    resources: [{ name: "posts" }],
                }),
            });

            result.current.mutate({
                id: "1",
                resource: "posts",
                values: {},
            });

            await waitFor(() => {
                expect(result.current.isError).toBeTruthy();
            });

            expect(notificationMock).toBeCalledWith({
                description: "Error",
                key: "1-posts-notification",
                message: "Error when updating post (status code: undefined)",
                type: "error",
            });
        });

        it("should call `open` from notification provider on success with custom notification params", async () => {
            const openNotificationMock = jest.fn();

            const { result } = renderHook(() => useUpdate(), {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    notificationProvider: {
                        open: openNotificationMock,
                    },
                    resources: [{ name: "posts" }],
                }),
            });

            result.current.mutate({
                resource: "posts",
                id: "1",
                values: {},
                successNotification: () => ({
                    message: "Success",
                    description: "Successfully created post",
                    type: "success",
                }),
            });

            await waitFor(() => {
                expect(result.current.isSuccess).toBeTruthy();
            });

            expect(openNotificationMock).toBeCalledWith({
                description: "Successfully created post",
                message: "Success",
                type: "success",
            });
        });

        it("should not call `open` from notification provider on return `false`", async () => {
            const openNotificationMock = jest.fn();

            const { result } = renderHook(() => useUpdate(), {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    notificationProvider: {
                        open: openNotificationMock,
                    },
                    resources: [{ name: "posts" }],
                }),
            });

            result.current.mutate({
                resource: "posts",
                id: "1",
                values: {},
                successNotification: () => false,
            });

            await waitFor(() => {
                expect(result.current.isSuccess).toBeTruthy();
            });

            expect(openNotificationMock).toBeCalledTimes(0);
        });

        it("should call `open` from notification provider on error with custom notification params", async () => {
            const updateMock = jest.fn().mockRejectedValue(new Error("Error"));
            const openNotificationMock = jest.fn();

            const { result } = renderHook(() => useUpdate(), {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            update: updateMock,
                        },
                    },
                    notificationProvider: {
                        open: openNotificationMock,
                    },
                    resources: [{ name: "posts" }],
                }),
            });

            result.current.mutate({
                resource: "posts",
                id: "1",
                values: {},
                errorNotification: () => ({
                    message: "Error",
                    description: "There was an error creating post",
                    type: "error",
                }),
            });

            await waitFor(() => {
                expect(result.current.isError).toBeTruthy();
            });

            expect(openNotificationMock).toBeCalledWith({
                description: "There was an error creating post",
                message: "Error",
                type: "error",
            });
        });
    });

    describe("useOnError", () => {
        it("should call `onError` from the auth provider on error", async () => {
            const updateMock = jest.fn().mockRejectedValue(new Error("Error"));
            const onErrorMock = jest.fn();

            const { result } = renderHook(() => useUpdate(), {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            update: updateMock,
                        },
                    },
                    authProvider: {
                        onError: onErrorMock,
                    } as any,
                    resources: [{ name: "posts" }],
                }),
            });

            result.current.mutate({
                resource: "posts",
                id: "1",
                values: {},
            });

            await waitFor(() => {
                expect(result.current.isError).toBeTruthy();
            });

            expect(onErrorMock).toBeCalledWith(new Error("Error"));
        });

        it("should call `checkError` from the legacy auth provider on error", async () => {
            const updateMock = jest.fn().mockRejectedValue(new Error("Error"));
            const onErrorMock = jest.fn();

            const { result } = renderHook(() => useUpdate(), {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            update: updateMock,
                        },
                    },
                    legacyAuthProvider: {
                        checkError: onErrorMock,
                    },
                    resources: [{ name: "posts" }],
                }),
            });

            result.current.mutate({
                resource: "posts",
                id: "1",
                values: {},
            });

            await waitFor(() => {
                expect(result.current.isError).toBeTruthy();
            });

            expect(onErrorMock).toBeCalledWith(new Error("Error"));
        });
    });

    it("should select correct dataProviderName", async () => {
        const updateDefaultMock = jest.fn();
        const updateFooMock = jest.fn();

        const { result } = renderHook(() => useUpdate(), {
            wrapper: TestWrapper({
                dataProvider: {
                    default: {
                        ...MockJSONServer.default,
                        update: updateDefaultMock,
                    },
                    foo: {
                        ...MockJSONServer.default,
                        update: updateFooMock,
                    },
                },
                resources: [
                    {
                        name: "categories",
                    },
                    {
                        name: "posts",
                        meta: {
                            dataProviderName: "foo",
                        },
                    },
                ],
            }),
        });

        result.current.mutate({
            resource: "posts",
            id: "1",
            values: {
                foo: "bar",
            },
        });

        await waitFor(() => {
            expect(result.current.isSuccess).toBeTruthy();
        });

        expect(updateFooMock).toBeCalledWith(
            expect.objectContaining({
                resource: "posts",
            }),
        );
        expect(updateDefaultMock).not.toBeCalled();
    });

    it("should get correct `meta` of related resource", async () => {
        const updateMock = jest.fn();

        const { result } = renderHook(() => useUpdate(), {
            wrapper: TestWrapper({
                dataProvider: {
                    default: {
                        ...MockJSONServer.default,
                        update: updateMock,
                    },
                },
                resources: [
                    {
                        name: "posts",
                        meta: {
                            foo: "bar",
                        },
                    },
                ],
            }),
        });

        result.current.mutate({
            resource: "posts",
            id: "1",
            values: {
                title: "awesome post",
            },
        });

        await waitFor(() => {
            expect(result.current.isSuccess).toBeTruthy();
        });

        expect(updateMock).toBeCalledWith(
            expect.objectContaining({
                meta: expect.objectContaining({
                    foo: "bar",
                }),
            }),
        );
    });

    describe("when passing `identifier` instead of `name`", () => {
        it("should select correct dataProviderName", async () => {
            const updateDefaultMock = jest.fn();
            const updateFooMock = jest.fn();

            const { result } = renderHook(() => useUpdate(), {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            update: updateDefaultMock,
                        },
                        foo: {
                            ...MockJSONServer.default,
                            update: updateFooMock,
                        },
                    },
                    resources: [
                        {
                            name: "posts",
                        },
                        {
                            name: "posts",
                            identifier: "featured-posts",
                            meta: {
                                dataProviderName: "foo",
                            },
                        },
                    ],
                }),
            });

            result.current.mutate({
                resource: "featured-posts",
                id: "1",
                values: {
                    title: "foo",
                },
            });

            await waitFor(() => {
                expect(result.current.isSuccess).toBeTruthy();
            });

            expect(updateFooMock).toBeCalledWith(
                expect.objectContaining({
                    resource: "posts",
                }),
            );
            expect(updateDefaultMock).not.toBeCalled();
        });

        it("should invalidate query store with `identifier`", async () => {
            const invalidateStore = jest.fn();
            jest.spyOn(UseInvalidate, "useInvalidate").mockReturnValue(
                invalidateStore,
            );
            const updateMock = jest.fn();

            const { result } = renderHook(() => useUpdate(), {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            update: updateMock,
                        },
                    },
                    resources: [
                        {
                            name: "posts",
                            identifier: "featured-posts",
                        },
                    ],
                }),
            });

            result.current.mutate({
                resource: "featured-posts",
                id: "1",
                values: {
                    title: "foo",
                },
            });

            await waitFor(() => {
                expect(result.current.isSuccess).toBeTruthy();
            });

            expect(invalidateStore).toBeCalledWith(
                expect.objectContaining({
                    resource: "featured-posts",
                }),
            );
        });

        it("should get correct `meta` of related resource", async () => {
            const updateMock = jest.fn();

            const { result } = renderHook(() => useUpdate(), {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            update: updateMock,
                        },
                    },
                    resources: [
                        {
                            name: "posts",
                            identifier: "all-posts",
                            meta: {
                                foo: "bar",
                            },
                        },
                        {
                            name: "posts",
                            identifier: "featured-posts",
                            meta: {
                                bar: "baz",
                            },
                        },
                    ],
                }),
            });

            result.current.mutate({
                resource: "featured-posts",
                id: "1",
                values: {
                    title: "foo",
                },
            });

            await waitFor(() => {
                expect(result.current.isSuccess).toBeTruthy();
            });

            expect(updateMock).toBeCalledWith(
                expect.objectContaining({
                    meta: expect.objectContaining({
                        bar: "baz",
                    }),
                }),
            );
        });
    });
});
