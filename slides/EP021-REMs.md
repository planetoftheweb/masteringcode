<!-- .slide: data-state="title" -->

# Mastering Code
Ems vs rems

>>Author Notes:
- CSS has two units of measurement Ems and Rems that have become really popular because of their flexibility specially when working with fonts. In this episode, we'll take a look at how they work because they can trip you up as questions during a job interview.

---

## Text Sizing in CSS

<ul>
  <li class="fragment">Pixels and Accessibility</li>
  <li class="fragment">Rems &amp; Ems More Flexible</li>
  <li class="fragment">Default Sizes Matter</li>
  <li class="fragment">Rems vs Ems</li>
</ul>

>>Author Notes:

1. Pixels are the traditional way to size typography on the web, but in some older versions of IE, pixels are not resizable. That's an accessibility issue if someone doesn't have good eyesight and needs to make fonts bigger on your page.

1. Ems are Rems are relative sizes, which means that you can base the size of elements on other elements. That makes sizing with pixels less flexible. If you want to change the size of a group of elements, it's harder with pixels because you would have to issue sizing instructions for every element within a component.

1. If you want to use relative font sizes, the important thing to remember is that every browser has a default font size...in most cases, that's 16 pixels. You can change that default to something else if you want to and that affects how you use ems and rems.

1. Once you know your default font size, rems are always relative to the root font size. So 1rem is equal to 16 pixels...unless you've changed that default font size. Ems, in contrast are sized relative to their parent containers and it's the height of the font unit.

1. Let's take a look at some techniques you can use for managing font sizes.

---

## Resources
<ul>
  <li><a href="https://snook.ca/archives/html_and_css/font-size-with-rem">Font sizing with rem</a></li>
  <li><a href="https://j.eremy.net/confused-about-rem-and-em/">Confused about REM and EM?</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/responsive-typography-techniques/sizing-your-type-pixels-ems-and-rems">Responsive Typography Techniques</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/css-essential-training-1/the-font-size-property">CSS: Essential Training</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">raybo.org</a></li>
</ul>

>> Author Notes:
- Here's some pages where you can get more information about working with this technology as well as some related courses with information on developer tools. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.

```
html {
  font-size: 62.5%;
  font-family: sans-serif;
}

body {
  font-size: 1.6rem;
}

.quote {
  font-size: 1rem;
}

#sam {
  font-size: 1.5rem;
}

.quote-text {
  font-size: 2em;
}

.quote-customer {
  font-size: 1.5em;
  font-weight: bold;
}
```