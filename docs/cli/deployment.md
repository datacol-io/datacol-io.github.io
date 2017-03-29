---
layout: docs
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