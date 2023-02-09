"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9587],{32011:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return x}});var n,r=a(87462),d=a(63366),m=(a(15007),a(64983)),s=a(91515),l=["components"],i={},o=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),p={_frontmatter:i},u=s.Z;function x(e){var t=e.components,a=(0,d.Z)(e,l);return(0,m.mdx)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"resetpassword-mutation"},"resetPassword mutation"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"resetPassword")," mutation resets customer password using a reset password token and the customer's email address. Use it to set a new password for the registered customer after calling the ",(0,m.mdx)("a",{parentName:"p",href:"request-password-reset-email.md"},"requestPasswordResetEmail")," mutation."),(0,m.mdx)("h2",{id:"syntax"},"Syntax"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"mutation: {resetPassword(email: String!, resetPasswordToken: String!, newPassword: String!): Boolean}")),(0,m.mdx)("h2",{id:"example-usage"},"Example usage"),(0,m.mdx)("p",null,"The following call sets a new customer password."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Request:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  resetPassword(\n    email: "roni_cost@example.com",\n    resetPasswordToken: "gh80pkjGdsPyiXc0sUUXswX1uGN7crUr",\n    newPassword: "new_password"\n  )\n}\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Response:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "resetPassword": true\n  }\n}\n')),(0,m.mdx)("h2",{id:"input-arguments"},"Input arguments"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"resetPassword")," mutation must contain the following arguments:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Argument"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"email")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"Specifies the customer account that needs a password reset")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"resetPasswordToken")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"A runtime token. You can find it in the reset email URL (see ",(0,m.mdx)("a",{parentName:"td",href:"request-password-reset-email.md"},"requestPasswordResetEmail")," mutation) or in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"customer_entity"),".",(0,m.mdx)("inlineCode",{parentName:"td"},"rp_token")," database table.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"newPassword")),(0,m.mdx)("td",{parentName:"tr",align:null},"String!"),(0,m.mdx)("td",{parentName:"tr",align:null},"The new password")))),(0,m.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"The new password must satisfy the password policies set for the store."),(0,m.mdx)("h2",{id:"output"},"Output"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"resetPassword")," mutation returns ",(0,m.mdx)("inlineCode",{parentName:"p"},"true")," if the request was successful. Otherwise, it returns ",(0,m.mdx)("inlineCode",{parentName:"p"},"false"),"."),(0,m.mdx)("h2",{id:"errors"},"Errors"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Error"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Cannot set the customer's password")),(0,m.mdx)("td",{parentName:"tr",align:null},"A general error message that appears on some internal system errors. The original error is logged and can be found in the application logs.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"newPassword must be specified")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"newPassword")," argument is empty.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"resetPasswordToken must be specified")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"resetPasswordToken")," argument is empty.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"The account is locked")),(0,m.mdx)("td",{parentName:"tr",align:null},"You cannot modify a locked customer account.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"The email address has an invalid format.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The value provided in the ",(0,m.mdx)("inlineCode",{parentName:"td"},"email")," argument has an invalid format.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"You must specify an email address.")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"email")," argument is empty.")))),(0,m.mdx)("h2",{id:"related-topics"},"Related topics"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"request-password-reset-email.md"},"requestPasswordResetEmail mutation"))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-reset-password-md-74abada5c02275f57bfa.js.map