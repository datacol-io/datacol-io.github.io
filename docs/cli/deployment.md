---
layout: docs
title: Datacol | Deployment
---

### Deploying an app

To deploy an app into cluster, please run `datacol deploy` command. It will

- Upload source code into Google Storage
- Build Docker image from `Dockerfile` or `docker-compose.yml`
- Deploy service into Kubernetes cluster
- Optionally waits for LoadBalancer to allocate IP

```
datacol deploy -h
NAME:
    deploy - deploy an app in cluster

USAGE:
    deploy [command options] [arguments...]

OPTIONS:
   --image value, -i value  docker image to use
   --port value, -p value   service port (default: 8080)
   --build value, -b value  Build id to use
   --wait, -w               Wait for the app become available
```

In order to deploy an app, you should have `Dockerfile` at root of the project having -

* The Dockerfile must use the [EXPOSE](https://docs.docker.com/engine/reference/builder/#expose) directive to expose exactly one port.
* That port must be listening for an HTTP connection.
* The Dockerfile must use the [CMD](https://docs.docker.com/engine/reference/builder/#cmd) directive to define the default process that will run within the container.
* The Docker image must contain bash to run processes.

<div class="alert alert-info">
By default, we start containers to listen on 8080 port, If your app listens on different port, Please set PORT as an environment variable.
</div>

    datacol env set PORT=3000
