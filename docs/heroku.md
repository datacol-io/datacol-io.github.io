---
layout: docs
---

## Datacol vs Heroku

[Heroku](https://heroku.com) is a cloud Platform-as-a-Service (PaaS) supporting several programming languages that is used as a web application deployment model. Heroku is a great way to quickly build, innovate, and deploy a new product or service. It can be an excellent choice in early stage since not having to worry about operational issues reduce the time to market significantly. Heroku is the easiest place to deploy, until your apps grow more complicated. 

{{site.title}} provider similar features and developer experience but don't limit flexibility and scalability provided by cloud. There comes a point, however, where many organizations outgrow their one-size-fits-all PaaS. Some common reasons include:
  
* **Cost Efficiency**

  Heroku’s platform runs on AWS, so you pay a margin on their costs for all the automation they have built for you. At the beginning, paying a 30% more for a $100 cloud bill isn't so significant. However, when you start to spend more with Heroku and reach the point where you pay $1k-3k a month, a reduction of 30% becomes much more significant.

  Datacol is built over [Google Cloud][3] and have wider variety of [instance types][4] and [pricing schemes][5] to choose from, which allows you to better utilize the compute resources you're paying for. Additionally you can lower cloud bill using [sustained discount][1], if you're fine with committing to Google for a longer term, you can reduce even more by buying [reserved instances][2].

* **Control & Security**

  With Heroku, you lose fine-grained control and visibility over your servers. Installing custom software in your server stack is far from straightforward, and it’s not possible to SSH into a server to debug a CPU or memory issue.

  Also, you don’t have options around how to structure your environment networking and security. Your application run in a multi-tenant environment. While with {{site.title}}, you'll have a much lower level control over your environment and the underlying cloud resources.

* **Platform Limitations**

  Heroku does not provide any regional redundancy and runs ons AWS in the US East region or Europe West region. You can run apps in multiple regions and reduce risk of outage with {{site.title}}. 

Though {{site.title}} provides a Heroku type control-layer over Google cloud, it does not limit your developer experience. You can anytime delete {{site.title}} infrastructure from your account and applications will still be running and portable, giving you similar flexibility and control of a cloud.


| Feature | Datacol | Heroku |
|---------|----------|------------|
| Price & Performance | Cheaper & much better performance-per-dollar  |  2x-3x    |
| Privacy | Private & Single Tenant | [Limited][6] & Multi-tenant
| Regional Constraints | [Supported Regions][8] | Limited Regions
| [Security Compliance](https://cloud.google.com/security/compliance) | Yes | No |
| Scheduler  | [Kubernetes](http://k8s.io) based on containers | [Heroku Dyno][7]

[1]: https://cloud.google.com/compute/pricing#sustained_use
[2]: https://cloud.google.com/compute/pricing#committed_use
[3]: https://cloud.google.com
[4]: https://cloud.google.com/compute/docs/machine-types
[5]: https://cloud.google.com/pricing/
[6]: https://devcenter.heroku.com/articles/dynos#isolation-and-security
[7]: https://devcenter.heroku.com/articles/dynos
[8]: https://cloud.google.com/about/locations/