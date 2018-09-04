---
layout: page
title: ‘Suffrage’ 
subtitle: a colour palette for data visualisation in R
---

Beta version - please do not share.

Contact: Diego Alburez (<alburezg@lse.ac.uk>)

Installation
------------

    # library(devtools)
    # install_github("alburezg/suffragette")

Usage
-----

    library(suffragette)

See all available palettes:

    names(suf_palettes)

    ## [1] "flag"    "london"  "hanwell" "oxon"

Palettes
--------

### Never a Step Backward: Oxon Berks Bucks Federation

<img src="/suf/oxon.jpg" width="300">

    # Discrete
    suf_palette("oxon")

![s](suf/unnamed-chunk-4-1.png)

### London Society (from Mary Lowndes Album)

<img src="/suf/london.jpg" width="300">

    # Discrete
    suf_palette("london")

![s](suf/unnamed-chunk-5-1.png)

### Hanwell Women's Institute

<img src="/suf/hanwell.jpg" width="300">

    # Discrete
    suf_palette("hanwell")

![s](suf/unnamed-chunk-6-1.png)

### Classic suffragette flag

<img src="/suf/flag.jpg" width="300">

    # Discrete
    suf_palette("flag")

![s](suf/unnamed-chunk-7-1.png)

    # Continuous
    suf_palette("flag", n = 6, type = "continuous")

![s](suf/unnamed-chunk-8-1.png)

Examples
--------

    library(ggplot2)

    ## Warning: package 'ggplot2' was built under R version 3.4.4

    data(diamonds)

    pal <- suf_palette("oxon")

    ggplot(diamonds, aes(x=carat, y=price, colour=cut)) +
      geom_point() +
      scale_colour_manual(values = pal)

![s](suf/unnamed-chunk-9-1.png)