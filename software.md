---
layout: page
title: Software
---

<div class="academic-page">
  <p class="lede">
    I contribute to the development and maintenance of open-source software for demographic and kinship analysis.
    These tools support reproducible research and teaching in formal and computational demography.
  </p>

  <section class="pkg">
    <a class="pkg-logo" href="https://mpidr.github.io/rsocsim/" tabindex="-1" aria-hidden="true">
      <img src="{{ site.baseurl }}/img/logos/rsocsim.png" alt="" width="318" height="360" loading="lazy">
    </a>
    <div class="pkg-body">
      <h2>rsocsim</h2>
      <p>
        <a href="https://mpidr.github.io/rsocsim/">rsocsim</a> is an R interface to SOCSIM, an open-source stochastic demographic microsimulation platform.
        It allows researchers to run SOCSIM simulations from within R to generate synthetic populations with plausible kinship structures
        from demographic rate schedules (e.g., fertility, mortality, marriage). The framework has been used to study kin availability,
        generational overlap, and kin loss under different demographic regimes.
      </p>
      <p class="pkg-links">
        Documentation: <a href="https://mpidr.github.io/rsocsim/">mpidr.github.io/rsocsim</a><br>
        Source code: <a href="https://github.com/MPIDR/rsocsim">github.com/MPIDR/rsocsim</a>
      </p>
    </div>
  </section>

  <section class="pkg">
    <a class="pkg-logo" href="https://ivanwilli.github.io/DemoKin/" tabindex="-1" aria-hidden="true">
      <img src="{{ site.baseurl }}/img/logos/demokin.png" alt="" width="311" height="360" loading="lazy">
    </a>
    <div class="pkg-body">
      <h2>DemoKin</h2>
      <p>
        <a href="https://ivanwilli.github.io/DemoKin/">DemoKin</a> is an R package for matrix-based demographic analysis of kinship networks.
        It estimates kin counts and age distributions for many relative types and supports one-sex and two-sex models,
        including time-varying and multistate specifications. The package is designed for population-level kinship modeling
        under explicit demographic assumptions.
      </p>
      <p class="pkg-links">
        Documentation: <a href="https://ivanwilli.github.io/DemoKin/">ivanwilli.github.io/DemoKin</a><br>
        Source code: <a href="https://github.com/IvanWilli/DemoKin">github.com/IvanWilli/DemoKin</a>
      </p>
    </div>
  </section>
</div>
