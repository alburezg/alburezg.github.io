---
layout: page
title: Projects
permalink: /projects/
---

<div class="academic-page">
  <div class="project-grid">
    {% for project in site.data.projects %}
      <a class="project-card" href="{{ '/projects/' | append: project.id | append: '/' | relative_url }}">
        <h2>{{ project.title }}</h2>
        {% if project.dissertation_student %}
          <p class="project-card-dissertation">Doctoral dissertation by {{ project.dissertation_student }}</p>
        {% endif %}
        <p>{{ project.short | xml_escape }}</p>
        <p class="project-card-tags">{% for kw in project.research_keywords %}<span class="project-tag">{{ kw }}</span>{% endfor %}{% for kw in project.region_keywords %}<span class="project-tag project-tag-region">{{ kw }}</span>{% endfor %}</p>
      </a>
    {% endfor %}
  </div>
</div>
