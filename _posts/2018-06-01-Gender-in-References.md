---
layout: post
title: Do bibliographies have gender?
category: Research
---



I like to believe that I am a surname-type-of-person - when I cite a paper I never look at the author's name. Therefore, I cannot by biased by their 
gender. Right? 

To be honest, I never gave this much though until a couple of days ago I come acros the [#CiteWomen](https://twitter.com/hashtag/citewomen) hashtag 
on Twitter (there is also[#CiteBlackWomen](https://twitter.com/hashtag/citeblackwomen)). I began to wonder: whom *do* I cite in my own research?  
How are my bibliographies gendered? 

There are three reasons why, even without intending to, attempting to be gender-blind ends up reproducing a system where women are less likely to
be cited in academic works. 

In my discipline, women are now [(almost) as likely](https://demotrends.org/2016/11/17/gendered-pattern-of-publication-in-demography/) to publish a paper 
in the field's top-rated journal - Demography. However, the phenomenon is recent, meaning that most of the articles already out there were written by men. 
This is esepecially problematic since certain works tend to age gracefully, growing in popularity over time. Seminal works in demography, for example, were 
written by men. Therefore, every time I bring up the concept of the 'proximate determinants of fertility', for example, I feel compelled to reference 
John Bongaarts and Bongaarts continues to accummulate citations. Finally, [men cite themselves more than women do]
(https://www.nature.com/news/men-cite-themselves-more-than-women-do-1.20176) for unknown reasons. 

Should we pay more attention to the gender of the authors we cite in our work? Foundational papers (usually written by men) often need to be cited, 
but researchers have leeway to chose whom they reference otherwise. Given two papers of equivalent relevance and quality, should we actively cite 
the one written by a women? The choice is pretty much up to the individual researcher. To help make the decision, I created a simple tool that can 
be used to evaluate the gender bias in your own bibliography. 

Try it out - simply paste your references in the box below! 

Let me know what you think at [@d_alburez](https://twitter.com/d_alburez). 
*This is a [beta version](https://github.com/alburezg/gender_bibliography). You can help improve the tool! If something goes wrong, please send the error 
message and references you input to alburezg[at]lse.ac.uk.*

# Instructions for use

  - Copy and paste your bibliography in the text box, click the button, and allow some time for the tool to retrieve the information (up to a couple of minutes for long bibliographies).
  - **The tool only works with peer-reviewed papers in indexed journals**. Don't include books, reports, or theses.
  - Each reference must be in a separate line (i.e. separated by a line break) - you may have to reformat references pasted from pdf files.
  - If the tool doesn't load or can't be reached (e.g. Error 504), please refresh after five minutes. 
  - The tool will look up each citation and output the most likely match. Most matches are correct, but some noise if to be expected for older or lesser-known articles.
  - The gender of the authors is determined using U.S. Social Security Administration baby name data ([gender](https://www.r-project.org/nosvn/pandoc/gender.html) package in R). Unrecognised names are ignored.

**This tool relies on the kindness of the [Crossref API](https://github.com/CrossRef/rest-api-doc). Please, don't abuse it!**


<iframe width = "100%" height = "1000px" seamless frameborder = "0" src="https://diego-alburez.shinyapps.io/gender_check/"></iframe>