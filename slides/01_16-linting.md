<!-- .slide: data-state="title" -->

# Mastering Code
Linting

> > Author Notes:

- Debugging code can be hard enough when you make a logical error in your thinking, but what gets really frustrating is when the error comes from something much simpler...missing punctuation or some sort of other typo. This is where a linter can help.

---

## How Linting Works

- Analyze code
- Works with editor
- Customizable
- Shareable

> > Author Notes:

- A linter analyzes your code and highlights potential syntax errors or warnings.

- Although you can find several online linters, many are well integrated with code editors or IDEs...Integrated Development Editors.

- Because people work differently, linters start off with a set of defaults, but also allow you to customize them for your own programming style.

- Some of the settings can be shared among groups or included in projects to make coding more consistent in a team project.

---
<!-- .slide: data-state="circles" -->

## Popular Linters

- JSLint
- JSHint
- ESLint
- IDE's

> > Author Notes:
There are several popular options and most of these are available as node packages to be included in projects during your build process or as plugins that are added to common editors.

- The most popular linters are JSLint, which was the first original linter created by Douglas Crockford. It doesn't have configuration file and it's tough to customize.

- JSHint is a fork of JSLint designed to be more configurable. It has excellent documentation and  a lot of support for many libraries out of the box.

- The latest of the bunch is ESLint, which was designed to be extremely extensible and includes rules not always available in other linters.

- Individual IDEs are usually pre-configured with one of these OR like in the case of Visual Studio and Visual Studio Code come with their own implementations.

---

## What Can They Do?

- HTML
- JavaScript
- CSS/Sass/Less/PostCSS
- Frameworks

> > Author Notes:

- Although the names of the linters implies that they are useful for checking for JavaScript errors, some linters can handle any type of content including HTML and it's variants, so if you're using a shortcut language like Haml, or even if you're writing bootstrap code , there are plugins that can handle that.

- Of course linters were originally created to find javascript errors, so a lot of the configuration and plugins will handle that, and that can include doing things like automatically fixing your code for you.

- You can also easily use it for verifying that your CSS and related code is properly written.

- Finally, you'll find plugins for all of the major frameworks like Angular, React, Vue.js and others.

---

## Resources
<ul>
  <li><a href="http://jslint.com/">JSLint</a></li>
  <li><a href="http://jshint.com/about/">JSHint</a></li>
  <li><a href="https://eslint.org/">ESLint</a></li>
  <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="http://www.raybo.org">raybo.org</a></li>
</ul>

> > Author Notes:

- Regardless of what you have or use, it's important that you understand how to configure and use a good linter.

- Here's some pages where you can get more information about working with this technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like linkedin, twitter or github @planetoftheweb.
