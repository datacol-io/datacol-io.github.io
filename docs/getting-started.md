---
layout: docs
---

## __Getting Started__

Getting started with Datacol is easy. Take following steps to get started -

#### 1. Setup Google Cloud Project

Go to [Google Console][1] and create a new project if you don't have one. Afterwards you need to enable following API in API Manager's Library section -

* Google Cloud Resource Manager API
* Cloud Deployment Manager API
* Google Cloud Container Builder API

#### 2. Install CLI
In this step you will install Datacol Command Line Interface (CLI). You will use CLI to manage and scale your [applications][6], to provision [helm charts][5], to view [logs][7], and others. We currently provide CLI for Linux and Mac. 
   
**Install on Mac**
  
    $ curl -Ls https://storage.googleapis.com/datacol-distros/osx.zip > /tmp/osx.zip
    $ unzip /tmp/osx.zip -d /usr/local/bin
    
**Install on Linux**
  
    $ curl -Ls https://storage.googleapis.com/datacol-distros/linux.zip > /tmp/linux.zip
    $ unzip /tmp/linux.zip -d /usr/local/bin

We recommend to move datacol executable in your bin path. Make sure it's installed correctly by running -

    $ datacol -v
    datacol version 0.0.1-alpha

#### 3. Stack creation

To create a new stack, you must get [Google cloud][1] project name or identifier and initialize a new stack using -
 
    datacol init --project <project> --stack demo

It will create a [Datacol Stack](/docs/cli/stacks#creating-a-stack) in your GCP account with required resources. It will take couple of minutes to complete. Hit `Ctrl-C` if you want to cancel the process. 

#### 4. Deploy a sample app
In this step we'll show you how to launch your first app and interact with it. Any application having [`Dockerfile`][2] at root level should be eligible for deployment. If you don't have one, Please follow guidelines for creating [Dockerfile][2] on [Docker website][3]. 

Let's start with a sample to get started -

    $ git clone git@github.com:datacol-io/node-demo.git
    $ cd node-demo && ls
    Dockerfile  index.js  package.json

To create a new app under demo stack - 

    $ STACK=demo datacol apps create
    $ datacol deploy

When you first create an app, it might take 3-5 minutes for [LoadBalancer][4] to allocate an IP. Use `--wait` flag if you wait for an IP.

Afterwards just check if the service is running at the IP -

    $ curl http://IP:8080
    hello world!

[1]: https://console.cloud.google.com/
[2]: https://docs.docker.com/engine/reference/builder/ 
[3]: https://docs.docker.com/
[4]: https://cloud.google.com/load-balancing/
[5]: https://helm.sh/
[6]: /docs/cli/apps
[7]: /docs/cli/logging