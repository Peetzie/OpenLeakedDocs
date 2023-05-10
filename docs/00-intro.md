---
sidebar_position: 1
---

# Introduction

<p align="center">
<img src={require("/static/img/openleaked.png").default} width="375"/>
</p>


This is the official site for documentation related to the Open-Leaked project. 

The project was initially developed by Niels Kjær Ersbøll and Frederik Peetz-Schou Larsen as a Bachelor Thesis. 



The docs wiil covers anything from original design ideas for the future and a walk through of how the project is structured. 
Many of this is also included in the Thesis. 

As an added benefit we allow ourselves to fully document the RESTful API ustilized in the project. 

**Hosting**

The application is currenly being hosted on a server at The Compute Department at The Technical University of Denmark


:::info
To start the project it is important to read through the documentation. However a Quick start / getting started is available here
:::


## Folder structure for the entire Monorepo

```bash
.
├── Assets/
│   ├── guideline/
│   │   └── fonts
│   └── logo
├── backend/
│   ├── src
│   ├── main/
│   │   ├── java/
│   │   │   ├── dk.dtu.openleaked.Backend/
│   │   │   │   ├── configuration/
│   │   │   │   ├── controllers/
│   │   │   │   ├── entrypoints/
│   │   │   │   ├── filters/
│   │   │   │   ├── models/
│   │   │   │   │   ├── request/
│   │   │   │   │   └── response/
│   │   │   │   ├── repositories/
│   │   │   │   ├── security/
│   │   │   │   └── services/
│   │   │   └── OpenLeakedBackendServerApplication
│   │   └── Resources/
│   │       ├── mail/
│   │       │   └── html/
│   │       └── application.yml
│   ├── Dockerfile
│   ├── Dockerfile-production
│   └── pom.xml
├── dataparsing/
│   ├── filterbuilder/
│   ├── newDataIndexer/
│   ├── Parser/
│   ├── Transformer
│   └── sorter.sh
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── types/
│   │   ├── app.tx
│   │   └── main.tsx
│   └── DockerFile
├── mariadb/
│   ├── config/
│   ├── db/
│   │   ├── mysql/
│   │   ├── OPEN_LEAKED/
│   │   ├── performance_schema/
│   │   └── sys/
│   ├── initdb/
│   ├── Dockerfile
│   └── import.sql
├── performance-testing/
│   ├── 0-copy-16.csv
│   └── locustfile.py
├── proxy/
│   ├── Dockerfile
│   └── nginx.conf
├── target/
│   ├── classes/
│   ├── generated-sources/
│   └── maven-status/
├── docker-compose.yml
├── docker-compose-import-data.yml
├── docker-compose-prodocution.yml
├── Dockerfile-nginx-production
├── nginx-production.conf
└── external libraries/
```