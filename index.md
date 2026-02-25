---
layout: page
title: Diego Alburez-Gutierrez
subtitle: Demography, kinship, and inequality
path: ""
---

<div class="academic-page home-page">
  <section class="home-intro">
    <p class="lede">
      I am a social scientist working on demographic processes, kinship dynamics, and inequality.
      I lead the <a href="https://www.demogr.mpg.de/en/research_6120/kinship_inequalities_10703">Kinship Inequalities Research Group</a>
      at the Max Planck Institute for Demographic Research (MPIDR).
    </p>
    <p>
      My research examines how changing demographic regimes shape bereavement, family support, and intergenerational outcomes
      across countries and historical contexts.
    </p>
  </section>

  <section class="quick-links" aria-label="Professional links">
    <a href="https://scholar.google.com/citations?user=uyx520sAAAAJ&hl=en">Google Scholar</a>
    <a href="https://orcid.org/0000-0002-9823-5179">ORCID</a>
    <a href="https://github.com/alburezg">GitHub</a>
    <a href="/pdf/CV_Diego_Alburez.pdf">CV (PDF)</a>
    <a href="mailto:alburezgutierrez@demogr.mpg.de">Email</a>
    <a href="https://x.com/d_alburez">X (formerly Twitter)</a>
  </section>

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
    <p><a href="/publications">View full publications list</a></p>
  </section>

  <section class="featured-video">
    <h2>Featured Talk</h2>
    <p>
      Keynote at the XI Congress of the Latin American Population Association (ALAP).
    </p>
    <div class="responsive-video">
      <iframe
        src="https://www.youtube.com/embed/EEeSfu99k5Q"
        title="Featured keynote"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    </div>
  </section>
</div>
