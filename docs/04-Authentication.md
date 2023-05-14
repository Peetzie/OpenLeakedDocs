# Authentication

In the following section we make an introduction to the technical specification and usage of our authentication system.

## Introduction

We make use of authentication for two reasons - simulate the usage of the Single Sign On (SSO) from DTU and [rate-limiting](./Backend#ratelimit).

## Types of security

[Spring security](https://docs.spring.io/spring-security/reference/index.html) contains many methods for securing an application. We make use of libraries to be consistant with the usage of Spring Boot,
but an added benefit is the fact that their implementation is better and more secure compared to what we would be able to write ourselves.

Specified in the [Database](./Database/MariaDB) section we make us of a simple SQL server to handle our users and their permissions - which is being used by [JDBC Connection](https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/jdbc.html) to handle authentication.
This includes hashing passwords and adding salt. This is done using the `BCRYPT Algorithm`.

The security type we define is based on sessions. Meaning that once a user is verified they are authorized temporarily using a `session Cookie`. The cookie expires when the client is closed.

:::caution
As of ` Spring Security 3.1.1`, Spring Security has no support for setting the SamSite cookie attribute used to handle CSRF.
To get around this the attribute is set in Nginx.
:::

## The security chain

All requests in the application goes through the `Security Filter Chain` in the [backend](./Backend).
In the `Security Filter Chain` we define permissions for the RESTful API endpoints.
:::tip
If new endpoints that dont require authorization is added, make sure to update the `Security Filter Chain`
::::

```java
/*
    |
    |
    |
    |
*/
 return http
.csrf((csrf) -> csrf
        .csrfTokenRepository(tokenRepository)
        .csrfTokenRequestHandler(requestHandler)
)
.httpBasic((basic) -> basic
        // Custom response header to avoid default browser login behavior
        .authenticationEntryPoint(new LoginEntryPoint())
        .addObjectPostProcessor(new ObjectPostProcessor<BasicAuthenticationFilter>() {
            @Override
            public <O extends BasicAuthenticationFilter> O postProcess(O filter) {
                filter.setSecurityContextRepository(httpSessionSecurityContextRepository);
                return filter;
            }
        }))
.authorizeHttpRequests((requests) -> requests
        .requestMatchers(HttpMethod.POST, "/api/login/login", "/api/login/recover", "/api/login/register", "/api/login/recover").permitAll()
        .requestMatchers(HttpMethod.PUT, "/api/login/verify", "/api/login/newPassword").permitAll()
        .requestMatchers(HttpMethod.GET, "/api/csrf", "/api/login/logout", "/api/breaches/all").permitAll()
        .anyRequest().authenticated()
)
.logout(logout -> logout
        .logoutUrl("/api/logout")
        .invalidateHttpSession(true)
        .logoutSuccessUrl("/api/csrf")
)
.build()
;
```

In the code snippet above we define the implementation of the `Security Filter Chain`.
Initially we enable CrossSiteRequestForgery of which we add the [HTTP basic](https://swagger.io/docs/specification/authentication/basic-authentication/) authentication type.

We define a new entrypoint `LoginEntryPoint` to disable the build in `WWW-Authentication` headers and status codes from browsers, in which we disable [default forms](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Y7b_tNfhZCN4M7ItQHfUUQHaEX%26pid%3DApi&f=1&ipt=d75c2a3c050ee1c54767556e55e8a03a11fdcbb34d1c30bca4ae93f4790a4a35&ipo=images).

In addition to the entry point we define a custom response header to handle our version of the `WWW-Authentication`.

```java
@Override
public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authEx) throws IOException {
    response.addHeader("X-CUSTOM-AUTHENTICATE", "Basic realm=\"" + getRealmName() + "\"");
    response.addHeader("Content-Type", "text/html; charset=utf-8");
    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
    PrintWriter writer  = response.getWriter();
    writer.println("HTTP Status 401 - " + authEx.getMessage());
}
```

Construction of the custom response to the `LoginEntryPoint`.

Lastly we define the `authorizedHttpRequests` on a request _TYPE_ basis, i.e, POST, PUT and GET and their endpoints allowed without authoirsation.
If any other endpoint is reached they are met with the `LoginEntryPoint` request headers and the user is redirected to the Sign in page.

Similarily we ensure that the `Security Filter Chain` listens for any HTTP basic logout type to sign the user out and revoke a session token.

## Default usage

With the [initial install](./intro#-installation) there are no users in the database. Furthermore no user with `admin` role is added.
In future development a great feature would be a user panel allowing users to edit their information, and perhabs upload data to the application if thay had acquired a maintainer/admin role.
:::tip
To use the system upon [initial install](./intro#-installation) - Simply create a user using the frontend.
:::
