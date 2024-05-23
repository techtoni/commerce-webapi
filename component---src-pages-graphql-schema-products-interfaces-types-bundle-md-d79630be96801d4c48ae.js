"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1759],{51889:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return o},default:function(){return m}});var i=t(87462),a=t(45987),r=(t(35776),t(3905)),u=t(65663);const p=["components"],o={},d={_frontmatter:o},l=u.Z;function m(n){let{components:e}=n,t=(0,a.Z)(n,p);return(0,r.mdx)(l,(0,i.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"bundle-product-data-types"},"Bundle product data types"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-BundleProduct"},(0,r.mdx)("inlineCode",{parentName:"a"},"BundleProduct"))," data type implements the following interfaces:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface"},"ProductInterface")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PhysicalProductInterface"},"PhysicalProductInterface")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CustomizableProductInterface"},"CustomizableProductInterface")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-RoutableInterface"},"RoutableInterface"))),(0,r.mdx)("p",null,"Attributes that are specific to bundle products can be used when performing a ",(0,r.mdx)("a",{parentName:"p",href:"../../queries/products.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"products"))," query."),(0,r.mdx)("h2",{id:"sample-query"},"Sample query"),(0,r.mdx)("p",null,"The following query returns information about bundle product ",(0,r.mdx)("inlineCode",{parentName:"p"},"24-WG080"),", which is defined in the sample data."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  products(filter: {sku:\n    {eq: "24-WG080"}\n  })\n   {\n      items{\n         sku\n         __typename\n         uid\n         name\n          ... on BundleProduct {\n          dynamic_sku\n          dynamic_price\n          dynamic_weight\n          price_view\n          ship_bundle_items\n          items {\n            uid\n            title\n            required\n            type\n            position\n            sku\n            options {\n              uid\n              quantity\n              position\n              is_default\n              price\n              price_type\n              can_change_quantity\n              label\n              product {\n                uid\n                name\n                sku\n                __typename\n              }\n            }\n          }\n        }\n      }\n   }\n}\n')),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "products": {\n      "items": [\n        {\n          "sku": "24-WG080",\n          "__typename": "BundleProduct",\n          "uid": "NDY=",\n          "name": "Sprite Yoga Companion Kit",\n          "dynamic_sku": true,\n          "dynamic_price": true,\n          "dynamic_weight": true,\n          "price_view": "PRICE_RANGE",\n          "ship_bundle_items": "TOGETHER",\n          "items": [\n            {\n              "uid": "YnVuZGxlLzE=",\n              "title": "Sprite Stasis Ball",\n              "required": true,\n              "type": "radio",\n              "position": 1,\n              "sku": "24-WG080",\n              "options": [\n                {\n                  "uid": "YnVuZGxlLzEvMS8x",\n                  "quantity": 1,\n                  "position": 1,\n                  "is_default": true,\n                  "price": 0,\n                  "price_type": "FIXED",\n                  "can_change_quantity": true,\n                  "label": "Sprite Stasis Ball 55 cm",\n                  "product": {\n                    "uid": "MjY=",\n                    "name": "Sprite Stasis Ball 55 cm",\n                    "sku": "24-WG081-blue",\n                    "__typename": "SimpleProduct"\n                  }\n                },\n                {\n                  "uid": "YnVuZGxlLzEvMi8x",\n                  "quantity": 1,\n                  "position": 2,\n                  "is_default": false,\n                  "price": 0,\n                  "price_type": "FIXED",\n                  "can_change_quantity": true,\n                  "label": "Sprite Stasis Ball 65 cm",\n                  "product": {\n                    "uid": "Mjk=",\n                    "name": "Sprite Stasis Ball 65 cm",\n                    "sku": "24-WG082-blue",\n                    "__typename": "SimpleProduct"\n                  }\n                },\n                {\n                  "uid": "YnVuZGxlLzEvMy8x",\n                  "quantity": 1,\n                  "position": 3,\n                  "is_default": false,\n                  "price": 0,\n                  "price_type": "FIXED",\n                  "can_change_quantity": true,\n                  "label": "Sprite Stasis Ball 75 cm",\n                  "product": {\n                    "uid": "MzI=",\n                    "name": "Sprite Stasis Ball 75 cm",\n                    "sku": "24-WG083-blue",\n                    "__typename": "SimpleProduct"\n                  }\n                }\n              ]\n            },\n            {\n              "uid": "YnVuZGxlLzI=",\n              "title": "Sprite Foam Yoga Brick",\n              "required": true,\n              "type": "radio",\n              "position": 2,\n              "sku": "24-WG080",\n              "options": [\n                {\n                  "uid": "YnVuZGxlLzIvNC8x",\n                  "quantity": 1,\n                  "position": 1,\n                  "is_default": true,\n                  "price": 0,\n                  "price_type": "FIXED",\n                  "can_change_quantity": true,\n                  "label": "Sprite Foam Yoga Brick",\n                  "product": {\n                    "uid": "MjE=",\n                    "name": "Sprite Foam Yoga Brick",\n                    "sku": "24-WG084",\n                    "__typename": "SimpleProduct"\n                  }\n                }\n              ]\n            },\n            {\n              "uid": "YnVuZGxlLzM=",\n              "title": "Sprite Yoga Strap",\n              "required": true,\n              "type": "radio",\n              "position": 3,\n              "sku": "24-WG080",\n              "options": [\n                {\n                  "uid": "YnVuZGxlLzMvNS8x",\n                  "quantity": 1,\n                  "position": 1,\n                  "is_default": true,\n                  "price": 0,\n                  "price_type": "FIXED",\n                  "can_change_quantity": true,\n                  "label": "Sprite Yoga Strap 6 foot",\n                  "product": {\n                    "uid": "MzM=",\n                    "name": "Sprite Yoga Strap 6 foot",\n                    "sku": "24-WG085",\n                    "__typename": "SimpleProduct"\n                  }\n                },\n                {\n                  "uid": "YnVuZGxlLzMvNi8x",\n                  "quantity": 1,\n                  "position": 2,\n                  "is_default": false,\n                  "price": 0,\n                  "price_type": "FIXED",\n                  "can_change_quantity": true,\n                  "label": "Sprite Yoga Strap 8 foot",\n                  "product": {\n                    "uid": "MzQ=",\n                    "name": "Sprite Yoga Strap 8 foot",\n                    "sku": "24-WG086",\n                    "__typename": "SimpleProduct"\n                  }\n                },\n                {\n                  "uid": "YnVuZGxlLzMvNy8x",\n                  "quantity": 1,\n                  "position": 3,\n                  "is_default": false,\n                  "price": 0,\n                  "price_type": "FIXED",\n                  "can_change_quantity": true,\n                  "label": "Sprite Yoga Strap 10 foot",\n                  "product": {\n                    "uid": "MzU=",\n                    "name": "Sprite Yoga Strap 10 foot",\n                    "sku": "24-WG087",\n                    "__typename": "SimpleProduct"\n                  }\n                }\n              ]\n            },\n            {\n              "uid": "YnVuZGxlLzQ=",\n              "title": "Sprite Foam Roller",\n              "required": true,\n              "type": "radio",\n              "position": 4,\n              "sku": "24-WG080",\n              "options": [\n                {\n                  "uid": "YnVuZGxlLzQvOC8x",\n                  "quantity": 1,\n                  "position": 1,\n                  "is_default": true,\n                  "price": 0,\n                  "price_type": "FIXED",\n                  "can_change_quantity": true,\n                  "label": "Sprite Foam Roller",\n                  "product": {\n                    "uid": "MjI=",\n                    "name": "Sprite Foam Roller",\n                    "sku": "24-WG088",\n                    "__typename": "SimpleProduct"\n                  }\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"related-topics"},"Related topics"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../../../cart/mutations/add-bundle-products.md"},"addBundleProductsToCart mutation"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-products-interfaces-types-bundle-md-d79630be96801d4c48ae.js.map