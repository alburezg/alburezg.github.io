---
layout: page
title: Publications
subtitle: Peer-reviewed work and preprints
---

<div class="academic-page">
  {% for section in site.data.publications.sections %}
    <section class="pub-section" id="{{ section.id }}">
      <h2>{{ section.title }}</h2>
      <ol class="pub-list">
        {% for item in section.items %}
          {% include publication_entry.html item=item %}
        {% endfor %}
      </ol>
    </section>
  {% endfor %}
</div>
