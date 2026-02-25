---
layout: page
title: Publications
subtitle: Peer-reviewed work, preprints, and ongoing projects
---

<div class="academic-page">
  <p class="lede">This page is generated from a structured publication dataset for easier maintenance and consistent formatting.</p>

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
