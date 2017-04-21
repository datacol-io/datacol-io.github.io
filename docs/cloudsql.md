---
layout: docs
title: Datacol | CloudSQL
---

### CloudSQL Integration

{{site.title}} provides tight integration with cloud services like [CloudSQL](https://cloud.google.com/sql/). It's easy to create CloudSQL resources and manage them as a part of stack.

_We only support MySQL (Second Generation) in alpha release._

#### How to create
  To create a MySQL second generation resource, run

    > datacol infra create mysql
    Creating mysql-31516 (mysql: activation_policy="ALWAYS" db_version="MYSQL_5_7" tier="db-g1-small" tier="db-n1-standard-1")

  It will provision a managed MySQL instance, a database(`app`) and an user with strong password.

Available options

| Name |  Description   |  Value | 
|-------|---------|
| `name` | Name of the resource | `/[a-z0-9]([-a-z0-9]*[a-z0-9])?/`
| `db_version` | database version to use | `MySQL_5_7`, `MySQL_5_6`
| `tier`  | database machine type to use | `db-{f1-micro,g1-small...db-n1-highmem-32}` more [at](https://cloud.google.com/sql/pricing#2nd-gen-instance-pricing)


#### Get information
  To get information and settings, run

    > datacol infra info mysql-31516
    mysql-42535
      DATABASE_URL=mysql://mysql:272b340f780e46253cd725ab1bb0f1@127.0.0.1:3306/app 
      INSTANCE_NAME=gcs-local:us-east1:mysql-42535

  `DATABASE_URL` can act like DSN connection string to connect from various language drivers and frameworks if deployed with cloudsql-proxy.

#### How to link
  To link a mysql/postgres resource to an app, run `datacol infra link` like -

    > datacol infra link mysql-31516

  `datacol infra link` will provision [cloudsql-proxy](https://github.com/GoogleCloudPlatform/cloudsql-proxy) as a sidecar container along with your application in a pod with correct service account credentials.

#### How to unlink

  To unlink a mysql/postgres resource from an app

    > datacol infra unlink mysql-31516

#### How to delete

  To delete a mysql/postgres resource from stack

    > datacol infra delete mysql-31516

