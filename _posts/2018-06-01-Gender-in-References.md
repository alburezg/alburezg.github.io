---
layout: post
title: Is my bibliography gendered?
category: Research
---

> "Consider what you might want to change about your academic citation practices. Who do you choose to link and re-circulate in your work? Who gets erased? 
Who should you stop citing?" [The Citation Practices Challenge](http://www.criticalethnicstudiesjournal.org/citation-practices/).

I like to think that my bibliography is gender-blind because when I come across a new paper I focus on the author's surname. I don't really pay 
too much attention to forenames. Alhough, to be completely honest, I never gave the topic much though until I come acros the 
[#CiteWomen](https://twitter.com/hashtag/citewomen) hashtag on Twitter 
(there is also a [#CiteBlackWomen](https://twitter.com/hashtag/citeblackwomen) hashtag). Then I began to wonder: whom *do* I cite in my own research? 
Is my bibliography gendered?

Women are now [almost as likely as men](https://demotrends.org/2016/11/17/gendered-pattern-of-publication-in-demography/) to publish in my field's top-rated 
journal - Demography. However this is a recent phenomenon and most of the papers already out there were written by men, which means there are more 
male-authored papers in the 'citing pool'. This is especially problematic since certain works become more popular over time. Seminal papers in demography 
were mostly written by men and every time I write about, for example, the concept of the 'proximate determinants of fertility' I feel the need to cite 
it's creator - John Bongaarts. This way, John continues to accummulate citations. This is not to mention the fact that 
[men cite themselves more than women do](https://www.nature.com/news/men-cite-themselves-more-than-women-do-1.20176). 

Should we pay more attention to the gender of the authors we cite in our own work? Foundational papers (in my discipline, usually written by men) 
need to be cited, but researchers have leeway to chose whom they reference otherwise. Given two papers of equivalent relevance and quality, should we 
actively cite the one written by a women? To help make this decision, I created a tool to determine the proportion of female-authored papers in a given 
bibliography. How does yours fare?

## It's easy to use - try it out!

  1. Paste your bibliography in the box below and click the button! Be patient - it can take a while depending on the number of references
  2. **The tool only works with peer-reviewed papers in indexed journals**. Don't include books, reports, or theses (sorry, non-paper-based disciplines!)
  3. Include each reference in a separate line - you may have to reformat references from pdfs
  4. Let me know what you think at [@d_alburez](https://twitter.com/d_alburez)  

[comment]: <> <iframe width = "100%" height = "550px" seamless frameborder = "0" src="http://ec2-18-218-227-138.us-east-2.compute.amazonaws.com:3838/myapp/"></iframe>
<iframe width = "100%" height = "550px" seamless frameborder = "0" src="https://diego-alburez.shinyapps.io/gender/"></iframe>

*This is a [beta version](https://github.com/alburezg/gender_bibliography). You can help improve it! If the tool doesn't work, send me the error message and
your input references: alburezg[at]lse.ac.uk.*

## Technical notes and limitations

  - The tool outputs the most likely match for each reference. Most matches are correct, but some noise if to be expected for older or lesser-known articles.
  - The (binary) gender of the authors is determined using U.S. Social Security Administration baby name data ([gender](https://www.r-project.org/nosvn/pandoc/gender.html) package in R). Unrecognised names are ignored.
  - The most common gender will be assigned to gender-neutral names.
  - The tool uses the Crossref [API](https://github.com/CrossRef/rest-api-doc). **Please, do not abuse it!** 
