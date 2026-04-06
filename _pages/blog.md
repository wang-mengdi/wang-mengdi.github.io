---
layout: page
title: Posts
permalink: /blog/
nav: true
nav_order: 4
---

<ul class="post-list">
{% for post in site.posts %}
  <li>
    {% if post.thumbnail %}
    <div class="row">
      <div class="col-sm-9">
    {% endif %}
        <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="post-meta">{{ post.date | date: '%B %d, %Y' }}</span>
    {% if post.thumbnail %}
      </div>
      <div class="col-sm-3">
        <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="image">
      </div>
    </div>
    {% endif %}
  </li>
{% endfor %}
</ul>
