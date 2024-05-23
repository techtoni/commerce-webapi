"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2658],{35569:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return p}});var n=a(87462),r=a(45987),i=(a(35776),a(3905)),o=a(65663);const m=["components"],s={},l={_frontmatter:s},d=o.Z;function p(e){let{components:t}=e,a=(0,r.Z)(e,m);return(0,i.mdx)(d,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"getting-started-with-adobe-commerce-web-apis"},"Getting started with Adobe Commerce web APIs"),(0,i.mdx)("p",null,"The Adobe Commerce and Magento Open Source web API framework provides integrators and developers the means to use web services that communicate with the application. Key features include:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Support for ",(0,i.mdx)("a",{parentName:"p",href:"../graphql/"},"GraphQL"),", ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/rest/"},"REST")," (Representational State Transfer) and ",(0,i.mdx)("a",{parentName:"p",href:"soap-web-api-calls.md"},"SOAP")," (Simple Object Access Protocol).")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Three types of ",(0,i.mdx)("a",{parentName:"p",href:"./authentication/index.md"},"authentication"),":"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Third-party applications authenticate with ",(0,i.mdx)("a",{parentName:"li",href:"./authentication/gs-authentication-oauth.md"},"OAuth 1.0a"),"."),(0,i.mdx)("li",{parentName:"ul"},"Mobile applications authenticate using ",(0,i.mdx)("a",{parentName:"li",href:"./authentication/gs-authentication-token.md"},"tokens"),"."),(0,i.mdx)("li",{parentName:"ul"},"Administrators and customers are authenticated with ",(0,i.mdx)("a",{parentName:"li",href:"./authentication/gs-authentication-token.md"},"login credentials"),"."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"All accounts and integrations are assigned resources that they have access to. The API framework checks that any call has the authorization to perform the request.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Any native or third-party service can be ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/web-api/services/"},"configured as a web API")," with a few lines of xml. To configure a web API, you define XML elements and attributes in a ",(0,i.mdx)("inlineCode",{parentName:"p"},"webapi.xml")," configuration file. If a service is not defined in a configuration file, it will not be exposed at all.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The framework is based on the CRUD (create, read, update, delete) & search model. The system does not currently support webhooks.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The framework supports field filtering of web API responses to conserve mobile bandwidth.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Integration style web APIs enable a single web API call to run multiple services at once for a more efficient integration.  An example of this behavior can be seen in the Catalog where one web API call can create a product. If your payload includes the ",(0,i.mdx)("inlineCode",{parentName:"p"},"stock_item")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"media_gallery_entries")," objects, then the framework will also create the product's inventory & media in that one API call."))),(0,i.mdx)("h2",{id:"what-can-i-do-with-the-web-apis"},"What can I do with the web APIs?"),(0,i.mdx)("p",null,"The APIs can be used to perform a wide array of tasks. For example:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Create a shopping app. This can be a traditional app that a user downloads on a mobile device. You could also create an app that an employee uses on a showroom floor to help customers make purchases.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Integrate with CRM (Customer Relationship Management) or ERP (Enterprise Resource Planning) backend systems, such as Salesforce or Xero.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Integrate with a CMS (Content Management System). Currently, content tagging is not supported.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Create JavaScript widgets in the storefront or on the Admin panel. The widget makes AJAX calls to access services."))),(0,i.mdx)("h2",{id:"how-do-i-get-started"},"How do I get started?"),(0,i.mdx)("p",null,"You must register a web service on Admin. Use the following general steps to set up Magento to enable web services."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"If you are using token-based authentication, create a web services user on Admin by selecting ",(0,i.mdx)("strong",{parentName:"li"},"System")," > Permission > ",(0,i.mdx)("strong",{parentName:"li"},"All Users")," > Add New User. (If you are using session-based or OAuth authentication, you do not need to create the new user in the Admin.)"),(0,i.mdx)("li",{parentName:"ol"},"Create a new integration on Admin. To create an integration, click ",(0,i.mdx)("strong",{parentName:"li"},"System")," > Extensions > ",(0,i.mdx)("strong",{parentName:"li"},"Integration")," > Add New Integration**. Be sure to restrict which resources the integration can access."),(0,i.mdx)("li",{parentName:"ol"},"Use a REST or SOAP client to configure authentication.")),(0,i.mdx)("p",null,"See the User Guide for more information."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-get-started-index-md-9e8f59fc31ce425ba936.js.map