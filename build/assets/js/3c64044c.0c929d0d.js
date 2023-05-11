"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=a,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={},o="Authentication",s={unversionedId:"Authentication",id:"Authentication",title:"Authentication",description:"In the following section we make an introduction to the technical specification and usage of our authentication system.",source:"@site/docs/04-Authentication.md",sourceDirName:".",slug:"/Authentication",permalink:"/OpenLeakedDocs/docs/Authentication",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Backend",permalink:"/OpenLeakedDocs/docs/Backend"},next:{title:"Frontend",permalink:"/OpenLeakedDocs/docs/Frontend"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Types of security",id:"types-of-security",level:2},{value:"The security chain",id:"the-security-chain",level:2},{value:"Default usage",id:"default-usage",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"In the following section we make an introduction to the technical specification and usage of our authentication system. "),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"We make use of authentication for two reasons - simulate the usage of the Single Sign On (SSO) from DTU and ",(0,a.kt)("a",{parentName:"p",href:"./Backend#ratelimit"},"rate-limiting"),"."),(0,a.kt)("h2",{id:"types-of-security"},"Types of security"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-security/reference/index.html"},"Spring security")," contains many methods for securing an application. We make use of libraries to be consistant with the usage of Spring Boot,\nbut an added benefit is the fact that their implementation is better and more secure compared to what we would be able to write ourselves. "),(0,a.kt)("p",null,"Specified in the ",(0,a.kt)("a",{parentName:"p",href:"/OpenLeakedDocs/docs/Database/MariaDB"},"Database")," section we make us of a simple SQL server to handle our users and their permissions - which is being used by ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/jdbc.html"},"JDBC Connection")," to handle authentication.\nThis includes hashing passwords and adding salt. This is done using the ",(0,a.kt)("inlineCode",{parentName:"p"},"BCRYPT Algorithm"),"."),(0,a.kt)("p",null,"The security type we define is based on sessions. Meaning that once a user is verified they are authorized temporarily using a ",(0,a.kt)("inlineCode",{parentName:"p"},"session Cookie"),". The cookie expires when the client is closed. "),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"}," Spring Security 3.1.1")," has no support for setting the SamSite cookie attribute used to handle CSRF.\nTo get around this the attribute is set in Nginx. ")),(0,a.kt)("h2",{id:"the-security-chain"},"The security chain"),(0,a.kt)("p",null,"All requests in the application goes through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Security Filter Chain")," in the ",(0,a.kt)("a",{parentName:"p",href:"./Backend"},"backend"),".\nIn the ",(0,a.kt)("inlineCode",{parentName:"p"},"Security Filter Chain")," we define permissions for the RESTful API endpoints. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If new endpoints that dont require authorization is added, make sure to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"Security Filter Chain"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/*\n    |\n    |\n    |\n    |\n*/\n return http\n                .csrf((csrf) -> csrf\n                        .csrfTokenRepository(tokenRepository)\n                        .csrfTokenRequestHandler(requestHandler)\n                )\n                .httpBasic((basic) -> basic\n                        // Custom response header to avoid default browser login behavior\n                        .authenticationEntryPoint(new LoginEntryPoint())\n                        .addObjectPostProcessor(new ObjectPostProcessor<BasicAuthenticationFilter>() {\n                            @Override\n                            public <O extends BasicAuthenticationFilter> O postProcess(O filter) {\n                                filter.setSecurityContextRepository(httpSessionSecurityContextRepository);\n                                return filter;\n                            }\n                        }))\n                .authorizeHttpRequests((requests) -> requests\n                        .requestMatchers(HttpMethod.POST, "/api/login/login", "/api/login/recover", "/api/login/register", "/api/login/recover").permitAll()\n                        .requestMatchers(HttpMethod.PUT, "/api/login/verify", "/api/login/newPassword").permitAll()\n                        .requestMatchers(HttpMethod.GET, "/api/csrf", "/api/login/logout", "/api/breaches/all").permitAll()\n                        .anyRequest().authenticated()\n                )\n                .logout(logout -> logout\n                        .logoutUrl("/api/logout")\n                        .invalidateHttpSession(true)\n                        .logoutSuccessUrl("/api/csrf")\n                )\n                .build()\n                ;\n')),(0,a.kt)("p",null,"In the code snippet above we define the implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Security Filter Chain"),".\nInitially we enable CrossSiteRequestForgery of which we add the ",(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/basic-authentication/"},"HTTP basic")," authentication type. "),(0,a.kt)("p",null,"We define a new entrypoint ",(0,a.kt)("inlineCode",{parentName:"p"},"LoginEntryPoint")," to disable the build in ",(0,a.kt)("inlineCode",{parentName:"p"},"WWW-Authentication")," headers and status codes from browsers, in which we disable ",(0,a.kt)("a",{parentName:"p",href:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Y7b_tNfhZCN4M7ItQHfUUQHaEX%26pid%3DApi&f=1&ipt=d75c2a3c050ee1c54767556e55e8a03a11fdcbb34d1c30bca4ae93f4790a4a35&ipo=images"},"default forms"),". "),(0,a.kt)("p",null,"In addition to the entry point we define a custom response header to handle our version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"WWW-Authentication"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},' @Override\n    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authEx) throws IOException {\n        response.addHeader("X-CUSTOM-AUTHENTICATE", "Basic realm=\\"" + getRealmName() + "\\"");\n        response.addHeader("Content-Type", "text/html; charset=utf-8");\n        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);\n        PrintWriter writer  = response.getWriter();\n        writer.println("HTTP Status 401 - " + authEx.getMessage());\n    }\n')),(0,a.kt)("p",null,"Construction of the custom response to the ",(0,a.kt)("inlineCode",{parentName:"p"},"LoginEntryPoint"),"."),(0,a.kt)("p",null,"Lastly we define the ",(0,a.kt)("inlineCode",{parentName:"p"},"authorizedHttpRequests")," on a request ",(0,a.kt)("em",{parentName:"p"},"TYPE")," basis, i.e, POST, PUT and GET and their endpoints allowed without authoirsation.\nIf any other endpoint is reached they are met with the ",(0,a.kt)("inlineCode",{parentName:"p"},"LoginEntryPoint")," request headers and the user is redirected to the Sign in page. "),(0,a.kt)("p",null,"Similarily we ensure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"Security Filter Chain")," listens for any HTTP basic logout type to sign the user out and revoke a session token. "),(0,a.kt)("h2",{id:"default-usage"},"Default usage"),(0,a.kt)("p",null,"With the ",(0,a.kt)("a",{parentName:"p",href:"./intro#-installation"},"initial install")," there are no users in the database. Furthermore no user with ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," role is added.\nIn future development a great feature would be a user panel allowing users to edit their information, and perhabs upload data to the application if thay had acquired a maintainer/admin role. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To use the system upon ",(0,a.kt)("a",{parentName:"p",href:"./intro#-installation"},"initial install")," - Simply create a user using the frontend.")))}c.isMDXComponent=!0}}]);