---
layout: docs
---

### Comparing Datacol and App Engine

Google [App Engine](https://cloud.google.com/appengine/) (often referred to as GAE or simply App Engine) is a cloud computing platform for developing and hosting web applications in Google-managed data centers. It is released on 2008, and had gone under tremendous improvements recently.

Historically App-engine was notorious for lock-in, weird bugs and various idiosyncrasies, but App Engine of 2017 is way different than App-engine of 2008. Currently it supports two mode -

- [Standard Environemnt](https://cloud.google.com/appengine/docs/standard/) which supports limited language runtimes/versions and includes various services like TaskQueue, Memcached etc.
- [Flexible environment](https://cloud.google.com/appengine/docs/flexible/) which lets you deploy apps from [`Dockerfile`](https://docs.docker.com/engine/reference/builder/) and supports more language runtimes, but excludes almost all of services provided in Standard environment.

Google also has [a comparison page](https://cloud.google.com/appengine/docs/the-appengine-environments) to decide when to choose between the two.

It's natural to ask why should anyone choose Datacol over App Engine, and honestly we are also asking ourselves same question while developing Datacol. According to our [philosophy](/docs/philosophy) we believe containers are the foundation of next generation PaaS than VMs. Some of our thoughts are also echoed by [cloud experts and community](http://blog.kubernetes.io/2017/02/caas-the-foundation-for-next-gen-paas.html).

It is only reasonable to compare Datacol with App Engine flexible since they offer similar flexibility and use cases. In short Datacol ports all of the goodness of App Engine into the container world.

| Feature       |     DataCol     |  App Engine Flexible environment |
| --------------|-----------------|----------------|
| Deployment units     | [Buildpacks](https://devcenter.heroku.com/articles/buildpacks), [Docker-compose](https://docs.docker.com/compose/), Dockerfile | Dockerfile 
| Infrastructure Service Automation  | Managed, [Helm](https://helm.sh) | Manual  |
| Pricing   |  Lower and can use [Sustained discount](https://cloud.google.com/compute/pricing#sustained_use) | Relatively more since managed by Google
| Security & Encryption   | Native  | manual
| [Regional constraints](https://cloud.google.com/appengine/docs/locations)  | All Regions | Not available in Europe
| Scheduler  | [Kubernetes](http://k8s.io) based on containers | Propitiatory scheduler by Google based on VM
| Real time sockets/Static IP   | Yes | No 
| [Security Compliance](https://cloud.google.com/security/compliance) | Yes | No |
| Source Code  | Open    | Closed
