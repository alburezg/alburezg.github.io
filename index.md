---
layout: page
title: Diego Alburez-Gutierrez
subtitle: Demography, kinship, and inequality
path: ""
---

<div class="academic-page home-page">
  <div class="home-matrix">
    <section class="home-intro">
      <p class="lede">
        I am a social scientist working on demographic processes, kinship dynamics, inequality, and demographic estimation in contexts of crises and armed conflicts.
      </p>
      <p>
        I lead the <a href="https://www.demogr.mpg.de/en/research_6120/kinship_inequalities_10703">Kinship Inequalities Research Group</a>
        at the Max Planck Institute for Demographic Research (MPIDR), and serve as Chair of the International Union for the Scientific Study of Population (IUSSP) panel on
        <a href="https://iussp.org/en/kinship-structures-dynamics-and-inequalities">Kinship Structures, Dynamics, and Inequalities</a>.
      </p>
      <p>
        My research examines how changing demographic regimes shape bereavement, family support, and intergenerational outcomes across countries and historical contexts.
      </p>
    </section>

    <aside class="home-panel">
      <h2>Research Focus</h2>
      <ul>
        <li>Population-level kinship dynamics</li>
        <li>Conflict mortality and demographic estimation</li>
        <li>Intergenerational inequality and family support</li>
        <li>Formal and computational demography</li>
      </ul>
      <p><a href="/software">Methods and Software</a></p>
    </aside>
  </div>

  <section class="featured-research">
    <h2>Selected Publications</h2>
    <ol class="pub-list compact">
      {% for section in site.data.publications.sections %}
        {% for item in section.items %}
          {% if item.featured %}
            {% include publication_entry.html item=item %}
          {% endif %}
        {% endfor %}
      {% endfor %}
    </ol>
    <p><a href="/publications">View full publications list</a> | <a href="/contact">Contact</a></p>
  </section>
</div>
