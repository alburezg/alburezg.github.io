---
layout: page
title: Projects
subtitle: Research projects of the Kinship Inequalities Research Group
permalink: /projects/
---

<div class="academic-page">
  <div class="project-grid">
    {% for project in site.data.projects %}
      <a class="project-card" href="{{ '/projects/' | append: project.id | append: '/' | relative_url }}">
        <h2>{{ project.title }}</h2>
        <p>{{ project.short | xml_escape }}</p>
        <p class="project-card-tags">{% for kw in project.research_keywords %}<span class="project-tag">{{ kw }}</span>{% endfor %}</p>
      </a>
    {% endfor %}
  </div>
</div>
