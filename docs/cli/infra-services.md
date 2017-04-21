---
layout: docs
title: Datacol | Infrastructure Services
---

### Infrastructure Services

A [stack](/docs/cli/stacks) includes a Kubernetes cluster, and the best way to deploy infrastructure services or add-ons is to use [Helm](https://helm.sh) package manager. 

To install helm on a stack run -

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

Afterwards you can install any [Helm chart](https://github.com/kubernetes/charts) in namespace (`<stack-name>`) on the cluster. For example, Let's install redis on datacol stack -

    datacol helm install stable/redis

### Interacting with Kubernetes

  Though we provide a control-layer on top of Kubernetes, you can directly connect to cluster using `datacol kubectl` and go wild :), like -

      datacol kubectl get pods,svc,deployments
      datacol kubectl cluster-info
      datacol kubectl apply -f redis-deployment.yaml

