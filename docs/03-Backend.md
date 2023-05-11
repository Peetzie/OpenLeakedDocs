# Backend

## Overview
The backend of the application is responsible for handling all the logical operations and functionalities. 
As it contains various modules and components it can be quite complex to grasp. We provide a brief introduction to the folder structure of which we will explain its contents:


```
.
├── src/
│   └── main/
│       ├── java/
│       │   ├── dk.dtu.openleaked.Backend/
│       │   │   ├── configuration/
│       │   │   ├── controllers/
│       │   │   ├── entrypoints/
│       │   │   ├── filters/
│       │   │   ├── models/
│       │   │   │   ├── request/
│       │   │   │   └── response/
│       │   │   ├── repositories/
│       │   │   ├── security/
│       │   │   └── services/
│       │   └── OpenLeakedBackendServerApplication
│       └── Resources/
│           ├── mail/
│           │   └── html/
│           └── application.yml
├── Dockerfile
├── Dockerfile-production
└── pom.xml
```
### Configuration
The *configuration* folder contains configuration classes that defines behavior of the SMTP mail server and the Security Configuration. 
:::info
Many of the global variables are set in the ```application.yml``` to easily change values across multiple classes. 
:::

### Controllers
The *controllers* folder contains all the endpoints for the RESTful API. Each controller class contains one or more API endpoints. All endpoints are structured with the same boiler-plate: ```/api/<controller-type>/<end-point>```, making it easy to find and add new endpoints to existing or new categories. 
Keep in mind that the *request* and *responses* are defined in the [models folder](#models).


### Entrypoints 
The *entrypoints* folder contains the custom entry point used in the ```SecurityFilterChain```. This is covered in [The Security Chain](./Authentication#the-security-chain).

### Filters
Contain only one class - ```RateLimitFilter``` which is responsible for providing rate-limiting functionality to the application. 

#### Ratelimit
The rate-limit feature is implemented using the [*Token Bucket Algorithm*](https://en.wikipedia.org/wiki/Token_bucket). The rate-limit is based on user accounts, with each account assigned a capacity of tokens within a specified time period. This capacity is set upon [authorization](./04-Authentication.mdx). Once a user's capacity is reach, all subsequent requests will be denied and the user will recieve ```429 - Too Many Requests``` HTTP response. This feature provides an added layer of security to prevent brute-force attacks and DDoS attacks. 
:::tip
The capacity and time-period of tokens is adjusted within the ```application.yml```file.
::::


### Models
The *models* folder contains all objects used in the application, including those related to the databases. Each class is annotated to match the database entities.
To mark a class as an entity in MariaDB, we make use of the ```@Entity``` annotation.
Some objects may contain additional information used in the backend, but not to be stored in persistent storage or in-memory. Theese variables are annotated using ```JsonIgnore```. 

:::tip
It is important to keep conistensy between class objects and entities in the database. Any changes made to the database should be reflected in the associated class objects, and vice versa. 
This ensures that data is send and retrieved correclty. Failure to maintain consistency between the entities and class objects can result in errors and unexpected behavior. 
:::

There are two subdirectores located in the folder, namely;
Within the folder, there are two subdirectories contained; ```request```and ```response```. 
Theese directories contain records that define the data that is send and retrieved using the RESTful API. ```request``` defines the data that the API sends to the server(backend). The ```responses``` defines records that the server sends back to the client. 

### Repositories

In the *repositories* folder, you find classes that provide the configuration of [CRUD](https://stackify.com/what-are-crud-operations/) functionality for the database. 
Additionally, we enable [caching](./02-Database/Cache.mdx) of certain entities using the ```@Cacheable``` annotation. 


### Security
The *security* folder contains the *Security service class*. This enables the   [JDBC](https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/jdbc.html) authentication, i.e., using a database to store user credentials and authenticating users. 
:::tip
In here we can define SSO authentication aswell to add it to the ```Secuity Chain```.
:::

### Services
The *services* folder contains services classes that provide helper functions and logic for various features of the application. This includes functions such as hashing, sending mails and defining custom functions to be used with the [Bloom filter](./02-Database/BloomFilter.mdx).
We also define the general connection pool for and storage types for Redis. 


### Resources
This folder, *resources*, contains the globally defined variables within ```application.yml```. Many of the program settings are controlled from this file. An example of this is the SMTP configuration, rate-limiting and more. Additionally, there is a subdirectory containing a directory called *html*, which contains all HTML-based templates for sending emails via *[Thymeleaf](https://www.thymeleaf.org/)*

#### Note on dependencies


:::danger
```pom.xml```is the configuration file for [Maven](https://maven.apache.org/) which is used for dependency management and building the backend.It is found in the backend root folder.  
It is important to keep dependencies updated to ensure that any known vulnerabilites are patched - specifically the Security modules. 
```bash
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>org.thymeleaf.extras</groupId>
    <artifactId>thymeleaf-extras-springsecurity6</artifactId>
    <version>3.1.1.RELEASE</version>
</dependency>
```


