---
layout: docs
title: Datacol | Managing Apps
---

### Creating a new app

```
> datacol apps create -h

USAGE:
   datacol apps create [command options] [arguments...]

OPTIONS:
   --app value, -a value  app name inferred from current directory if not specified
```

Make sure you have `datacol` [CLI](/docs/getting-started) installed. Then go to project directory and run -
  
    datacol apps create

The name of the app is inferred from current directory if not provided. 

### Get app status

```
> datacol apps info -h

USAGE:
   datacol apps info [command options] [arguments...]

OPTIONS:
   --wait, -w  wait for GCP to allocate IP
```

### Deleting an app

```
> datacol apps delete -

USAGE:
   datacol apps delete [command options] [arguments...]

OPTIONS:
   --app value, -a value  app name inferred from current directory if not specified
```