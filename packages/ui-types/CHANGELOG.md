# @pankod/refine-ui-types

## 1.20.0

### Minor Changes

-   [#4591](https://github.com/refinedev/refine/pull/4591) [`f8891ead2bd`](https://github.com/refinedev/refine/commit/f8891ead2bdb5f6743bbe9979230aa73ef3e69be) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - feat: add `autoSaveProps` prop type on `RefineCrudEditProps` interface.

### Patch Changes

-   Updated dependencies [[`3af99896101`](https://github.com/refinedev/refine/commit/3af99896101bd41a4d2878c4a9f671ca1da36a6f), [`96af6d25b7a`](https://github.com/refinedev/refine/commit/96af6d25b7a870a3c1c6fd33c30e0ca2224ed411), [`96af6d25b7a`](https://github.com/refinedev/refine/commit/96af6d25b7a870a3c1c6fd33c30e0ca2224ed411), [`f8891ead2bd`](https://github.com/refinedev/refine/commit/f8891ead2bdb5f6743bbe9979230aa73ef3e69be), [`3442f4bd00a`](https://github.com/refinedev/refine/commit/3442f4bd00ad4dbb17dcba08931fdeed3c2b1cb0)]:
    -   @refinedev/core@4.28.0

## 1.19.0

### Minor Changes

-   [#4591](https://github.com/refinedev/refine/pull/4591) [`f8891ead2bd`](https://github.com/refinedev/refine/commit/f8891ead2bdb5f6743bbe9979230aa73ef3e69be) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - feat: add `autoSaveProps` prop type on `RefineCrudEditProps` interface.

### Patch Changes

-   Updated dependencies [[`3af99896101`](https://github.com/refinedev/refine/commit/3af99896101bd41a4d2878c4a9f671ca1da36a6f), [`96af6d25b7a`](https://github.com/refinedev/refine/commit/96af6d25b7a870a3c1c6fd33c30e0ca2224ed411), [`96af6d25b7a`](https://github.com/refinedev/refine/commit/96af6d25b7a870a3c1c6fd33c30e0ca2224ed411), [`f8891ead2bd`](https://github.com/refinedev/refine/commit/f8891ead2bdb5f6743bbe9979230aa73ef3e69be), [`3442f4bd00a`](https://github.com/refinedev/refine/commit/3442f4bd00ad4dbb17dcba08931fdeed3c2b1cb0)]:
    -   @refinedev/core@4.27.0

## 1.18.0

### Minor Changes

-   [#4502](https://github.com/refinedev/refine/pull/4502) [`c7872ca621f`](https://github.com/refinedev/refine/commit/c7872ca621fdc6c0edd7ee113520bd898901ed38) Thanks [@Mr0nline](https://github.com/Mr0nline)! - feat: ability to tweak active sider items navigation

    Visiting active sider items triggers page reloads due to them being links. We can now provide activeItemDisabled prop to disable such reloads.

### Patch Changes

-   Updated dependencies [[`c3c0deed564`](https://github.com/refinedev/refine/commit/c3c0deed564bdbded58c615357a55e666473923a), [`8c2b3be35b0`](https://github.com/refinedev/refine/commit/8c2b3be35b0132fc9a7b79287d281a9f922424d0), [`5bb6f47a4d4`](https://github.com/refinedev/refine/commit/5bb6f47a4d4e29a7de5426879754fcd78e3fa4d5)]:
    -   @refinedev/core@4.26.0

## 1.17.0

### Minor Changes

-   [#4502](https://github.com/refinedev/refine/pull/4502) [`c7872ca621f`](https://github.com/refinedev/refine/commit/c7872ca621fdc6c0edd7ee113520bd898901ed38) Thanks [@Mr0nline](https://github.com/Mr0nline)! - feat: ability to tweak active sider items navigation

    Visiting active sider items triggers page reloads due to them being links. We can now provide activeItemDisabled prop to disable such reloads.

### Patch Changes

-   Updated dependencies [[`5bb6f47a4d4`](https://github.com/refinedev/refine/commit/5bb6f47a4d4e29a7de5426879754fcd78e3fa4d5)]:
    -   @refinedev/core@4.25.1

## 1.16.0

### Minor Changes

-   [#4303](https://github.com/refinedev/refine/pull/4303) [`0c569f42b4e`](https://github.com/refinedev/refine/commit/0c569f42b4e7caec75928fd8a1ebeb337c95ff81) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - feat: added crud component types.
    Now `ActionButtonRenderer` has a new generic type `TExtraProps`. This will allow us to pass extra props to the renderer.

    feat: added `TEditButtonProps`, `TDeleteButtonProps`, `TRefreshButtonProps`, and, `TListButtonProps` generic types to `RefineCrudShowProps`.
    Now `RefineCrudShowProps` can take generic types for all the buttons.

### Patch Changes

-   [#4312](https://github.com/refinedev/refine/pull/4312) [`9a5f79186c1`](https://github.com/refinedev/refine/commit/9a5f79186c107d52e12b8ff87558a3c3dd7807b8) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - feat: added `className` for easier selection of all buttons and titles of CRUD components

## 1.15.0

### Minor Changes

-   [#4303](https://github.com/refinedev/refine/pull/4303) [`0c569f42b4e`](https://github.com/refinedev/refine/commit/0c569f42b4e7caec75928fd8a1ebeb337c95ff81) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - feat: added crud component types.
    Now `ActionButtonRenderer` has a new generic type `TExtraProps`. This will allow us to pass extra props to the renderer.

    feat: added `TEditButtonProps`, `TDeleteButtonProps`, `TRefreshButtonProps`, and, `TListButtonProps` generic types to `RefineCrudShowProps`.
    Now `RefineCrudShowProps` can take generic types for all the buttons.

### Patch Changes

-   [#4312](https://github.com/refinedev/refine/pull/4312) [`9a5f79186c1`](https://github.com/refinedev/refine/commit/9a5f79186c107d52e12b8ff87558a3c3dd7807b8) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - feat: added `className` for easier selection of all buttons and titles of CRUD components

## 1.14.0

### Minor Changes

-   [#4291](https://github.com/refinedev/refine/pull/4291) [`dc62abc890f`](https://github.com/refinedev/refine/commit/dc62abc890f68be161c7035c28c0118216a9e0ec) Thanks [@salihozdemir](https://github.com/salihozdemir)! - feat: added a new prop that `sticky` to `RefineThemedLayoutV2HeaderProps` type

    fix: deprecated the `isStick` prop of `RefineThemedLayoutV2HeaderProps` type

    To provide backwards compatibility, `isSticky` is still supported, but it is deprecated and will be removed in the next major version.

## 1.13.0

### Minor Changes

-   [#4291](https://github.com/refinedev/refine/pull/4291) [`dc62abc890f`](https://github.com/refinedev/refine/commit/dc62abc890f68be161c7035c28c0118216a9e0ec) Thanks [@salihozdemir](https://github.com/salihozdemir)! - feat: added a new prop that `sticky` to `RefineThemedLayoutV2HeaderProps` type

    fix: deprecated the `isStick` prop of `RefineThemedLayoutV2HeaderProps` type

    To provide backwards compatibility, `isSticky` is still supported, but it is deprecated and will be removed in the next major version.

## 1.12.0

### Minor Changes

-   [#4232](https://github.com/refinedev/refine/pull/4232) [`c99bc0ad7f7`](https://github.com/refinedev/refine/commit/c99bc0ad7f7b71cf47e45a797acdea2325e6fbc8) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - feat: `initialSiderCollapsed` added to `RefineThemedLayoutV2Props` to control initial state of `<ThemedSiderV2>`.
    From now on, you can control the initial collapsed state of `<ThemedSiderV2>` by passing the `initialSiderCollapsed` prop to `<ThemedLayoutV2>`.

    ```tsx
    <ThemedLayoutV2
        initialSiderCollapsed={true} // This will make the sider collapsed by default
    >
        {/* .. */}
    </ThemedLayoutV2>
    ```

-   [#4209](https://github.com/refinedev/refine/pull/4209) [`3f4b5fef76f`](https://github.com/refinedev/refine/commit/3f4b5fef76f3558fc4466f455b9f55083cf47fc2) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - feat: add `isSticky` to `RefineThemedLayoutV2HeaderProps` type

## 1.11.0

### Minor Changes

-   [#4232](https://github.com/refinedev/refine/pull/4232) [`c99bc0ad7f7`](https://github.com/refinedev/refine/commit/c99bc0ad7f7b71cf47e45a797acdea2325e6fbc8) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - feat: `initialSiderCollapsed` added to `RefineThemedLayoutV2Props` to control initial state of `<ThemedSiderV2>`.
    From now on, you can control the initial collapsed state of `<ThemedSiderV2>` by passing the `initialSiderCollapsed` prop to `<ThemedLayoutV2>`.

    ```tsx
    <ThemedLayoutV2
        initialSiderCollapsed={true} // This will make the sider collapsed by default
    >
        {/* .. */}
    </ThemedLayoutV2>
    ```

-   [#4209](https://github.com/refinedev/refine/pull/4209) [`3f4b5fef76f`](https://github.com/refinedev/refine/commit/3f4b5fef76f3558fc4466f455b9f55083cf47fc2) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - feat: add `isSticky` to `RefineThemedLayoutV2HeaderProps` type

## 1.10.0

### Minor Changes

-   [#4163](https://github.com/refinedev/refine/pull/4163) [`deec38a034a`](https://github.com/refinedev/refine/commit/deec38a034a0b5ab2d7842e428f6fc3a1b8561fa) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - refactor: deprecated `RefineThemedLayoutProps`, `RefineThemedLayoutSiderProps` and `RefineThemedLayoutHeaderProps` for `ThemedLayoutV2`

## 1.9.0

### Minor Changes

-   [#4163](https://github.com/refinedev/refine/pull/4163) [`deec38a034a`](https://github.com/refinedev/refine/commit/deec38a034a0b5ab2d7842e428f6fc3a1b8561fa) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - refactor: deprecated `RefineThemedLayoutProps`, `RefineThemedLayoutSiderProps` and `RefineThemedLayoutHeaderProps` for `ThemedLayoutV2`

## 1.8.0

### Minor Changes

-   [#4163](https://github.com/refinedev/refine/pull/4163) [`deec38a034a`](https://github.com/refinedev/refine/commit/deec38a034a0b5ab2d7842e428f6fc3a1b8561fa) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - refactor: deprecated `RefineThemedLayoutProps`, `RefineThemedLayoutSiderProps` and `RefineThemedLayoutHeaderProps` for `ThemedLayoutV2`

## 1.7.0

### Minor Changes

-   [#4153](https://github.com/refinedev/refine/pull/4153) [`8d9c408d089`](https://github.com/refinedev/refine/commit/8d9c408d0893f6592709e688432a3274d0bd0fcb) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - feat: add `RefineThemedLayoutV2Props`, `RefineThemedLayoutV2SiderProps`, `RefineThemedLayoutV2HeaderProps` types for `ThemedLayoutV2`

## 1.6.0

### Minor Changes

-   [#4153](https://github.com/refinedev/refine/pull/4153) [`8d9c408d089`](https://github.com/refinedev/refine/commit/8d9c408d0893f6592709e688432a3274d0bd0fcb) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - feat: add `RefineThemedLayoutV2Props`, `RefineThemedLayoutV2SiderProps`, `RefineThemedLayoutV2HeaderProps` types for `ThemedLayoutV2`

## 1.5.0

### Minor Changes

-   [#3971](https://github.com/refinedev/refine/pull/3971) [`2798f715361`](https://github.com/refinedev/refine/commit/2798f715361c5fd407d09429d94b05b602b50397) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - New props added to `RefineThemedLayoutHeaderProps`:

        -   `isSiderOpen` prop is added to check the visibility of the sider from `<ThemedHeader>`.
        -   `onToggleSiderClick` prop is added to control the visibility of the sider from `<ThemedHeader>`.
        -   `toggleSiderIcon` prop is added to change the icon of the toggle sider button.

    -   New props added to `RefineThemedLayoutSiderProps`:
        -   `isSiderOpen` prop is added to check the visibility of the sider from a parent component.
        -   `onToggleSiderClick` prop is added to control the visibility of the sider from a parent component.

### Patch Changes

-   Updated dependencies [[`d7d68e3ff68`](https://github.com/refinedev/refine/commit/d7d68e3ff686dece9f58e53e02076f0ecbd91010)]:
    -   @refinedev/core@4.5.4

## 1.4.0

### Minor Changes

-   [#3971](https://github.com/refinedev/refine/pull/3971) [`2798f715361`](https://github.com/refinedev/refine/commit/2798f715361c5fd407d09429d94b05b602b50397) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - New props added to `RefineThemedLayoutHeaderProps`:

        -   `isSiderOpen` prop is added to check the visibility of the sider from `<ThemedHeader>`.
        -   `onToggleSiderClick` prop is added to control the visibility of the sider from `<ThemedHeader>`.
        -   `toggleSiderIcon` prop is added to change the icon of the toggle sider button.

    -   New props added to `RefineThemedLayoutSiderProps`:
        -   `isSiderOpen` prop is added to check the visibility of the sider from a parent component.
        -   `onToggleSiderClick` prop is added to control the visibility of the sider from a parent component.

### Patch Changes

-   Updated dependencies [[`d7d68e3ff68`](https://github.com/refinedev/refine/commit/d7d68e3ff686dece9f58e53e02076f0ecbd91010)]:
    -   @refinedev/core@4.5.3

## 1.3.0

### Minor Changes

-   [#3912](https://github.com/refinedev/refine/pull/3912) [`0ffe70308b2`](https://github.com/refinedev/refine/commit/0ffe70308b24d2d70695399fb0a1b7b76bcf2ccb) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - Themed Layout types added. - `RefineThemedLayoutSiderProps`, `RefineThemedLayoutHeaderProps`, `RefineThemedLayoutProps`, `RefineLayoutThemedTitleProps`.

### Patch Changes

-   Updated dependencies [[`0ffe70308b2`](https://github.com/refinedev/refine/commit/0ffe70308b24d2d70695399fb0a1b7b76bcf2ccb)]:
    -   @refinedev/core@4.5.0

## 1.2.0

### Minor Changes

-   [#3912](https://github.com/refinedev/refine/pull/3912) [`0ffe70308b2`](https://github.com/refinedev/refine/commit/0ffe70308b24d2d70695399fb0a1b7b76bcf2ccb) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - - Themed Layout types added. - `RefineThemedLayoutSiderProps`, `RefineThemedLayoutHeaderProps`, `RefineThemedLayoutProps`, `RefineLayoutThemedTitleProps`.

### Patch Changes

-   Updated dependencies [[`0ffe70308b2`](https://github.com/refinedev/refine/commit/0ffe70308b24d2d70695399fb0a1b7b76bcf2ccb)]:
    -   @refinedev/core@4.4.0

## 1.1.0

### Minor Changes

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!

    -   `resourceNameOrRouteName` prop is deprecated in buttons.
    -   `resource` prop is added to replace `resourceNameOrRouteName` prop. `resource` prop can also use `identifier` property of the resource.

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    **Moving to the `@refinedev` scope 🎉🎉**

    Moved to the `@refinedev` scope and updated our packages to use the new scope. From now on, all packages will be published under the `@refinedev` scope with their new names.

    Now, we're also removing the `refine` prefix from all packages. So, the `@pankod/refine-core` package is now `@refinedev/core`, `@pankod/refine-antd` is now `@refinedev/antd`, and so on.

-   Thanks [@aliemir](https://github.com/aliemir), [@alicanerdurmaz](https://github.com/alicanerdurmaz), [@batuhanW](https://github.com/batuhanW), [@salihozdemir](https://github.com/salihozdemir), [@yildirayunlu](https://github.com/yildirayunlu), [@recepkutuk](https://github.com/recepkutuk)!
    `meta` prop is added to common button prop types.

### Patch Changes

## 0.16.0

### Minor Changes

-   [#3822](https://github.com/refinedev/refine/pull/3822) [`0baa99ba787`](https://github.com/refinedev/refine/commit/0baa99ba7874394d9d28d0a7b29c082c604258fb) Thanks [@BatuhanW](https://github.com/BatuhanW)! - - refine v4 release announcement added to "postinstall". - refine v4 is released 🎉 The new version is 100% backward compatible. You can upgrade to v4 with a single command! See the migration guide here: https://refine.dev/docs/migration-guide/3x-to-4x

### Patch Changes

-   Updated dependencies [[`0baa99ba787`](https://github.com/refinedev/refine/commit/0baa99ba7874394d9d28d0a7b29c082c604258fb)]:
    -   @pankod/refine-core@3.103.0

## 0.15.0

### Minor Changes

-   [#3822](https://github.com/refinedev/refine/pull/3822) [`0baa99ba787`](https://github.com/refinedev/refine/commit/0baa99ba7874394d9d28d0a7b29c082c604258fb) Thanks [@BatuhanW](https://github.com/BatuhanW)! - - refine v4 release announcement added to "postinstall". - refine v4 is released 🎉 The new version is 100% backward compatible. You can upgrade to v4 with a single command! See the migration guide here: https://refine.dev/docs/migration-guide/3x-to-4x

### Patch Changes

-   Updated dependencies [[`0baa99ba787`](https://github.com/refinedev/refine/commit/0baa99ba7874394d9d28d0a7b29c082c604258fb)]:
    -   @pankod/refine-core@3.102.0

## 0.14.2

### Patch Changes

-   [#3220](https://github.com/refinedev/refine/pull/3220) [`b867497f469`](https://github.com/refinedev/refine/commit/b867497f4694a5fbd330106a39256dee3c56199b) Thanks [@aliemir](https://github.com/aliemir)! - Updated image links in `README.MD` with CDN

-   Updated dependencies [[`a47f17931a8`](https://github.com/refinedev/refine/commit/a47f17931a8cad1466c25aa7ba4f9dce16dea2de), [`b867497f469`](https://github.com/refinedev/refine/commit/b867497f4694a5fbd330106a39256dee3c56199b)]:
    -   @pankod/refine-core@3.90.6

## 0.14.1

### Patch Changes

-   [#3220](https://github.com/refinedev/refine/pull/3220) [`b867497f469`](https://github.com/refinedev/refine/commit/b867497f4694a5fbd330106a39256dee3c56199b) Thanks [@aliemir](https://github.com/aliemir)! - Updated image links in `README.MD` with CDN

-   Updated dependencies [[`a47f17931a8`](https://github.com/refinedev/refine/commit/a47f17931a8cad1466c25aa7ba4f9dce16dea2de), [`b867497f469`](https://github.com/refinedev/refine/commit/b867497f4694a5fbd330106a39256dee3c56199b)]:
    -   @pankod/refine-core@3.90.5

## 0.14.0

### Minor Changes

-   [#2839](https://github.com/refinedev/refine/pull/2839) [`5388a338ab`](https://github.com/refinedev/refine/commit/5388a338abb9a5e03599da0a2786bea394cbc516) Thanks [@aliemir](https://github.com/aliemir)! - Add `accessControl` prop to buttons and deprecate `ignoreAccessControlProvider` prop.

-   [#2836](https://github.com/refinedev/refine/pull/2836) [`e43e9a17ae`](https://github.com/refinedev/refine/commit/e43e9a17ae0ed41e649b8026b2b04d850136dcfd) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - added locales prop to date fields

### Patch Changes

-   [#2834](https://github.com/refinedev/refine/pull/2834) [`476285e342`](https://github.com/refinedev/refine/commit/476285e3427c7e065892a281da529c038aee83d2) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - updated ui-types JSDoc

-   Updated dependencies [[`5388a338ab`](https://github.com/refinedev/refine/commit/5388a338abb9a5e03599da0a2786bea394cbc516)]:
    -   @pankod/refine-core@3.86.2

## 0.13.0

### Minor Changes

-   [#2836](https://github.com/refinedev/refine/pull/2836) [`e43e9a17ae`](https://github.com/refinedev/refine/commit/e43e9a17ae0ed41e649b8026b2b04d850136dcfd) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - added locales prop to date fields

## 0.12.0

### Minor Changes

-   [#2839](https://github.com/refinedev/refine/pull/2839) [`5388a338ab`](https://github.com/refinedev/refine/commit/5388a338abb9a5e03599da0a2786bea394cbc516) Thanks [@aliemir](https://github.com/aliemir)! - Add `accessControl` prop to buttons and deprecate `ignoreAccessControlProvider` prop.

### Patch Changes

-   [#2834](https://github.com/refinedev/refine/pull/2834) [`476285e342`](https://github.com/refinedev/refine/commit/476285e3427c7e065892a281da529c038aee83d2) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - updated ui-types JSDoc

-   Updated dependencies [[`5388a338ab`](https://github.com/refinedev/refine/commit/5388a338abb9a5e03599da0a2786bea394cbc516)]:
    -   @pankod/refine-core@3.86.1

## 0.11.6

### Patch Changes

-   Added descriptions to ui-types

-   Updated dependencies []:
    -   @pankod/refine-core@3.86.0

## 0.11.5

### Patch Changes

-   [#2786](https://github.com/refinedev/refine/pull/2786) [`19124711a7`](https://github.com/refinedev/refine/commit/19124711a7dc23c0b0e61bc845fbd294927999da) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - Added descriptions to ui-types

-   Updated dependencies [[`addff64c77`](https://github.com/refinedev/refine/commit/addff64c777e4c9f044a1a109cb05453e6e9f762)]:
    -   @pankod/refine-core@3.85.0

## 0.11.4

### Patch Changes

-   Added tsdoc comments to crud component interfaces.

## 0.11.3

### Patch Changes

-   [#2718](https://github.com/refinedev/refine/pull/2718) [`d78d2a2a99`](https://github.com/refinedev/refine/commit/d78d2a2a99adb508094069cda23deaba55c25b63) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Added tsdoc comments to crud component interfaces.

## 0.11.2

### Patch Changes

-   Removed redundant type inheritance and type casting

-   Updated dependencies []:
    -   @pankod/refine-core@3.74.2

## 0.11.1

### Patch Changes

-   [#2586](https://github.com/refinedev/refine/pull/2586) [`d7c8b7642b`](https://github.com/refinedev/refine/commit/d7c8b7642b7ed41a2063798e779c3cfaa09b0e7b) Thanks [@necatiozmen](https://github.com/necatiozmen)! - Removed redundant type inheritance and type casting

-   Updated dependencies [[`d7c8b7642b`](https://github.com/refinedev/refine/commit/d7c8b7642b7ed41a2063798e779c3cfaa09b0e7b)]:
    -   @pankod/refine-core@3.74.1

## 0.11.0

### Minor Changes

-   Add `providers` support on AuthPage register page.

## 0.10.0

### Minor Changes

-   [#2551](https://github.com/refinedev/refine/pull/2551) [`a65525de6f`](https://github.com/refinedev/refine/commit/a65525de6f995babfca1058e933cdbea67d6032e) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - Add `providers` support on AuthPage register page.

## 0.9.2

### Patch Changes

-   Removed unused `updatePasswordLink` and `onSubmit` props from auth pages.

    Renamed `RefineResetPasswordFormTypes` to `RefineForgotPasswordFormTypes`.

    Renamed `resetPasswordLink` to `forgotPasswordLink`.

-   Updated dependencies []:
    -   @pankod/refine-core@3.71.0

## 0.9.1

### Patch Changes

-   [#2524](https://github.com/refinedev/refine/pull/2524) [`27bf81bebb`](https://github.com/refinedev/refine/commit/27bf81bebb217d2944e20e79a8f7618eda0e9db7) Thanks [@biskuvit](https://github.com/biskuvit)! - Removed unused `updatePasswordLink` and `onSubmit` props from auth pages.

    Renamed `RefineResetPasswordFormTypes` to `RefineForgotPasswordFormTypes`.

    Renamed `resetPasswordLink` to `forgotPasswordLink`.

-   Updated dependencies [[`27bf81bebb`](https://github.com/refinedev/refine/commit/27bf81bebb217d2944e20e79a8f7618eda0e9db7)]:
    -   @pankod/refine-core@3.70.0

## 0.9.0

### Minor Changes

-   Added `formProps` property to `RefineAuthPageProps`, `RefineForgotPasswordPageProps`, `RefineRegisterPageProps`, and `RefineUpdatePasswordPageProps`

## 0.8.0

### Minor Changes

-   [#2516](https://github.com/refinedev/refine/pull/2516) [`ad99916d6d`](https://github.com/refinedev/refine/commit/ad99916d6dbd181b857fd7df7b9619d8cac5e3e0) Thanks [@omeraplak](https://github.com/omeraplak)! - Added `formProps` property to `RefineAuthPageProps`, `RefineForgotPasswordPageProps`, `RefineRegisterPageProps`, and `RefineUpdatePasswordPageProps`

## 0.7.0

### Minor Changes

-   Updated `Sider` types for `render` props.

### Patch Changes

-   Updated `render` method type with `collapsed` prop in `RefineLayoutSiderProps`.

-   Added new types for `<AuthPage>`. You can see following new types:

    **`RefineAuthPageProps`**

    ```tsx
    export type RefineAuthPageProps<
        TWrapperProps extends {} = Record<keyof any, unknown>,
        TContentProps extends {} = Record<keyof any, unknown>,
    > = (
        | PropsWithChildren<{
              type?: "login";
              providers?: IProvider[];
              registerLink?: React.ReactNode;
              forgotPasswordLink?: React.ReactNode;
              rememberMe?: React.ReactNode;
              onSubmit?: (formValues: RefineLoginFormTypes) => void;
          }>
        | PropsWithChildren<{
              type: "register";
              loginLink?: React.ReactNode;
              updatePasswordLink?: React.ReactNode;
              onSubmit?: (formValues: RefineRegisterFormTypes) => void;
          }>
        | PropsWithChildren<{
              type: "forgotPassword";
              loginLink?: React.ReactNode;
              onSubmit?: (formValues: RefineForgotPasswordFormTypes) => void;
          }>
        | PropsWithChildren<{
              type: "updatePassword";
              onSubmit?: (formValues: RefineUpdatePasswordFormTypes) => void;
          }>
    ) & {
        wrapperProps?: TWrapperProps;
        contentProps?: TContentProps;
        renderContent?: (content: React.ReactNode) => React.ReactNode;
    };
    ```

-   Updated dependencies []:
    -   @pankod/refine-core@3.69.9

## 0.6.2

### Patch Changes

-   [#2447](https://github.com/refinedev/refine/pull/2447) [`628a37a675`](https://github.com/refinedev/refine/commit/628a37a6753a778cbec5c29b698981e0157caa42) Thanks [@biskuvit](https://github.com/biskuvit)! - Added new types for `<AuthPage>`. You can see following new types:

    **`RefineAuthPageProps`**

    ```tsx
    export type RefineAuthPageProps<
        TWrapperProps extends {} = Record<keyof any, unknown>,
        TContentProps extends {} = Record<keyof any, unknown>,
    > = (
        | PropsWithChildren<{
              type?: "login";
              providers?: IProvider[];
              registerLink?: React.ReactNode;
              forgotPasswordLink?: React.ReactNode;
              rememberMe?: React.ReactNode;
              onSubmit?: (formValues: RefineLoginFormTypes) => void;
          }>
        | PropsWithChildren<{
              type: "register";
              loginLink?: React.ReactNode;
              updatePasswordLink?: React.ReactNode;
              onSubmit?: (formValues: RefineRegisterFormTypes) => void;
          }>
        | PropsWithChildren<{
              type: "forgotPassword";
              loginLink?: React.ReactNode;
              onSubmit?: (formValues: RefineForgotPasswordFormTypes) => void;
          }>
        | PropsWithChildren<{
              type: "updatePassword";
              onSubmit?: (formValues: RefineUpdatePasswordFormTypes) => void;
          }>
    ) & {
        wrapperProps?: TWrapperProps;
        contentProps?: TContentProps;
        renderContent?: (content: React.ReactNode) => React.ReactNode;
    };
    ```

-   Updated dependencies [[`628a37a675`](https://github.com/refinedev/refine/commit/628a37a6753a778cbec5c29b698981e0157caa42)]:
    -   @pankod/refine-core@3.69.7

## 0.6.1

### Patch Changes

-   [#2492](https://github.com/refinedev/refine/pull/2492) [`7d5bf3023d`](https://github.com/refinedev/refine/commit/7d5bf3023d00617890ffa7f9d22b1116af15e0b9) Thanks [@ozkalai](https://github.com/ozkalai)! - Updated `render` method type with `collapsed` prop in `RefineLayoutSiderProps`.

## 0.6.0

### Minor Changes

-   [#2454](https://github.com/refinedev/refine/pull/2454) [`72487a4126`](https://github.com/refinedev/refine/commit/72487a4126fb7d827dccd3bcbdee9a83aa1f56af) Thanks [@ozkalai](https://github.com/ozkalai)! - Updated `Sider` types for `render` props.

## 0.5.0

### Minor Changes

-   Update type declaration generation with `tsc` instead of `tsup` for better navigation throughout projects source code.

### Patch Changes

-   Update `TestWrapper` props with `children` prop type.

-   Updated dependencies []:
    -   @pankod/refine-core@3.67.0

## 0.4.0

### Minor Changes

-   [#2440](https://github.com/refinedev/refine/pull/2440) [`0150dcd070`](https://github.com/refinedev/refine/commit/0150dcd0700253f1c4908e7e5f2e178bb122e9af) Thanks [@aliemir](https://github.com/aliemir)! - Update type declaration generation with `tsc` instead of `tsup` for better navigation throughout projects source code.

### Patch Changes

-   [#2440](https://github.com/refinedev/refine/pull/2440) [`0150dcd070`](https://github.com/refinedev/refine/commit/0150dcd0700253f1c4908e7e5f2e178bb122e9af) Thanks [@aliemir](https://github.com/aliemir)! - Update `TestWrapper` props with `children` prop type.

-   Updated dependencies [[`0150dcd070`](https://github.com/refinedev/refine/commit/0150dcd0700253f1c4908e7e5f2e178bb122e9af), [`f2faf99f25`](https://github.com/refinedev/refine/commit/f2faf99f25542f73215ee89c74b241311177b327), [`0150dcd070`](https://github.com/refinedev/refine/commit/0150dcd0700253f1c4908e7e5f2e178bb122e9af), [`2c428b3105`](https://github.com/refinedev/refine/commit/2c428b31057e3e7c8901fc3da2773bc810235491)]:
    -   @pankod/refine-core@3.66.0

## 0.3.0

### Minor Changes

-   Added unified types for common UI components and their props to simplify the process of adding a new UI framework and also to keep existing ui frameworks easy to maintain.

### Patch Changes

-   Updated dependencies []:
    -   @pankod/refine-core@3.56.2

## 0.2.0

### Minor Changes

-   [#2216](https://github.com/refinedev/refine/pull/2216) [`201846c77d`](https://github.com/refinedev/refine/commit/201846c77dba07a61f0c0335716b60641430c22a) Thanks [@aliemir](https://github.com/aliemir)! - Added unified types for common UI components and their props to simplify the process of adding a new UI framework and also to keep existing ui frameworks easy to maintain.
