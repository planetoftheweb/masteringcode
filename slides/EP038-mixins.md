<!-- .slide: data-state="title" -->

# Mastering Code
Sass Mixins

> >Author Notes:
In the 2017 State of JavaScript survey, the Sass language outperformed CSS in terms of the amount of people who would prefer to use it on a project. If you're interviewing for a job today, it's something you need to be comfortable with. In this episode, we'll take a look at how to build a mixin using Sass.

---

## Sass Mixins


- Functions
- Take arguments
- Initialized with defaults

> > Author Notes:

Sass, of course stands for syntactically awesome stylesheets. It's a way to write CSS that is more flexible and allows you to use a number of features that then convert to regular CSS via a processor.

- Mixins are Sass versions of functions and just like functions, they feel a lot like javascript functions, but because they're built with sass within CSS, the syntax is a bit different.

- Just like functions they can take a number of arguments in order to make their execution more flexible.

- One nice feature of mixins is that they can also be initialized with values, so if you don't pass along a parameter, the default will take over.

One mixin I really like using is for creating a section with a background image that fills an area proportionally, The code of it is really long and I want to make it more flexible for when I want to use it in different places.

```
@mixin backImage(
  $image,
  $height: 30,
  $grDir: to bottom,
  $opStart: .2,
  $opEnd: .2,
  $bgPos: center center
  ) {
  background: linear-gradient(
    $grDir,
    rgba(0,0,0, $opStart),
    rgba(0,0,0, $opEnd)
  ),url($image);
  height: $height + vh;
  background-repeat: no-repeat;
  background-position: $bgPos;
  background-size: cover;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif    
} //backImage
```

---
## Resources
<ul>
  <li><a href="http://sass-lang.com/">Sass Language</a> | <a href="https://css-tricks.com/snippets/sass/">Sass Snippets on CSS Tricks</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/sass-essential-training">Sass Essential Training</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/building-a-responsive-single-page-design-with-sass">Building a Responsive SPD with Sass</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/responsive-css-with-sass-and-compass">Responsive CSS with Sass and Compass</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:

Here's some pages where you can get more information about working with these tools technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.
