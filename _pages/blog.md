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
    <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="post-meta">{{ post.date | date: '%B %d, %Y' }}</span>
  </li>
{% endfor %}
</ul>
