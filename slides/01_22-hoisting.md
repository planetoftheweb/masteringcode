<!-- .slide: data-state="title" -->

# Mastering Code
Hoisting

> > Author Notes:

- Javascript is a tough language to learn and often during interviews, you'll be presented with some code and asked to show what the result of some function or declaration will yield, so this week, we'll take a look at a classic issue that can trip people up during interviews and that's hoisting.

---

## Hoisting

<ul>
  <li class="fragment">JS Moves Declarations</li>
  <li class="fragment">Assignments not hoisted</li>
  <li class="fragment">`let` can be useful</li>
</ul>

> > Author Notes:

1. In JavaScript variable and function declarations are processed before the code is executed. This is what we call hoisting because it moves these declarations to the top of the relevant scope. That means that you have to be careful if you start using the var keyword further down in your code because it can create code that can have potential problems.

1. Although declarations are hoisted, assignments are not. That includes function expressions and that can create some other errors, so it's important that you understand what's happening in your code.

1. Because of the way that JavaScript handles scope hoisting can create problems because variables can be scoped outside their intended area of use, this is especially tru for loops. In some cases if you're using ES6, then the let keyword can be handy. Let's take a look at an example.

---

## Resources
<ul>
  <li><a href="https://www.kenneth-truyers.net/2013/04/20/javascript-hoisting-explained/">Hoisting Explained</a></li>
  <li><a href="https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/">Demystifying Hoisting</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-essential-training-3">JavaScript: Essential Training</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-functions/understanding-hoisting-and-variable-scope">Understanding Hoisting</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/the-good-parts-of-javascript-and-the-web">JavaScript: The Good Parts</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-ecmascript-6/arrow-functions-and-the-this-scope">Learning ECMAScript 6</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="http://www.raybo.org">raybo.org</a></li>
</ul>

> > Author Notes:

- Here's some pages where you can get more information about working with this technology as well as some related courses with information on developer tools. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.

```script.js
var howMany = 12;


var createBoxes = function(qty = 4) {
  var myBoxes = document.querySelector('.boxes');  
  console.log('Node: ' + myNode);
  console.log('i: ' + i);

  for (var i = 0; i < qty; i++) {
    var myNode = document.createElement('div');
    myNode.className= 'box';
    myBoxes.appendChild(myNode);
  }
}

createBoxes(howMany);

```
