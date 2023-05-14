---
sidebar_position: 2
---

# Redis - Cache

:::info
To see how caching is enabled on certain entities check the [Backend docs](../Backend#repositories)
:::
We implement caching as a means to improve the overall performance of our database. It is a requirement for fulfilling the constraints of a RESTful API.

Caching works by temporarily storing a copy of the query and response in memory. This way, if the same request is send again within a specific timewindow, called the `time-to-live` time, the response can be quickly retrieved from memory, rather than having to access the slower persistent user storage again.
This helps improve response times and reduce the load on the persistent layer.

:::tip
By default, our system sets the `time-to-live` time for cached values to 5 minutes. However, this value can be adjust based on the available RAM and expected number of requests that are to be made within the `time-to-live` time period.
We recommend configuring the `time-to-live` time based on host-server specifications.
:::

:::info
Adjusting the `time-to-live` time period is performed in the `application.yml` configuration file for the backend.
:::

It is important to note that not all variables stored in the persistance layer is suitable for caching as some of them are unlikely to be requsted again and may therefore not benefit from caching.

Based on the persistent data entity relationships we have identified the following variables that are suitable for caching:

> - BreachIDs
> - List of Breaches
> - Email Exists
> - Password Exists
> - Password Value
> - Username Exists
> - Username value
> - Breaches associated with domain lookup

With the exception of `BreachIDs`, all cached values in our system are associated with the type of Searchable which defines all types of credentials available for searching.

To act as an in-memory database we have used [Redis](https://redis.io).
Redis is an open source - fitting the project, in-memory data storage solution which is adapted in several large projects, proving themselves as a trusted source.

Redis provides configuration options for handling the overall data structure and suppors a persistence layer that can provide a backup in case of system failure.
However to maintain current scope of the project a base configuration was implemented based on a _Getting started_ guide.
