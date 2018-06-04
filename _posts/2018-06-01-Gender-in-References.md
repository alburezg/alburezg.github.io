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

There are three reasons why, even without intending to, being gender-blind ends up reproducing a system where women are less likely to
be cited in academic works. In my discipline, women are now [almost as likely](https://demotrends.org/2016/11/17/gendered-pattern-of-publication-in-demography/) 
to publish in the field's top-rated journal - Demography. However most of the papers already out there were written by men since this is a recent phenomenon. 
This is esepecially problematic since certain works become more 'citable' over time. Seminal demographic works, for example, were mostly written by men. 
Every time I bring up the concept of the 'proximate determinants of fertility', for example, I cite John Bongaarts - the creator of the term - which means that
John continues to accummulate citations. Finally,  for reasons I do not understand, 
[men cite themselves more than women do](https://www.nature.com/news/men-cite-themselves-more-than-women-do-1.20176). 

Should we pay more attention to the gender of the authors we cite in our own work? Foundational papers (usually written by men) often need to be cited, 
but researchers have leeway to chose whom they reference otherwise. Given two papers of equivalent relevance and quality, should we actively cite 
the one written by a women? The choice is pretty much up to the individual researcher. As a first step, I created a simple tool that can be used to evaluate 
the gender bias in your own bibliography.

# It's simple to use - try it out!

  1. Paste your bibliography in the box below and click the button! Be patient - the tool will take a couple of seconds to retrieve the information depending on the size of your bibligoraphy
  2. Each reference must be in a separate line - you may have to reformat references pasted from pdf files
  3. **The tool only works with peer-reviewed papers in indexed journals**. Don't include books, reports, or theses (sorry, non-paper-based disciplines!)
  4. Let me know what you think at [@d_alburez](https://twitter.com/d_alburez)  

**I rely on the kindness of the [Crossref API](https://github.com/CrossRef/rest-api-doc). Please, do not over-use the tool!**

<iframe width = "100%" height = "1000px" seamless frameborder = "0" src="https://diego-alburez.shinyapps.io/gender_check/"></iframe>

*This is a [beta version](https://github.com/alburezg/gender_bibliography). You can help improve the tool! If something goes wrong, please send the error 
message and references you input to alburezg[at]lse.ac.uk.*

# Technical notes

  - The tool will look up each citation and output the most likely match. Most matches are correct, but some noise if to be expected for older or lesser-known articles.
  - The gender of the authors is determined using U.S. Social Security Administration baby name data ([gender](https://www.r-project.org/nosvn/pandoc/gender.html) package in R). Unrecognised names are ignored.
