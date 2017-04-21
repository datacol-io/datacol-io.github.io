---
layout: docs
title: Datacol | Our Philosophy
---

## Philosophy

[Docker](https://www.docker.com) has taken the world by storm, and has tremendous popularity among DevOps and developers. It has made containerization more accessible than ever before, which is changing the way we develop applications.

[PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service) (Platform as a Service) exists as a way to allow app developers to deploy and manage applications without having to deal with the complexities of creating, configuring, and managing servers. In other words, developers can focus on writing their applications and then quickly and easily deploy them to production, without having to wait for someone else provisions and configures their infrastructure.

Containers are changing the way that developers build, ship and run applications. Application development has seen a huge shift towards microservice architecture and containerization, specifically with Docker.

At Datacol we think, it's time for `micro-PaaS` - a next generation PaaS, which is not based on VM instances or dynos, but on containers. In `micro-PaaS` each application gets an each and creates a unique ecosystem of microservices that are all deployed into any environment.

Containers themselves are like little isolated mini-servers running inside on a host machine. They can efficiently share and own resources from the host, and wrap all their processes in their own filesystem. They are very lightweight and are easy to create, scale, and destroy.

#### Benefits

PaaS based on containers is 

- Easy to scale.
- Have better resource utilization and scaling potential.
- Inexpensive as number of microservices increase.

In "traditional" PaaS platform all of micro-services are in a global space, one giant monolithic shared platform, but in {{site.title}} your servers and infrastructure are isolated and run in a single tenant environment dedicated to your workload and you have full control over infrastructure. At anytime, you can uninstall {{site.title}} and your apps will still be running.

We at {{site.title}}, believe containers are the foundation of [next generation PaaS](http://blog.kubernetes.io/2017/02/caas-the-foundation-for-next-gen-paas.html) and have chosen Kubernetes as a primary building block, since it's the best container scheduler around nowadays, and best suited for running containers [at large scale](http://blog.kubernetes.io/2017/03/kubernetes-1.6-multi-user-multi-workloads-at-scale.html). We developed a nice control layer of abstraction on top of [Kubernetes](https://kubernetes.io/) enabling app-centric, [Heroku](https://heroku.com) like workflow to become more productive and agile.

Thanks for reading, Please let us what you think.

Next Steps -
  
  * [Datacol vs App Engine](/docs/app-engine)
  * [Datacol vs Heroku](/docs/heroku)
  * [Getting Started](/docs/getting-started) with {{site.title}}

