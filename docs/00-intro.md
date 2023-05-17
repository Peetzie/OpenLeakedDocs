---
sidebar_position: 1
---

# Getting started in 5 minutes ⏱️

## Introduction

<p align="center">
<img src={require("/static/img/openleaked.png").default} width="375"/>
</p>

This site serves as the official documentaion for the Open-Leaked project.

The project was developed by Niels Kjær Ersbøll and Frederik Peetz-Schou Larsen as part of a bachelor's thesis.

The documentation covers a range of topics, including the original design ideas and a detaield walkthrough of the project's structure. Much of this content is also included in the thesis.

As an added benefit, we have taken the opportunity to document the RESTful API to its full extend.

**Hosting**

The application is currently being hosted on a server located at the Compute Department of the Technical University of Denmark.
Therfore access is restricted by a VPN.

:::info
To get a full overview of the project please read through the entire documentation - however we have included a guide to getting you setup running the application on your own machine - Please check [Installation](#-installation)

:::

## ⚓ Requirements

Getting started only requires [Docker](https://www.docker.com/) and [git](https://git-scm.com/)

## ✨ Installation

1. Begin by downloading the [Github Repository](https://github.com/Open-Leaked/Monorepo) into your preffered location.

   ```bash
   git clone https://github.com/Open-Leaked/Monorepo.git
   cd Monorepo
   ```

   Once you open the Monorepo folder, you should observe a folder structure that looks like this:

   ```bash
   .
   ├── Assets/
   │   ├── guideline/
   │   │   └── fonts
   │   └── logo/
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
   ├── dataparsing/
   │   ├── filterbuilder/
   │   ├── newDataIndexer/
   │   ├── lexicalAnalysis/
   │   ├── Transformer
   ├── frontend/
   │   ├── public/
   │   ├── src/
   │   │   ├── api/
   │   │   ├── components/
   │   │   ├── hooks/
   │   │   ├── types/
   │   └── DockerFile
   ├── mariadb/
   │   ├── config/
   │   ├── db/
   │   │   ├── mysql/
   │   │   ├── OPEN_LEAKED/
   │   │   ├── performance_schema/
   │   │   └── sys/
   │   ├── initdb/
   ├── performance-testing/
   ├── proxy/
   └── target/
       ├── classes/
       ├── generated-sources/
       └── maven-status/
   ```

   Each primary folder (e.g., backend, frontend, proxy etc.) contains a Dockerfile, which is primarily responsible for controlling volume mounting for each image type, copying required files from the Host-OS and installing packages.

   You can choose one of the trhee `Docker Compose` structures located in the Monorepo folder:

   For more information of which one to choose, click [here.](./01-Docker.mdx)

   1. `docker-compose-production`
   2. `docker-compose`
   3. `docker-compose-import-database`

2. To initiate the installation and launch the application services, we first have to create all containers

   ```bash
   docker compose -f <Docker-Compose-File> up
   ```

   `<Docker-Compose-File>` specifies a path to a Docker Compose file.

   Example usage:

   ```bash
   docker compose -f docker-compose.yml up
   ```
3. Open your preferred web browser and navigate to `localhost`.
   :::tip
   You dont have to specify ports in the URL, this is handled by the proxy.
   ::::
   🎊 Congratulations! The application and its services are now up and running on your local machine. 🎊
   :::info
   No users are added by default. To login and use the system, simply use the registration form.
   In addition there is no data in the database. See [Filling the databas](loading) section to get more information
   :::
