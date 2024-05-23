"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[8990],{59914:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return u}});var a=t(87462),o=t(45987),r=(t(35776),t(3905)),d=t(65663);const p=["components"],m={},i={_frontmatter:m},l=d.Z;function u(e){let{components:n}=e,t=(0,o.Z)(e,p);return(0,r.mdx)(l,(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"applycoupontocart-mutation"},"applyCouponToCart mutation"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"applyCouponToCart")," mutation applies a pre-defined coupon code to the specified cart. Valid coupon codes are defined in cart price rules."),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"mutation: {applyCouponToCart(input: ApplyCouponToCartInput) {ApplyCouponToCartOutput}}")),(0,r.mdx)("h2",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-applyCouponToCart"},(0,r.mdx)("inlineCode",{parentName:"a"},"applyCouponToCart"))," reference provides detailed information about the types and fields defined in this mutation."),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following example applies the coupon code ",(0,r.mdx)("inlineCode",{parentName:"p"},"H2O")," to the cart. For this coupon to be valid, the Affirm Water Bottle (",(0,r.mdx)("inlineCode",{parentName:"p"},"sku"),": 24-UG06) must be in the cart."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  applyCouponToCart(\n    input: {\n      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG",\n      coupon_code: "H20"\n    }\n  ) {\n    cart {\n      itemsV2 {\n        items {\n          product {\n            name\n          }\n          quantity\n        }\n        total_count\n        page_info {\n          page_size\n          current_page\n          total_pages\n        }\n      }\n      applied_coupons {\n        code\n      }\n      prices {\n        grand_total{\n          value\n          currency\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "applyCouponToCart": {\n      "cart": {\n        "itemsV2": {\n          "items": [\n            {\n              "product": {\n                "name": "Gold Membership"\n              },\n              "quantity": 2\n            },\n            {\n              "product": {\n                "name": "Strive Shoulder Pack"\n              },\n              "quantity": 1\n            },\n            {\n              "product": {\n                "name": "Affirm Water Bottle "\n              },\n              "quantity": 1\n            }\n          ],\n          "total_count": 3,\n          "page_info": {\n            "page_size": 20,\n            "current_page": 1,\n            "total_pages": 1\n          }\n        },\n        "applied_coupons": {\n          "code": "H20"\n        },\n        "prices": {\n          "grand_total": {\n            "value": 134.08,\n            "currency": "USD"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"errors"},"Errors"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Error"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"A coupon is already applied to the cart. Please remove it to apply another")),(0,r.mdx)("td",{parentName:"tr",align:null},"The value specified in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"coupon_code")," argument has already applied to cart. Use ",(0,r.mdx)("a",{parentName:"td",href:"remove-coupon.md"},"removeCouponFromCart")," to remove the current coupon and to apply another.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Cart does not contain products.")),(0,r.mdx)("td",{parentName:"tr",align:null},"The coupon cannot be applied to an empty cart.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Could not find a cart with ID "XXX"')),(0,r.mdx)("td",{parentName:"tr",align:null},"The specified ",(0,r.mdx)("inlineCode",{parentName:"td"},"cart_id")," value does not exist in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"quote_id_mask")," table.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},'Required parameter "coupon_code" is missing')),(0,r.mdx)("td",{parentName:"tr",align:null},"The required ",(0,r.mdx)("inlineCode",{parentName:"td"},"coupon_code")," argument contains an empty value.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"The coupon code isn't valid. Verify the code and try again.")),(0,r.mdx)("td",{parentName:"tr",align:null},"The entered coupon code is not applicable. Check the existing shopping cart price rules for details.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"The current user cannot perform operations on cart XXX")),(0,r.mdx)("td",{parentName:"tr",align:null},"An unauthorized user (guest) tried to add the product into a customer's cart, or an authorized user (customer) tried to add the product into the cart of another customer.")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-cart-mutations-apply-coupon-md-ddd886e4aab064a632a3.js.map