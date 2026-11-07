---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 3
---

<link rel="stylesheet" href="{{ '/assets/css/software.css' | relative_url }}">

<div class="software-collection">
{% for family in site.data.software_families %}
  <section class="software-family" id="{{ family.id }}" aria-labelledby="{{ family.id }}-title">
    <header class="software-family-header">
      <h2 id="{{ family.id }}-title">
        {% if family.code %}<a href="{{ family.url | relative_url }}">{{ family.title }}</a>{% else %}{{ family.title }}{% endif %}
      </h2>
      <p class="software-family-intro">{{ family.description }}</p>
      <p>{{ family.features }}{% if family.code %} <a class="software-source" href="{{ family.code }}">Source code</a>{% endif %}</p>
    </header>
    {% assign research_anchor = family.id | append: '-research' %}
    {% include software-research.liquid software_id=family.id anchor=research_anchor compact=true %}
  </section>
{% endfor %}
</div>
