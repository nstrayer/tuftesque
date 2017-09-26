# Tuftesque Hugo Theme

A hugo (but meant for blogdown) theme heavily inspired by the Tufte theme css but with a few customizations that make it more suibtable to a code-centric blog. These include a non-sidebared main page and some tiny css tweeks. Used in our blog [Live Free or Dichotomize](http://livefreeordichotomize.com/). Forked from [Hugo-Tufte](https://github.com/shawnohare/hugo-tufte).


## Site Parameters

There are a few things you can tweak with the theme that require very little effort. (Everything can be changed if you just copy the file containing what you want to change into your personal `blogPath/layouts/` directory).

__Background Color__

You can change the background color of the whole website by adding a value in your blog's `config.toml` with the value `Params.backgroundcolor`. E.g. 
```
...
[params]
    ...
    backgroundcolor = "steelblue"
    ...
```

It currently defaults to the hex value `#fffff8` which is a light cream color. 


For a more detailed explanation of how to customize your blog using `tuftesque` see [this blogpost](http://livefreeordichotomize.com/2017/07/13/introducing-the-tuftesque-blogdown-theme/) on the subject. 


... more docs to come.