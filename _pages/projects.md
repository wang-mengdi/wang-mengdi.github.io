---
layout: page
title: Projects
description: Numerical software and research projects for physical simulation, GPU computing and multigrid solvers.
permalink: /projects/
nav: true
nav_order: 3
---

<link rel="stylesheet" href="{{ '/assets/css/software.css' | relative_url }}">

This collection brings together open-source simulation frameworks and research implementations, organised around **SimpleX**, **MESO** and **Cirrus**. It spans physical representations, GPU computation and adaptive multigrid solvers, with links to the associated papers and code.

<nav class="software-family-nav" aria-label="Software families">
{% for family in site.data.software_families %}
  <a href="#{{ family.id }}">{{ family.title }} <span>{{ family.label }}</span></a>
{% endfor %}
</nav>

<div class="software-collection">
{% for family in site.data.software_families %}
  <section class="software-family" id="{{ family.id }}" aria-labelledby="{{ family.id }}-title">
    <header class="software-family-header">
      <p class="software-eyebrow">{{ family.label }}</p>
      <h2 id="{{ family.id }}-title">{{ family.title }}</h2>
      <p class="software-family-intro">{{ family.description }}</p>
      <p>{{ family.features }}</p>
      {% if family.code %}
      <div class="software-actions">
        <a class="software-action" href="{{ family.url | relative_url }}">About {{ family.title }} →</a>
        <a href="{{ family.code }}">Source code ↗</a>
      </div>
      {% endif %}
    </header>
    <p class="software-family-children">{{ family.children_label }}</p>
    {% if family.note %}<p class="software-family-note">{{ family.note }}</p>{% endif %}
    {% assign research_anchor = family.id | append: '-research' %}
    {% include software-research.liquid software_id=family.id anchor=research_anchor %}
  </section>
{% endfor %}
</div>
