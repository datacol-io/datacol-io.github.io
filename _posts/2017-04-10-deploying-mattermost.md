---
layout: blog
title: Deploying Mattermost
author: '@dinesh_oi'
excerpt: We outline how a real world example like Mattermost - an open source alternative of Slack, can be deployed by Datacol with ease.
---

## Deploying Mattermost with Datacol


In this post we will deploy [Mattermost](https://about.mattermost.com) - an open source alternative of [Slack](https://slack.com) using our [CLI](/docs/getting-started) to demonstrate something more than "Hello World".

At its core, Mattermost is an open source, private cloud alternative to proprietary SaaS messaging for teams. It is a great solution for communities and companies who wants to privately host their own messaging service or for developers who are looking forward to build and evolve their own chat platforms.

In summary, we will
 * create a new [stack](/docs/cli/stacks)
 * create a [CloudSQL](/docs/cloudsql) (mysql) instance
 * [link](/docs/cloudsql) and [deploy](/docs/deployment) Mattermost on cluster


```
datacol init --project mattermost-at-gcp --stack mattermost

git clone git@github.com:datacol-io/samples.git && cd samples/mattermost
STACK=mattermost datacol apps create
datacol infra create mysql --name=mysql-1111
datacol infra link mysql-1111

datacol deploy
```

#### Create a stack

At first, go ahead and download our [CLI](/docs/getting-started) and create a new [stack](/docs/cli/stacks). 
  
    datacol init --project mattermost-at-gcp --stack mattermost

It will authenticate with your Google account and provision a {{ site.title }} infrastructure in your account. Enter into the app directory and create a new datacol app -

    git clone git@github.com:datacol-io/samples.git && cd samples/mattermost
    STACK=mattermost datacol apps create

Now you are all set to deploy any container based app into cluster by running `datacol deploy`.

#### Create a Database backend

Mattermost requires a database backend. We always recommend to use managed services by cloud than by yourself unless you have a good reason to do so. To provision a [CloudSQL](/docs/cloudsql) mysql instance, run 

    datacol infra create mysql --name=mysql-1111

It will provision a MySQL second generation instance along with a database and an user. To see information of a resource -

    > datacol infra info mysql-1111
    mysql-1111
      DATABASE_URL=mysql://mysql:272b340f780e46253cd725ab1bb0f1@127.0.0.1:3306/app 
      INSTANCE_NAME=gcs-local:us-east1:mysql-42535

A SQL resource can be linked to multiple apps and automatically provision [cloudsql-proxy](https://github.com/GoogleCloudPlatform/cloudsql-proxy) for secure access. To link `mysql-1111` with `mattermost` app, run

    datacol infra link mysql-1111

#### Configuration

To provide secrets, API keys or configuration, you can use `datacol env` to set into environment variables 

    datacol env set PORT=3000 RAILS_ENV=production

#### Deploy mattermost

To finally deploy the app into cluster run -
  
    datacol deploy

It will use `Dockerfile` to build a docker image and save into the [Google registry](https://cloud.google.com/container-registry/). After a successful build, it will deploy Mattermost into the cluster and wait for the `LoadBalancer` for an ip.

### Conclusion

We saw how we deployed Mattermost and provision a cloud service using our [CLI](/docs/cli). I hope this helps if you are looking to get up and running as quickly as possible without worrying about Kubernetes concepts (services, replicationcontrollers, deployemnts) but about apps, builds, and releases. 

