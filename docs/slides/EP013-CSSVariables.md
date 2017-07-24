
<!-- .slide: data-state="title" -->

# Mastering Code
CSS Variables

>>Author Notes:
- CSS is an evolving language, to stand out during an interview, it's good to show that you're keeping up with some of the latest features and one of the more useful features is variables. Let's take a look at how they work and how we can use them in an existing CSS.

---

## CSS Variables

<ul>
  <li class="fragment">Use today with PostCSS</li>
  <li class="fragment">Create in `:root`</li>
  <li class="fragment">Define `--yellow`, `@custom`</li>
  <li class="fragment">Use with `var(--yellow)`, `@apply`</li>
</ul>

>>Author Notes:

1. The first thing you need to know about this feature is that Support is pretty good in most browsers except for internet explorer. http://caniuse.com/#feat=css-variables. However, you can use it with the PostCSS plugin, which will convert your CSS to work in older browsers. That's something you should already be using for things like prefixes anyways.

2. To create variables, you define a :root rule and then put your variables inside that rule.

3. Then, you can create different types of variables, regular variables have two dashes in front of the name or you can create custom media queries or selectors with the @ sign in front of the variable.

4. In order to use the variables, you can use the var keyword in your css for regular variables or the apply keyword for more complex variables.

---
## Resources
<ul>
  <li><a href="http://caniuse.com/#feat=css-variables">Browser support</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables">MDN</a> | <a href="https://css-tricks.com/making-custom-properties-css-variables-dynamic/">CSS Tricks</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/next-generation-css-design-with-postcss-and-cssnext">Next Generation CSS Design with PostCSS and CSSNext</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/building-a-responsive-single-page-design-with-postcss">Building a Responsive Single-Page Design with PostCSS</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

>> Author Notes:
- Here's some pages where you can get more information about working with the developer tools as well as some related courses with information on developer tools. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.


```postcss/styles.css

/*Variables*/

:root {
  --green: hsl(175, 49%, 42%);
  --red: hsl(15, 80%, 50%);
  --beige: hsl(45, 41%, 88%);

  --btn: {
      display: inline-block; 
      padding: 6px 12px; 
      font-size: 1rem; 
      line-height: 1.42857143;
      outline: none;
      text-align: center; 
      cursor: pointer; 
      background-image: none; 
      border: none; 
      border-radius: 4px; 
      color: #fff; 
      background-color: var(--green);
      position: relative;
  }

  @custom-media --min (width <= 600px);
  @custom-media --max (width > 600px);
  @custom-selector :--headings h1, h2, h3, h4, h5, h6;
}

:--headings {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--red);
}

body { font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 1.5rem; margin: 0; padding: 0; }
.container { width: 80%;  margin: 0 auto; }

.nav .btn.hamburger {
  @apply --btn;
  margin: 10px auto;
  display: none;
  @media (--min) {
    display: block;
  }
}

.nav .container {
  max-width: 1200px;
  @media (--min) {
    width: 100%;
  }
}

.nav .navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: hsl(45, 41%, 92%);

  @media (--max) {
    flex-direction: row;
    background: none;
  }
}

.nav .navbar.hidden {
  @media (--min) {
    display: none;
  }
}

.nav .navbar .btn {
  margin: 0 auto;
  text-align:  center;
}

.nav .navbar a {
  color: var(--red);
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 16px 9px;
  white-space: nowrap;
  text-align: center;
}

.nav .navbar a:hover {
  color: color(var(--red) shade( 20%));
  @media (--min) {
    background-color: var(--beige);
  }
} /* hover */
```
