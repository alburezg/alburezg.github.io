---
layout: page
title: Publications by Topic
subtitle: Peer-reviewed work and preprints
permalink: /publications/topics/
topics:
  - id: kinship
    title: Kinship structures, family and ageing
  - id: bereavement
    title: Bereavement, kin loss and mortality
  - id: conflict
    title: Armed conflict, genocide and displacement
  - id: microsimulation
    title: Microsimulation and digital data
---

{% comment %} Every publication across all sections, so topics can mix articles, chapters, reports and preprints {% endcomment %}
{% assign all_items = "" | split: "" %}
{% for section in site.data.publications.sections %}
  {% assign all_items = all_items | concat: section.items %}
{% endfor %}

<div class="academic-page" id="top">
  <div class="pub-layout">
    <aside class="pub-nav" aria-label="Publication topics">
      <p class="pub-nav-title">Jump to Topic</p>
      <ul>
        {% for topic in page.topics %}
          <li><a href="#{{ topic.id }}">{{ topic.title }}</a></li>
        {% endfor %}
      </ul>
      <p class="pub-nav-alt"><a href="{{ '/publications/' | relative_url }}">View all publications by year</a></p>
    </aside>
    <div class="pub-content">
      {% for topic in page.topics %}
        <section class="pub-section" id="{{ topic.id }}">
          <h2>{{ topic.title }}</h2>
          {% assign topic_items = all_items | where: "topic", topic.id %}
          {% assign years = topic_items | map: "year" | uniq | sort | reverse %}
          <ul class="pub-list">
            {% for year in years %}
              {% assign year_items = topic_items | where: "year", year | sort_natural: "authors" %}
              {% for item in year_items %}
                {% include publication_entry.html item=item %}
              {% endfor %}
            {% endfor %}
          </ul>
          <p class="pub-back-top"><a href="#top">Back to top</a></p>
        </section>
      {% endfor %}
    </div>
  </div>
</div>
