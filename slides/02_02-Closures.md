
<!-- .slide: data-state="title" -->
# Mastering Code
Closures

> > Author Notes:
- Closures are super common concept in javascript. If you've spent some time with the language, you're probably already using them, even if you don't know you are. It's one of those concepts that makes a good, but tricky interview question. Let's take a look at a definition and then take some time for some coding practice.

---

## Scope and Closures
<ul>
<li class="fragment">Scope region binding</li>
<li class="fragment">Lexical scoping</li>
<li class="fragment">Creating a closure</li>
<li class="fragment">Remembers <a href="http://jsbin.com/dizika/3/edit?js,console">environment</a></li>

> > Author Notes:
- Before we can talk about closures, we need to review how JavaScript Scope works. Scope refers to the area within a computer program where a variable is available. Variables are created and exist in different regions...or scopes within an application.
- JavaScript uses something called lexical scoping. Lexical scope describes how variable scopes are determined when there is a function inside another function. Using Lexical scope the inner function has access to variables available in the parent function.
- A closure is created when you use the function keyword inside another function.
- That means that variables can remember the environment they were created in. That doesn't happen in other types of scope and it allows you to do some special things in JavaScript, which is where closures come in. Let's take a look

---

## Closures
<ul>
<li class="fragment">Closures in <a href="http://jsbin.com/xijibiqada/1/edit?js,console">objects</a></li>
<li class="fragment">Closures inside loops</li>
<li class="fragment">Creating a function factory</li>

> > Author Notes:
- Closures are super common inside object definitions, and they can show you how the closures can remember state a bit better, so let's take a look at an example there.
- Since closures remember the value of the environment they were created in, inside loop those variables are constantly changing and by the time the closures are called, the loop has already modified the values in the loop. That's a common mistake, but it's also sometimes desireable.
- Creating a closure inside a loop is a technique called a function factory where you create a loop to generate a series of closures. It's useful for creating a series of events.

```script.js
function initItem(id, text) {
  return function() {
    handleItem(id, text);
  }
}

function setupitem() {
  var DOMElement;

+  for (var i = 0; i < itemText.length; i++) {
+    DOMElement = document.querySelector(itemText[i].id);
+    DOMElement.addEventListener('focus', initItem(itemText[i].id, itemText[i].text));
+  } // Loop
} // setupitem
```

---
## Resources
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">Closures on MDN</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-essential-training?u=104">JavaScript Essential Training</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-functions?u=104">JavaScript: Functions</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-enhancing-the-dom?u=104">JavaScript: Enhancing the DOM</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-and-json?u=104">JavaScript and JSON</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:
- Here's some pages where you can get more information about closures and some related courses you might want to consider taking. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.
