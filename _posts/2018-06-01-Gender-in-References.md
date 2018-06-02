---
layout: post
title: Are you citing any women?
category: Research
---

The hashtag [#CiteWomen](https://twitter.com/hashtag/citewomen) made me wonder about the gender bias in my own academic work. 
Am I citing only men (and why)? The tool below makes it easy to evaluate how male (or female) your bibliography is - simply paste your references in the box.

Give it a try and let me know what you think at [@d_alburez](https://twitter.com/d_alburez)!

This is a [beta version](https://github.com/alburezg/gender_bibliography) - **please excuse the glitches**.

# Instructions for use

  - Copy and paste your bibliography in the text box and allow some time for the tool to retrieve the information (up to a couple of minutes for long bibliographies).
  - **Do not** include books, reports or theses. The tool currently only works with peer-reviewed and indexed papers.
  - If the tool doesn't load or if it cannot be reached (e.g. Error 504), please wait five minutes and reload the page. 
  - The tool will look up each citation in a database and output the most likely match. Most matches are correct, but some noise if to be expected for older or lesser-known articles.
  - The gender of the authors is determined using U.S. Social Security Administration baby name data ([gender](https://www.r-project.org/nosvn/pandoc/gender.html) package in R). Unrecognised names are ignored.

**This tool relies on the kindness of the [Crossref API](https://github.com/CrossRef/rest-api-doc). Don't abuse it!**

<iframe width = "100%" height = "1000px" seamless frameborder = "0" src="https://diego-alburez.shinyapps.io/gender_check/"></iframe>