---
layout: docs
title: Datacol | Architecture
---

### Architecture

*this page in "Work in progress". We are actively working to make it better.*

#### Our Approach

Datacol helps you create Heroku like infrastructure for deploying container-native applications on Google Cloud. It simplifies the process developers use to build, deploy and manage their applications in the cloud. We took more nimble approach with Datacol than other PaaS folks. It acts as a thin control layer and uses various managed services by cloud under the hood and exposes a developer friendly layer to quickly deploy apps.

Datacol is installed into your own Google Cloud account and uses [Container engine](https://cloud.google.com/container-engine/), [Registry](https://cloud.google.com/container-registry/), [CloudBuilder](https://cloud.google.com/container-builder/), and many other great GCP services under the hood but automates it all away to give you a better deployment experience. It uses Docker under the hood so if you want to customize anything (languages, dependencies, etc) you can simply add a Dockerfile to your project.
