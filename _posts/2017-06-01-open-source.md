---
layout: blog
title: Datacol is Now Open Source
author: '@dinesh_oi'
excerpt: Today, I’m happy to announce that the Datacol core is now open source software under the Apache license, Version 2!.
---

## Datacol is Now Open Source

Datacol provides Heroku-like workflow for deploying apps in your cloud account (AWS/GCP).

Today, I'm happy to announce that the Datacol CLI is now open source software under the Apache2 license! The source code is hosted on [GitHub][1] for your viewing pleasure.

<p><a href="https://github.com/datacol-io/datacol" target="_blank" class="btn btn-primary"> Datacol on Github</a> </p>

Along side of that, we are also releasing new [alpha.5 version][2], which includes major features and bug fixes. If you haven't been following the `_alpha.*` releases, this latest update also brings a tremendous amount of stability, performance, and clean up to the party. All of this together means that Datacol is now the open source developer tool platform that we've been working towards. Go [install][5] it and if you're new give our [tutorial][3] a shot!

There's been a ton of work since the last release [alpha.4][4] (about 20 items in the full changelog), so here's just a few of the highlights:

#### CloudSQL Postgres Provisioning

You can now provision a CloudSQL Postgres instance directly from CLI and later can link with any app.

    > datacol infra create --cpu 1 --memory 3840
    Creating postgres-31516 (postgres: activation_policy="ALWAYS" db_version="POSTGRES_9_6" memory="3840" cpu="1")

#### Buildpack Support

This is pretty exciting to us. If we don't find any Dockerfile or app.yaml (App-engine config), CLI will try to detect the app type with Heroku buildpacks and deploy on cluster. You can specify multiple buildpacks inside `.buildpack` file and customize the resulting stack.

#### Streaming Logs

We added better streaming logs for any app. 

    datacol logs --follow

#### Secure GRPC API

Communication between CLI to GRPC api is more secure now as it uses an api-key for authentication.

#### Configuration improvement

`datacol login` will dump the config into `~/.datacol/config.json`. It's easier to share and inspect settings now.

### Going Forward

I hope it will take us closer to the community we've been working towards over the past months. Feel free to reach out and try our installer.

[1]: https://github.com/datacol-io/datacol
[2]: https://github.com/datacol-io/datacol/releases/tag/v1.0.0-alpha.5
[3]: /docs/getting-started
[4]: https://github.com/datacol-io/datacol/releases/tag/v1.0.0-alpha.4
[5]: https://www.datacol.io
