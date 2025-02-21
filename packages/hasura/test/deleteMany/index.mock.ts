import nock from "nock";

/**
 * Hasura default 'snake_case' naming convention
 */

nock("https://flowing-mammal-24.hasura.app:443", { encodedQueryParams: true })
    .post("/v1/graphql", {
        query: "mutation ($where: posts_bool_exp!) {\n      delete_posts (where: $where) {\n    returning { id, title }\n  }\n    }",
        variables: {
            where: {
                id: {
                    _in: [
                        "cddd4ced-651d-4039-abe0-2a9dffbc8c82",
                        "c82c71c5-0f0b-4042-b9a3-db977fe28a83",
                    ],
                },
            },
        },
    })
    .reply(
        200,
        [
            "1f8b08000000000004034dccbd0ac2301440e15709773650d3d6a61d05c5dd51446e726f34585bc9cf54f2eed641703c70f816204c08c302c42327bebde798e2b703a71c263fdd410ce2b2802718c012516399e4aedd926caaba9768b8920a7b72ce586db5820d249f465ef7e36c7314f730e7b738e5174ee23c323fa16cc40fd4ca765bdbcaca5566051b254d8fb524d3779d63a551d77fe0419a1cfdc4310a1c31bcc49ec9cd81e2c30786722da57c00e1b7e862d2000000",
        ],
        [
            "Date",
            "Wed, 30 Nov 2022 12:00:04 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "9aabb8e41ed5a35ecec813cd8e871c64",
            "Content-Encoding",
            "gzip",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "77236ba6586ebb86-FRA",
        ],
    );

nock("https://flowing-mammal-24.hasura.app:443", { encodedQueryParams: true })
    .post("/v1/graphql", {
        query: "mutation ($where: posts_bool_exp!) {\n      delete_posts (where: $where) {\n    returning { id }\n  }\n    }",
        variables: {
            where: {
                id: {
                    _in: [
                        "ecd7aa21-19f4-46c9-bc3e-227dcd0807fd",
                        "88a479ec-296d-48a4-9c57-7b48048a8067",
                    ],
                },
            },
        },
    })
    .reply(
        200,
        [
            "1f8b08000000000004032dca510ac3200c00d0ab48be17b0ce19f52a63149ba4a330bad1ba2ff1eeed609f0f5e0329b5406e20fad2aae3e7bdd7fde74deb775b97f509269b7b83452083b250296ec021cd1e7de084135f159d2361b1d1d22cd02fe6df632c9e9232ba1404fd294c7c23a4c9477b32da40d01fbdf70364bfacd488000000",
        ],
        [
            "Date",
            "Wed, 30 Nov 2022 12:00:46 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "4ed8219a525a43cc8446341eecaf4ba0",
            "Content-Encoding",
            "gzip",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "77236cabf9099170-FRA",
        ],
    );

/**
 * Graphql default 'camelCase' naming convention
 */

nock("https://flowing-mammal-24.hasura.app:443", { encodedQueryParams: true })
    .post("/v1/graphql", {
        query: "mutation ($where: PostsBoolExp!) {\n      deletePosts (where: $where) {\n    returning { id, title }\n  }\n    }",
        variables: {
            where: {
                id: {
                    _in: [
                        "cddd4ced-651d-4039-abe0-2a9dffbc8c82",
                        "c82c71c5-0f0b-4042-b9a3-db977fe28a83",
                    ],
                },
            },
        },
    })
    .reply(
        200,
        [
            "1f8b08000000000000134dccbd0ac2301440e157097736d0a6d5a61d05c5517014879bdc1b0dd656f23395bcbb75101c0f1cbe050813c2b000f1c889cf734cf19b81530e939fee2006715dc0130c6089a8b54c72b7ad49b655d34b345c49853d3967acb65ac106924f23affb71b6398a7b98f35b9cf20b277119999f5036e2076a65bbda6e65e52ab382ad92a6c74692e9bbceb1d2a89b3ff0204d8e7ee218058e185e62cfe4e640f1e10343b995523e92a9e564d1000000",
        ],
        [
            "Date",
            "Wed, 30 Nov 2022 12:00:04 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "9aabb8e41ed5a35ecec813cd8e871c64",
            "Content-Encoding",
            "gzip",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "77236ba6586ebb86-FRA",
        ],
    );

nock("https://flowing-mammal-24.hasura.app:443", { encodedQueryParams: true })
    .post("/v1/graphql", {
        query: "mutation ($where: PostsBoolExp!) {\n      deletePosts (where: $where) {\n    returning { id }\n  }\n    }",
        variables: {
            where: {
                id: {
                    _in: [
                        "ecd7aa21-19f4-46c9-bc3e-227dcd0807fd",
                        "88a479ec-296d-48a4-9c57-7b48048a8067",
                    ],
                },
            },
        },
    })
    .reply(
        200,
        [
            "1f8b08000000000000132dcac10ac3200c00d05f919c17b0ce19f52b761f3dd8241d85d1416b4fe2bfaf851d1fbc06526a81dc40f4a3559fdfbdee1737adc7b62eeb1b4c36af068b400665a152dc80439a3dfac00927be2b3a47c262a3a559a0dfccbfc7583c2565742908fa5398f84148938ff664b481a08fbdf71f0022ca3387000000",
        ],
        [
            "Date",
            "Wed, 30 Nov 2022 12:00:46 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "4ed8219a525a43cc8446341eecaf4ba0",
            "Content-Encoding",
            "gzip",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "77236cabf9099170-FRA",
        ],
    );
