---
layout: default
---

<div class="blog-banner">
  <h1>The official blog from the team at Datacol</h1>
</div>
<div class="container">
  <div class="blogs-wraper">
    {% for post in site.posts %}
      <article class="blog-item">
        <h3> <a href="{{ post.url }}"> {{ post.title }} </a></h3>
        <small class="blog-author"> by <a href="https://twitter.com/{{ post.author }}" href="_blank"> {{ post.author }} </a>
          on {{ post.date | date_to_string }} </small>
        <p class="blog-desc">  {{ post.excerpt }} </p>
        <a class="r-link" href="{{ post.url }}">Keep reading</a>
      </article>
      <hr class="blog-hr">
    {% endfor %}
  </div>
</div>
