---
layout: docs
title: Datacol | Getting Started
---

## __Getting Started__

Getting started with Datacol is easy. Take following steps to get started -

#### 1. Get a GCP account

If you don't have a Google cloud account, please go ahead and [create](https://cloud.google.com/) one. GCP provides you $300 free credits for 12-months which should be more than enough for a test drive.

#### 2. Install CLI
In this step you will install Datacol Command Line Interface (CLI). You will use CLI to manage and scale your [applications][6], to provision [cloudsql][5] databases, to view [logs][7], and others. We currently provide CLI for Linux, Mac and Windows. 
   
**Install on Mac**
  
    $ curl -Ls https://storage.googleapis.com/datacol-distros/osx.zip > /tmp/osx.zip
    $ unzip /tmp/osx.zip -d /usr/local/bin
    
**Install on Linux**

    $ curl -Ls https://storage.googleapis.com/datacol-distros/linux.zip > /tmp/linux.zip
    $ unzip /tmp/linux.zip -d /usr/local/bin

We recommend to move datacol executable in your bin path. Make sure it's installed correctly by running -

    $ datacol -v
    datacol version 1.0.0-alpha.5

#### 3. Stack creation

Create a base stack to get up and running. You can later share stack details with your team members to collaborate.
 
    datacol init --stack demo

It will install a [Datacol Stack](/docs/cli/stacks#creating-a-stack) by name `demo` in your GCP account with required resources. It will take couple of minutes to complete. Hit `Ctrl-C` if you want to cancel the process. 

#### 4. Deploy a sample app
In this step we'll show you how to launch your first app and interact with it. Any application having [`Dockerfile`][2] at root level should be eligible for deployment. If you don't have one, Please follow guidelines for creating [Dockerfile][2] on [Docker website][3]. 

Let's start with a sample to get started -

    $ git clone https://github.com/datacol-io/samples.git
    $ cd samples/node-demo && ls
    Dockerfile  index.js  package.json

To create a new app under demo stack - 

    $ STACK=demo datacol apps create
    $ datacol deploy

When you first create an app, it might take 3-5 minutes for [LoadBalancer][4] to allocate an IP. Use `--wait` flag if you wait for an IP.

Afterwards just check if the service is running at the IP -

    $ curl http://<IP>:8080
    hello world!

[1]: https://console.cloud.google.com/
[2]: https://docs.docker.com/engine/reference/builder/ 
[3]: https://docs.docker.com/
[4]: https://cloud.google.com/load-balancing/
[5]: /docs/cloudsql
[6]: /docs/cli/apps
[7]: /docs/cli/logging