---
layout: docs
title: Datacol | Secrets
---

### Secrets

Secrets in Datacol applications are configured using environment variables. Use `datacol env` to manage your environment variables -

    datacol env
    datacol env set API_KEY=secret CLIENT_ID=client
    datacol env unset API_KEY

Secrets are encrypted by a key created via [Google KMS](https://cloud.google.com/security/encryption-at-rest/) and stored on [Google storage](https://cloud.google.com/storage/) for security purpose. *

*: _This feature is not included in alpha release._