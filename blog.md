---
layout: blog
---

<ul class='list-unstyled'>
  {% for post in site.posts %}
    <li>
      <h3> <a href="{{ post.url }}"> {{ post.title }} </a> 
      <small> by <a href="https://twitter.com/{{ post.author }}" href="_blank"> {{ post.author }} </a> 
        on {{ post.date | date_to_string }} </small> <br>
      </h3>
      <p>  {{ post.excerpt }} </p>
    </li>
  {% endfor %}
</ul>