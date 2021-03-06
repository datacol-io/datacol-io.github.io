---
layout: docs
title: Datacol | Stack
---

### Creating a Stack

A Stack is a private PaaS installed into your Google Cloud account. Once you have a Stack running you can use it to deploy and manage your applications and backing resources. You can create a stack from our [CLI](/docs/getting-started).

```
| => datacol init -h
NAME:
   datacol init - create new stack

USAGE:
   datacol init [command options] [arguments...]

OPTIONS:
   --stack value         Name of stack (default: "demo")
   --zone value          GCP zone for stack (default: "us-east1-b")
   --bucket value        GCP storage bucket
   --nodes value         number of nodes in container cluster (default: 2)
   --cluster value       name for existing Kubernetes cluster in GCP
   --machine-type value  name of machine-type to use for cluster (default: "n1-standard-1")
   --preemptible         use preemptible vm (default: true)
   --opt-out datacol     Opt-out from getting updates via email from datacol (default: false)
   --password value      api password for the stack
   --help, -h            show help (default: false)
```

A standard Stack will include following resources -

* A [Deployment](https://cloud.google.com/deployment-manager/docs/) by name _demo_ (name of stack as given above)
* A Service account for the stack by name `dcolctl@<project>.iam.gserviceaccount.com` having appropriate IAM role.
* A Kubernetes cluster tuned for {{site.title}}
* A storage bucket for storing [environment variables](/docs/cli/secrets) and build logs
* A compute instance of type `f1-mico`

### Deleting a Stack

If you want to delete a Stack, you can simply run `datacol destroy` command. It will safely teardown Kubernetes cluster and all of the apps deployed by Datacol. 

    STACK=demo datacol destroy

Currently we don't support automatic deletion for following resources from [console](https://console.cloud.google.com/) -

- **Service Account**: Go to your Google Cloud console and remove service account by name `dcolctl@<project>.iam.gserviceaccount.com`.
- **Docker images** created by datacol cli. You can purge `artifacts.<project>.appspot.com` storage bucket.

