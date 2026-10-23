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
      <p class="pub-nav-alt"><a href="{{ '/publications/topics/' | relative_url }}">View publications by topic</a></p>
    </aside>
    <div class="pub-content">
      {% for section in site.data.publications.sections %}
        <section class="pub-section" id="{{ section.id }}">
          <h2>{{ section.title }}</h2>
          {% comment %} Newest first; "accepted" sorts after the years, so it comes first once reversed {% endcomment %}
          {% assign years = section.items | map: "year" | uniq | sort | reverse %}
          {% for year in years %}
            <h3 class="pub-year-heading">{{ year | capitalize }}</h3>
            <ul class="pub-list">
              {% assign year_items = section.items | where: "year", year | sort_natural: "authors" %}
              {% for item in year_items %}
                {% include publication_entry.html item=item %}
              {% endfor %}
            </ul>
          {% endfor %}
        </section>
      {% endfor %}
    </div>
  </div>
</div>
