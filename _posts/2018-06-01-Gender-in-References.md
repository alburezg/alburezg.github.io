---
layout: post
title: Check the gender bias in your bibliography
category: Research
---

This is a **Beta version** ((source)[https://github.com/alburezg/gender_bibliography]).

# Instructions for use

  - Copy and paste your bibliography in the text box to see how gender-bias or gender-balanced it is!
  - Do not include books, reports or theses. The tool currently only works with peer-reviewed and indexed papers.
  - The tool will look up each citation in a database and output the most likely match. Most matches are correct, but some noise if to be expected for older or lesser-known articles.
  - The gender of the authors is determined using U.S. Social Security Administration baby name data ([gender](https://www.r-project.org/nosvn/pandoc/gender.html) package in R). Unrecognised names are ignored.
  - Allow some time for the tool to retrieve the information from the API (up to a couple of minutes for long bibliographies).
  - If the tool doesn't load or if it cannot be reached (e.g. Error 504), please wait five minutes to reload the page. 

**This tool relies on the kindness of the [Crossref API](https://github.com/CrossRef/rest-api-doc). Don't abuse it!**

Comments: [@d_alburez](https://twitter.com/d_alburez)

<iframe width = "100%" height = "1000px" seamless frameborder = "0" src="https://diego-alburez.shinyapps.io/gender_check/"></iframe>
