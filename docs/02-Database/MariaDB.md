---
sidebar_position: 1
---

# MariaDB - Persistent storage

In this section we aim to provide usefull insight into the design decisions for the databases.
We also here define basic schemas used to deploy the project.

The database is based on a SQL database in MariaDB.
Therefor the entity relationships are important. If improperly design they would slow down the application and vice versa.

The database evolves around one `schema`.

The entity relationships are freely available here for the interrested users:

> 1. [![Entity Relationship diagram for users]](/img/ERD/users_ERD.pdf)
>
> 2. [![Entity Relationship diagram for data]](/img/ERD/ERD_diagram.drawio.pdf)

## Loading the schemas

To start the Docker containers the `schema` of the database is important.
To get you started we have provided that in SQL form here.

Essentially the following snippet creates the tables in the database and adds constraints to values, assigns primary keys and foregin keys.

```sql
DROP DATABASE IF EXISTS OPEN_LEAKED;

CREATE DATABASE OPEN_LEAKED;

USE OPEN_LEAKED;

create table breach
(
    id            serial primary key,
    date          date         null,
    inserted_date date         not null,
    name          varchar(255) not null,
    source        varchar(255) null,
    verified      boolean      not null,
    iconURL       varchar(255) null,
    summary       text         null,
    description   text         null
);

create table email
(
    id     serial primary key,
    domain varchar(255) not null,
    local  varchar(255) not null
);

create table email_breaches
(
    email_id    bigint unsigned not null,
    breaches_id bigint unsigned not null
);

create table password
(
    id    serial unique primary key,
    value varchar(255) not null
);

create table password_breaches
(
    password_id bigint unsigned not null,
    breaches_id bigint unsigned not null
);

create table username
(
    id    serial unique primary key ,
    value varchar(255) not null
);

create table username_breaches
(
    username_id bigint unsigned not null,
    breaches_id bigint unsigned not null
);

create table subscription
(
    domain varchar(255) not null,
    local  varchar(255) not null,
    primary key (domain, local)
);

create table tip
(
    link varchar(255) primary key,
    description varchar(255) null,
    size        int,
    unit        varchar(255) null,
    breach_date date         null
);


create table users
(
    username   varchar(50)       not null
        primary key,
    password   varchar(100)      not null,
    enabled    tinyint default 1 not null
);



create table authorities
(
    username  varchar(50) not null,
    authority varchar(50) not null,
    constraint ix_auth_username
        unique (username, authority),
    constraint authorities_ibfk_1
        foreign key (username) references OPEN_LEAKED.users (username)
);
```

:::tip
The following assumes that you've created the `schema`
If not enter the following containerized

```sql
CREATE SCHEMA IF NOT EXISTS OPEN_LEAKED

use OPEN_LEAKED
```

:::

## Design thoughts

The database deisgn is based on the concept that each real-world breach is unique, but the associated data is not.
This means that a `searchable`, such as a username, email, password or domain may be present in multiple databreaches.
This approach allows us to establish the required entity relationships for the application. During pre-processing of the data each searchable entity is assigned a unique ID by MariaDB, as is each individual breach.

### Data

Large tables are created each containing an ID for each type of `searchable` entity and an id for a breach.
If a searchable entity appears in multiple breaches, its ID will be duplicated in the table, but the primary key will remain unique due to the different associated breach IDs.
By splitting up the entity types and using unique IDs, we can avoid searching through unnecessary records, resulting in faster query speeds.
By splitting the email into `local` and `domain` we can easily filter and search based on the domain name alone. This significantly reduce the number of records tht need to be searched, resulting in faster query speeds.
Additionally it allows for a more targed searches, such as finding all breaches associated with a particular domain name.

:::danger
To ensure security, it is strongly advised to restrict the usage of domain search functionality to authorized users only. This is because it could be exploited by attackers to gather sensitive information about a domain.
It is recommended to implement a verification process that confirms the user is the owner or administrator of the domain.
::::

### Authorisations

In the application, there are two tables `user`and `authorities`, that are used for authentication. These tables are an based on the [JDBC Authentication](https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/jdbc.html) base schema which is provided by
[Spring Security](https://docs.spring.io/spring-security/reference/index.html).

The `user` table contains the user's username, passwrod and whether the account is enabled or disabled.
The `authorities` table contains the user's role.

Our `user`table have been extended to also contain information regarding the student number or employee initials, and a full name.
The `authorities` remains to default values.

#### Future works

A great idea for future development was perhabs to include the Single-Sign On system from DTU, to automaticly allow users access without them having to create an account.

:::info
Single sign on allows users to be authentication across sites by sending a special type of authentication token.
This can both be a vulnerability and a security boost based on the application.
By using the two-factor authentication from DTU, SSO could help in further securing this application
:::

:::caution
Any major changes to the database would require removing the folder ```db``` inside ```root/MariaDB```.
This rebuilds the entire database from the schema stated [here](#loading-the-schemas)
