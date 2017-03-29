---
layout: docs
---

### Creating a new app

```
datacol apps create -h
NAME:
   datacol apps create -

USAGE:
   datacol apps create [command options] [arguments...]

OPTIONS:
   --name value  name for an app
```

Make sure you have `datacol` [CLI](/docs/getting-started) installed. Then go to project directory and run -
  
    datacol apps create


### Get app status

```
datacol apps info -h
NAME:
   datacol apps info -

USAGE:
   datacol apps info [command options] [arguments...]

OPTIONS:
   --wait, -w  wait for GCP to allocate IP
```

### Deleting an app

    datacol apps delete
