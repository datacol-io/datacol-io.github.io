---
layout: blog
---

<ul>
  {% for post in site.posts %}
    <li>
      <h4> <a href="{{ post.url }}"> {{ post.title }} </a> </h4>
      <p>  {{ post.excerpt }} </p>
    </li>
  {% endfor %}
</ul>