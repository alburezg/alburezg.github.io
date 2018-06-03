---
layout: post
title: Do bibliographies have gender?
category: Research
---

The hashtag [#CiteWomen](https://twitter.com/hashtag/citewomen) made me think about bibliographic gender bias in my own research. 
Do I mainly cite papers written by men? Is my bibliography male and, if so, why? I did some research to explore this and found that 
48.9% of the authors we cited in my last [publication](http://onlinelibrary.wiley.com/doi/10.1111/irj.12171/full) were women - 
the paper coincidently argues that women tend to be more thorough when reporting their methodologies. However, I don't think we 
had this in mind when we wrote the paper. Should we pay more attention to the gender of the authors we cite in our work? Seminal papers (usually written by men) often need to be cited, 
but researchers have leeway to chose whom they cite otherwise. Given two papers of equivalent relevance and quality, should we actively cite 
the one written by a women? The choice is pretty much up to the individual researcher. To help make the decision, I created the gender checker 
tool which makes it easy to evaluate the gender bias in your own bibliography. 

Try it out - simply paste your references in the box below! Let me know what you think at [@d_alburez](https://twitter.com/d_alburez). *This is a [beta version](https://github.com/alburezg/gender_bibliography) - please excuse the glitches.*

# Instructions for use

  - Copy and paste your bibliography in the text box, click the button, and allow some time for the tool to retrieve the information (up to a couple of minutes for long bibliographies).
  - **The tool only works with peer-reviewed and indexed papers**. Don't include books, reports, or theses.
  - Each reference must be in a separate line (i.e. separated by a line break) - you may have to reformat referencecs pasted from pdfs.
  - If the tool doesn't load or can't be reached (e.g. Error 504), please refresh after five minutes. 
  - The tool will look up each citation in a database and output the most likely match. Most matches are correct, but some noise if to be expected for older or lesser-known articles.
  - The gender of the authors is determined using U.S. Social Security Administration baby name data ([gender](https://www.r-project.org/nosvn/pandoc/gender.html) package in R). Unrecognised names are ignored.

**This tool relies on the kindness of the [Crossref API](https://github.com/CrossRef/rest-api-doc). Please, don't abuse it!**

<iframe width = "100%" height = "1000px" seamless frameborder = "0" src="https://diego-alburez.shinyapps.io/gender_check/"></iframe>