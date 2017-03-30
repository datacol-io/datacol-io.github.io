---
layout: docs
---

## Philosophy

[Docker](https://www.docker.com) has taken the world by storm, and has tremendous popularity among DevOps and developers. It has made containerization more accessible than ever before, which is changing the way we develop applications.

PaaS(Platform as a Service) exists as a way to allow app developers to deploy and manage applications without having to deal with the complexities of creating, configuring, and managing servers. In other words, developers can focus on writing their applications and then quickly and easily deploy them to production, without having to wait hours (or even days) while someone else provisions and configures their infrastructure.

Application development has seen a huge shift towards microservice architecture and containerization, specifically with Docker.

At Datacol we think, it's time for `μPaaS` - a next generation PaaS, which is not based on VM instances or dynos, but on containers. In `μPaaS` each piece of an application is its own container. This creates a unique ecosystem of microservices that are all deployed along with your app into any environment.
Containers themselves are like little isolated mini-servers running inside of a host machine. They have their own resources drawn from the host, and wrap all their processes in their own filesystem. They are very lightweight and are easy to create, scale, and destroy.

PaaS based on containers is 

- Easy to scale.
- Have better resource utilization and scaling potential.
- Inexpensive as number of microservices increase.

In "traditional" PaaS platform all of micro-services are in a global space, one giant monolithic shared platform, but in `μPaaS` your servers and infrastructure are dedicated to your workload and you have full control over infrastructure.

Though good in theory, `μPaaS` suffers from the same trouble as traditional PaaS, instead of configuring servers, developers have to configure and manage containers within servers. Just like PaaS abstracts away infrastructure configuration and management, `μPaaS` will need something to abstract away all the container configuration, orchestration, and management. That's where new technologies like [Kubernetes](https://kubernetes.io/), and [Docker Swarm](https://docs.docker.com/engine/swarm/) are born. 

We at {{site.title}}, believe containers are the foundation of [next generation PaaS](http://blog.kubernetes.io/2017/02/caas-the-foundation-for-next-gen-paas.html) and have chosen Kubernetes as a primary building block, since it's the best container manager around nowadays, and best suited for running containers [at large scale](http://blog.kubernetes.io/2017/03/kubernetes-1.6-multi-user-multi-workloads-at-scale.html). We developed a nice control layer of abstraction on top of [Kubernetes](https://kubernetes.io/) enabling app-centric, [Heroku](https://heroku.com) like workflow to become more productive and agile.

Thanks for reading, Please let us what you think.

Next Steps
  
  * [Datacol vs App Engine](/docs/app-engine)
  * [Datacol vs Heroku](/docs/todo)
