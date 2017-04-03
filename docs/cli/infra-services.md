---
layout: docs
title: Datacol | Infrastructure Services
---

### Infrastructure Services

A Datacol stack includes a Kubernetes cluster, and best way to deploy infrastructure services or add-ons is to use [Helm](https://helm.sh). To install helm on datacol kubernetes run -

```
datacol helm init

Usage:
  helm init [flags]

Flags:
      --canary-image          use the canary tiller image
  -c, --client-only           if set does not install tiller
      --dry-run               do not install local or remote
  -i, --tiller-image string   override tiller image
      --upgrade               upgrade if tiller is already installed

Global Flags:
      --debug                     enable verbose output
      --host string               address of tiller. Overrides $HELM_HOST
      --tiller-namespace string   namespace of tiller (default "kube-system")
```

Afterwards you can install any Helm chart in Datacol Namespace on the cluster. For example, Let's install redis on datacol stack -

    datacol helm install stable/redis

