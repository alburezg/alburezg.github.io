---
layout: post
title: Is my bibliography gendered?
category: Research
---

I like to think that I am a surname-type-of-person - when I cite a paper I never look at the author's name. As a result, my bibliography is gender-blind. Right? 
Alhough, to be honest I never gave this much though. It was until a couple of days ago I come acros the [#CiteWomen](https://twitter.com/hashtag/citewomen) hashtag 
on Twitter (there is also a [#CiteBlackWomen](https://twitter.com/hashtag/citeblackwomen) hashtag) that I began to wonder: whom *do* I cite in my own research? 
Are my bibliographies gendered?

In my discipline, women are now [almost as likely](https://demotrends.org/2016/11/17/gendered-pattern-of-publication-in-demography/) 
to publish in the field's top-rated journal - Demography. However this is a recent phenomenon and most of the papers already out there, in the *academosphere*, 
were written by men. Therefore, there are more male-authored papers to cite. This is also problematic since certain works become more popular over time. 
Seminal papers in demography were mostly written by men and every time I bring up, for example, the concept of the 'proximate determinants of fertility' I feel 
the need to cite John Bongaarts. This way, John continues to accummulate citations. Finally, there is the inexplicable fact that 
[men cite themselves more than women do](https://www.nature.com/news/men-cite-themselves-more-than-women-do-1.20176). 

Should we pay more attention to the gender of the authors we cite in our own work? Foundational papers (usually written by men) often need to be cited, 
but researchers have leeway to chose whom they reference otherwise. Given two papers of equivalent relevance and quality, should we actively cite 
the one written by a women? The choice is up to the individual researcher. As an initial first step, I created a tool to evaluate the gender bias in your 
own bibliography.

# It's easy to use - try it out!

  1. Paste your bibliography in the box below and click the button! Be patient - it may take a while depending on the number of references
  2. **The tool only works with peer-reviewed papers in indexed journals**. Don't include books, reports, or theses (sorry, non-paper-based disciplines!)
  3. Each reference must be in a separate line - you may have to reformat references copied from pdfs
  4. Let me know what you think at [@d_alburez](https://twitter.com/d_alburez)  
  5. I rely on the kindness of the [Crossref API](https://github.com/CrossRef/rest-api-doc). **Please, do not over-use the tool!**

<iframe width = "100%" height = "500px" seamless frameborder = "0" src="https://diego-alburez.shinyapps.io/gender_check/"></iframe>

*This is a [beta version](https://github.com/alburezg/gender_bibliography). You can help improve it! Send me your error and input if something goes wrong: 
alburezg[at]lse.ac.uk.*

# Technical notes and limitations

  - The tool will look up each citation and output the most likely match. Most matches are correct, but some noise if to be expected for older or lesser-known articles.
  - The (binary) gender of the authors is determined using U.S. Social Security Administration baby name data ([gender](https://www.r-project.org/nosvn/pandoc/gender.html) package in R). Unrecognised names are ignored.
  - The most common gender will be assigned to gender-neutral names.
