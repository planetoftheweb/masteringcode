<!-- .slide: data-state="title" -->

# Mastering Code
Strict

> > Author Notes:

Some browsers allow for running an alternate version of javascript called 'strict' mode, which makes it harder to make common programming mistakes. If you get this question in a interview, chances are people want to make sure you're aware of the feature because it's used internally in projects.

---

## Strict Mode

```
'use strict';
scold = 'You writing sloppy code?';
```

- 'use strict'
- 'strict' vs sloppy

> > Author Notes:

- To use this feature, you simply add the text 'use strict' in single or double quotes. The compiler will now throw certain errors it didn't before. For example in the code above, we're using a variable called 'scold' without declaring it...how dare we. This is fine in regular JavaScript, but not in strict mode.

- People who love strict mode sometimes call non-strict mode sloppy mode, but I think it just comes down to style. In sloppy mode, the compiler will automatically create the variable for us. That is called variable hoisting since it will generate a variable at the top of the code for you. You should check out my previous episode on [variable hoisting](https://www.linkedin.com/learning/mastering-web-developer-interview-code/what-is-variable-hoisting-and-how-do-you-guard-against-it).



---

## Strict Mode

```
(function () {
  'use strict';
  scold = 'You writing sloppy code?';
}());
```

- Run an [IIFE](https://www.linkedin.com/learning/mastering-web-developer-interview-code/how-does-an-iife-work)


> > Author Notes:

But since we're being strict, most compilers would throw a warning if you declare 'use strict' globally like this. So, you should place your use strict statement inside an 'IIFE' or immediately invoked function expression like this. That means wrapping your code with a function call like this.


That's because we often run processors that will combine multiple pieces of javascript. Without an IIFE, when this is combined with some other script, that script will run in strict mode as well even if it wasn't meant to.

If you need more information how IIFE's work, check out the earlier episode on how they work.

---

## Strict Mode

```
function life() {
  'use strict';
  meaning = "42";
  return meaning;
}
life();
```

- Whole script vs functions

> > Author Notes:

Of course, 'strict mode' can also run inside individual functions and then only those functions will run in strict mode, so you can use it in a more targeted way. This will also make any functions nested inside this one to use strict mode as well.


---

## Other Features


- Invalid assignments
- Property and params
- [Lots more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)


> > Author Notes:

- The simplest example is to show the issue with variables needing to be declared, but just in case you're asked to provide some other examples, strict mode prevents you from making some assignments which sloppy mode would shockingly enough not mind. For example use strict will cause certain variable names like 'undefined' or octal numbers from being used, which is weirdly ok with sloppy javascript.

- This mode also throws errors if you try to do things like deleting undeletable properties, create duplicate properties in JavaScript objects, try to create duplicate parameters passed to functions and modifying properties in things like the true or false keyword.

There's a few other, but those are the main ones you can find a list of them at this URL.

```
footer a:hover {
  color: #EEC856;
}

footer a:not(.special) {
  color: #8AC8E1;
}

footer p::first-letter {
  color: #EEC856;
  font-size: 150%;
}
```

https://codepen.io/planetoftheweb/pen/JMgxOd

---
## Resources
<ul>
  <li>MDN: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict Mode</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/mastering-web-developer-interview-code/how-does-an-iife-work?trk=insiders_6787408_learning">How does an IIFE work?</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/mastering-web-developer-interview-code/what-is-variable-hoisting-and-how-do-you-guard-against-it?trk=insiders_6787408_learning">What is variable hoisting and how do you guard against it?</a></li>
    </ul>
  </li>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos?trk=insiders_6787408_learning">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:

Here's the links where you can get more information about working with these tools technology as well as links to the previous episodes I mentioned before. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.
