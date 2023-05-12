---
sidebar_position: 1
---

# Introduction
This section aims to cover the different subjects of our CORE database design.
The section is further divded into segmented databases, as the entire database design evolves around multiple parts aiding one another to improve response times over one simple solution. 

Our database design is based on two different categories *persistent data storage* i.e, storage that won't be deleted by a server-shut down and in-memory based storage. 

A further segmentation can be performed on the in-memory based storage, where we are utlizing both a cache and a Bloom filter. 
:::info
Bloom filters are technically not a database, but a probabilistic data structure. However their functionality is to reduce database times and they are often associated with database designs
:::

