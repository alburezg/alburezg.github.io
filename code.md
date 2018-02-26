---
layout: page
title: Adventures in R
---

# Qualitative coding in RStudio Shiny

This template the outlines the principles for designing a [Shiny app](https://shiny.rstudio.com/) where the user is able to highlight text and code it manually into a category or code.
The aim is to create an open-source, flexible alternative to commercial software like [NVivo](https://en.wikipedia.org/wiki/NVivo) or [Atlas.ti](https://en.wikipedia.org/wiki/Atlas.ti) for qualitative data analysis.
A feature of the app below is the integration of JavaScript and R (Shiny) code to allow the user to select text and then press <kbd>1</kbd> to automatically "trigger" the coding button. Try it out in RStudio!

{% gist 88ee2d67554b7e0bffd6e1332a52ab92 %}

# Tabulate questionnaires

The following code shows how a [Shiny app](https://shiny.rstudio.com/) can be used to input (i.e. tabulate) paper questionnaire data (surveys, etc.) 
and save them as csv files. The code below is minimalistic, but more advanced features can be implemented to create internal consistency checks and other features
offered by software like [CSPro](https://en.wikipedia.org/wiki/CSPro). 

{% gist b130a464d1edffd80a9ac86226318456 %}