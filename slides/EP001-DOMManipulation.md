
<!-- .slide: data-state="title" -->

# Mastering Code
DOM manipulation

>> Author Notes:
- The DOM or Document Object Model is one of the most fundamentals components of any web application. Understanding what a developer knows about reading, writing and modifying the DOM is a good to way gauge their level of skill. It's also important for every developer to understand how to access, modify and remove elements within the DOM. Let's take a look at some definitions and then dig into some code.

---

## Understanding the DOM
<ul>
  <li class="fragment">DOM structure</li>
  <li class="fragment">DOM nodes</li>
  <li class="fragment">Target nodes</li>
  <li class="fragment">Manage nodes</li>
</ul>

>> Author Notes:
- The DOM is the structure that gives you access to all of the content within a website. You can target the DOM with JavaScript and CSS rules.
- The key to accessing elements in your HTML are Nodes, think of nodes as a branch in a tree that has different sub-branches. You access the content on your page by targeting the proper node.
- To get to those nodes, you start by targeting the window element in the current document, which is the root of the entire DOM and then asking for a node that matches different criteria. JavaScript will return either a specific node or an array-like object with all of the nodes.
- Once you have the nodes, then it's up to you to use different methods to add, modify or delete the content within the nodes.

---

## Accessing DOM Nodes
<ul>
  <li class="fragment">`getElementById()`</li>
  <li class="fragment">`getElementsByClassName()`, `getElementsByTagName()`</li>
  <li class="fragment">`querySelector()`, `querySelectorAll()`</li>
</li>
</ul>

>> Author Notes:
- There are several methods that allow you to access DOM nodes. The most popular by far is getElementById, it returns an element if it has an ID you specify. It's the oldest and most compatible of all DOM selection methods, but the problem is that elements don't always have IDs for you to access them.
- There's a couple of methods that let you elements by either classname 
- or tagname. They're pretty self explanatory, the difference is that these return a list of nodes and you'll need to loop through them to get to individual nodes.
- There's also a couple of modern ways to access nodes, which all developers should be aware of and that's the combination of querySelector
- And querySelectorAll. The difference is that querySelector returns the first matching element and querySelectorAll returns a list-like object.

---

## Managing Nodes
<ul>
  <li class="fragment">`innerHTML`</li>
  <li class="fragment">`createElement()`</li>
  <li class="fragment">`appendChild()`</li>
  <li class="fragment">`addEventListener()`</li>
</ul>

>> Author Notes:
- Once you have nodes, you'll be able to do something with them, you can, for example append regular HTML text to the nodes with innerHTML property.
- You can also create nodes manually, and you should have some experience doing this using createElement().
- You can also insert a node inside another node with appendChild()
- Once you have a series of nodes, you can also addEvents to them using addEventListener.

Now, in an interview, you might be asked to show how well you undertand the DOM by putting together an example of creating, manipulating and even deleting nodes.

---
## Resources
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">Document Object Model</a></li>
  <li class="courses">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-essential-training?u=104">JavaScript Essential Training</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.lynda.com/HTML-tutorials/JavaScript-Enhancing-DOM/122462-2.html">JavaScript: Enhancing the DOM</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-events?u=104">JavaScript: Events</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-for-web-designers-2?u=104">Javascript for Web Designers</a></li>

    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">Courses</a> | <a href="http://www.raybo.org">raybo.org</a></li>
</ul>


>> Author Notes:
- The DOM is super complex and there are lots more methods and properties that you should learn more about. Here are some pages where you can get more information about the DOM and some courses you might want to consider taking. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.

```
  var currColor = 0;
+  var myElement;
+  var myNode = document.querySelector('.boxes');
+
  for (var i = 0; i < howMany; i++) {
+    myElement = document.createElement('div');
+    myElement.className = 'box';
+    myElement.style = 'background-color: ' + colors[currColor];
+    myNode.appendChild(myElement);
+    myNode.addEventListener('click', function(e) {
+      e.target.parentNode.removeChild(e.target);
+    }, false);
```