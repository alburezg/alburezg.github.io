---
layout: page
title: Publications
subtitle: Peer-reviewed work and preprints
---

<div class="academic-page">
  <div class="pub-layout">
    <aside class="pub-nav" aria-label="Publications sections">
      <p class="pub-nav-title">Jump to Section</p>
      <ul>
        {% for section in site.data.publications.sections %}
          <li><a href="#{{ section.id }}">{{ section.title }}</a></li>
        {% endfor %}
      </ul>
    </aside>
    <div class="pub-content">
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
  </div>
</div>
