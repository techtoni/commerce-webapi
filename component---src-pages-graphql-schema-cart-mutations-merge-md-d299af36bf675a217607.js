"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[3057],{33716:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return c}});var a=t(87462),r=t(45987),m=(t(35776),t(3905)),o=t(65663);const i=["components"],d={},s=(u="InlineAlert",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)});var u;const l={_frontmatter:d},p=o.Z;function c(e){let{components:n}=e,t=(0,r.Z)(e,i);return(0,m.mdx)(p,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"mergecarts-mutation"},"mergeCarts mutation"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"mergeCarts")," mutation transfers the contents of a guest cart into the cart of a logged-in customer. This mutation must be run on behalf of a logged-in customer."),(0,m.mdx)("p",null,"If you do not specify a value for the ",(0,m.mdx)("inlineCode",{parentName:"p"},"destination_cart_id")," input argument, the mutation determines the customer's cart ID and uses that value."),(0,m.mdx)("p",null,"The mutation retains any items that were already in the logged-in customer's cart. If both the guest and customer carts contain the same item, ",(0,m.mdx)("inlineCode",{parentName:"p"},"mergeCarts")," adds the quantities. Upon success, the mutation deletes the original guest cart."),(0,m.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"Use the ",(0,m.mdx)("a",{parentName:"p",href:"assign-customer-to-guest-cart.md"},"assignCustomerToGuestCart")," mutation to assign the contents of a logged-in customer's cart to a guest cart.\nCustomer cart becomes inactive and the guest cart remains active."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    mergeCarts(\n        source_cart_id: String!\n        destination_cart_id: String\n    ) {\n        Cart!\n    }\n}\n")),(0,m.mdx)("h2",{id:"reference"},"Reference"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-mergeCarts"},(0,m.mdx)("inlineCode",{parentName:"a"},"mergeCarts"))," reference provides detailed information about the types and fields defined in this mutation."),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"In the following example, the customer had one Overnight Duffle in the cart (",(0,m.mdx)("inlineCode",{parentName:"p"},"CYmiiQRjPVc2gJUc5r7IsBmwegVIFO43"),") before a guest cart (",(0,m.mdx)("inlineCode",{parentName:"p"},"mPKE05OOtcxErbk1Toej6gw6tcuxvT9O"),") containing a Radiant Tee and another Overnight Duffle was merged. The cart now includes three items, including two Overnight Duffles."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  mergeCarts(\n    source_cart_id: "mPKE05OOtcxErbk1Toej6gw6tcuxvT9O",\n    destination_cart_id: "CYmiiQRjPVc2gJUc5r7IsBmwegVIFO43"\n  ) {\n    itemsV2 {\n      items {\n        id\n        product {\n          name\n          sku\n        }\n        quantity\n      }\n      total_count\n      page_info {\n        page_size\n        current_page\n        total_pages\n      }\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mergeCarts": {\n      "itemsV2": {\n        "items": [\n          {\n            "id": "14",\n            "product": {\n              "name": "Overnight Duffle",\n              "sku": "24-WB07"\n            },\n            "quantity": 2\n          },\n          {\n            "id": "17",\n            "product": {\n              "name": "Radiant Tee",\n              "sku": "WS12"\n            },\n            "quantity": 1\n          }\n        ],\n        "total_count": 2,\n        "page_info": {\n          "page_size": 20,\n          "current_page": 1,\n          "total_pages": 1\n        }\n      }\n    }\n  }\n}\n')),(0,m.mdx)("p",null,"The following example executes the previous request without specifying ",(0,m.mdx)("inlineCode",{parentName:"p"},"destination_cart_id"),"."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  mergeCarts(\n    source_cart_id: "mPKE05OOtcxErbk1Toej6gw6tcuxvT9O"\n  ) {\n    itemsV2 {\n      items {\n        id\n        product {\n          name\n          sku\n        }\n        quantity\n      }\n      total_count\n      page_info {\n        page_size\n        current_page\n        total_pages\n      }\n    }\n  }\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mergeCarts": {\n      "itemsV2": {\n        "items": [\n          {\n            "id": "14",\n            "product": {\n              "name": "Overnight Duffle",\n              "sku": "24-WB07"\n            },\n            "quantity": 2\n          },\n          {\n            "id": "17",\n            "product": {\n              "name": "Radiant Tee",\n              "sku": "WS12"\n            },\n            "quantity": 1\n          }\n        ]\n      },\n      "total_count": 2,\n      "page_info": {\n        "page_size": 20,\n        "current_page": 1,\n        "total_pages": 1\n      }\n    }\n  }\n}\n')),(0,m.mdx)("h2",{id:"errors"},"Errors"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Error"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Current user does not have an active cart.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"mergeCarts")," mutation deactivates the guest cart specified in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"source_cart_id")," after merging. The guest cannot make any further operations with it.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},'Required parameter "source_cart_id" is missing')),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"source_cart_id")," attribute contains an empty value.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"The current customer isn't authorized.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The current customer is not currently logged in, or the customer's token does not exist in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"oauth_token")," table, or you tried to merge two guest carts.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"The current user cannot perform operations on cart")),(0,m.mdx)("td",{parentName:"tr",align:null},"The authorized customer tried to merge a guest cart into the cart of another customer.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Could not create empty cart for customer")),(0,m.mdx)("td",{parentName:"tr",align:null},"The system could not create an empty cart for the logged-in customer")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-cart-mutations-merge-md-d299af36bf675a217607.js.map