---
layout: docs
---

### Comparing Datacol and App Engine

[Google App](https://cloud.google.com/appengine/) Engine (often referred to as GAE or simply App Engine) is a cloud computing platform for developing and hosting web applications in Google-managed data centers. It is released on 2008, and had gone tremendous improvement recently.

Historically App-engine is notorious for weird bugs and various idiosyncrasies, but App Engine of 2017 is way different than App-engine of 2008. Currently it supports two mode -

- [Standard Environemnt](https://cloud.google.com/appengine/docs/standard/) which supports limited language and versions and includes various services like TaskQueue, Memcached etc.
- [Flexible environment](https://cloud.google.com/appengine/docs/flexible/) which lets you deploy apps from [`Dockerfile`](https://docs.docker.com/engine/reference/builder/) and supports unlimited language runtime, but exclude almost all of services provided in Standard environment.

Google also has [a comparison page](https://cloud.google.com/appengine/docs/the-appengine-environments) between the two and when to choose between the two.

It's natural to ask why should anyone choose Datacol over App Engine, and honestly we are also asking ourselves same question while developing Datacol. We believe if you have lesser number of micro-services or apps you should choose App Engine, if you have more than 5 micro-services, infrastructure dependency you should choose Datacol.

It is only reasonable to compare Datacol with App Engine flexible.

| Feature       |     DataCol     |  App Engine Flex |
| --------------|-----------------|----------------|
| Deployment units     | [Buildpacks](https://devcenter.heroku.com/articles/buildpacks), [Docker-compose](https://docs.docker.com/compose/), Dockerfile | Dockerfile 
| Infrastructure Service Automation  | Managed, [Helm](https://helm.sh) | Manual  |
| Pricing   |  Lower and can use [Sustained discount](https://cloud.google.com/compute/pricing#sustained_use) | Relatively more since managed by Google
| Security & Encryption   | Native  | manual
| [Regional constraints](https://cloud.google.com/appengine/docs/locations)  | All Regions | Not available in Europe
| Scheduler  | [Kubernetes](http://k8s.io) based on containers | Propitiatory scheduler by Google based on VM
| Real time sockets   | Yes | No 
| Source Code  | Open    | Closed
