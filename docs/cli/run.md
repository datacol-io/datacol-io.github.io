---
layout: docs
title: Datacol | One-off Commands
---

### Running One-off commands

To run one-time command (like running database migrations or backups) on an app, use
    
```
=> datacol run -h
NAME:
    run -

USAGE:
    run [arguments...]
```

Example

    datacol run rake db:migrate
