
<!-- .slide: data-state="title" -->

# Mastering Code
Arrow Functions

>> Author Notes:
- Arrow functions are one of the new features in javascript and a lot companies are implementing them into day to day code, so you need to understand how to read them and implement them into your coding practices. Let's take a look at how they work and then look at an example of converting some existing scripts.

---

## Arrow Functions

```
node.addEventListener('click', function(e) {
  return this.classList.toggle('myclass');
}, false);
```

<ul>
  <li>Shortcut for anonymous `function`</li>
  <li class="fragment">Implicit returns</li>
  <li class="fragment">Parameter rules</li>
  <li class="fragment">Doesn't bind `this`</li>
</ul>

>> Author Notes:

```
node.addEventListener('click', e => node.classList.toggle('myClass'), false);
```

1. Arrow functions are a shortcut to the JavaScript function keyword, they allow you to shorten the syntax and do more in less room. They can be a bit hard to read, but once you understand what's going on, they're really handy.

2. They are designed to substitute the Anonymous function syntax, which are functions with no name. The first thing you need to know is that they allow you to get rid of the function keyword itself. The arrows, go right before where the curly braces would go.

3. They also allow you to have implicit returns. That means that if there's only one argument, that argument will be returned by the function without having to include a return statement. If there is more than one statement, you'll still need the curly braces.

4. When you pass parameters, if you're passing only one parameter, you can omit the parenthesis. If you have no parameters or if you have more than one parameter, you still need the parenthesis.

5. Arrow functions aren't for everything, and that's because the `this` keyword isn't bound like it normally would, so if you're want it to be bound as usual, you'll need to use a regular function.

---
## Resources
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow Functions at MDN</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-ecmascript-6/arrow-functions?u=104">Arrow Functions and ES6</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-functions?u=104">JavaScript Functions</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-essential-training-3?u=104">JavaScript Essential Training</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

>> Author Notes:
- Here's some pages where you can get more information about working with the developer tools as well as some related courses with information on developer tools. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.


```script.js

var Hamburger = (nodeName = '#topMenu') => {
var myNode = document.querySelector(nodeName + ' .hamburger');


return {
  activate: () => myNode.addEventListener('click', function(e) {
    this.parentNode.querySelector('.navbar').classList.toggle('hidden')
  }, false),
  hide: () => {
    myNode.parentNode.querySelector('.navbar').classList.add('hidden');
  }
}; //return
} //Hamburger

var topMenu = new Hamburger();
topMenu.activate();

var bottomMenu = new Hamburger('#bottomMenu');
bottomMenu.activate();
bottomMenu.hide();
```
