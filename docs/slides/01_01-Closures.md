
<!-- .slide: data-state="title" -->
# Mastering Code
Closures

>> Author Notes:
- Closures are one of those concepts that make a tricky interview question. Let's take a look at a definition and then take some time for some coding practice.

---

## JavaScript Scope
- Scope region binding<!-- .element: class="fragment"-->
- Lexical scoping<!-- .element: class="fragment"-->
- Variables remember environment<!-- .element: class="fragment"-->

>> Author Notes:
- Before we can talk about closures, we need to review how JavaScript Scope works. Scope refers to the region within a computer program where a variable is available. Variables are created and exist in different places within an application.
- One of the interesting things about JavaScript is that it uses something called lexical scoping. In Lexical Scope when you create a function inside another function, the inner function has access to variables available in the parent function.
- That means that variables can remember the environment they were created in. That doesn't happen in other types of scope and it allows you to do some special things in JavaScript, which is where closures come in.

---

## Closures
- Creating a closure<!-- .element: class="fragment"-->
- Remembers environment<!-- .element: class="fragment"-->
- Different Lexical Environments<!-- .element: class="fragment"-->
- Closures inside loops<!-- .element: class="fragment"-->

>> Author Notes:
- When you use the function keyword inside another function, you create a closure, which remembers the variablesbut why is that important.
- Because a closure remembers the environment it was created, you can pass along a different set of parameters for each instance.
- You can use the same actions for different data. Creating instances of the functions while you're able to pass along different parameters.
- Loops can be really useful when creating closures, but there's some special considerations because loops in javascript are also closures.

----

## Resources
<ul>
  <li class="fragment"></li>
</ul>
