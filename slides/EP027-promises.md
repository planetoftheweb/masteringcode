<!-- .slide: data-state="title" -->

# Mastering Code
Promises

> >Author Notes:

- Promises is a JavaScript Object that describes what is supposed to happen when an time-based (or asynchronous) operation takes place.

---

## Exploring Promises

- Modern browsers
- Created with constructor
- Use callbacks

> >Author Notes:

1. Promises are becoming more and more common in JavaScript and related languages like AngularJS, however if you're super concerned with backwards compatibility they will not work in any versions of Internet Explorer. However most of the time, you'll be able to work with them if you're using a tool like Babel to make sure your code is compatible with older browsers.

1. Chances are that most of the time you wont create promises yourself, you'll be using an existing promise that exists in a framework, but if you want to create one you can use a constructor to do so. Newer APIs already use promises, so you won't generally have to write them yourself, just understand how to use them.

1. Promises use callbacks, but creates a structure that makes it easier to understand and guarantees a better order of execution.

---

## Sample Callback

<iframe height='300' scrolling='no' title='Callback vs Promises' src='//codepen.io/planetoftheweb/embed/OOjjvq/?height=300&theme-id=27192&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; height: 70vh'>See the Pen <a href='https://codepen.io/planetoftheweb/pen/OOjjvq/'>Callback vs Promises</a> by Ray Villalobos (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## Advantages

- Easier chaining
- Execution guarantees
- Error propagation

> >Author Notes:

1. Promises are designed so that they're easily chained. The result of one operation can lead to the start of another operation. This is one of the main advantages over callbacks because promises makes this process a lot cleaner and clearer.

1. The callbacks used within promises have offer some additional safeguards. For example, the callbacks in promises will never be called before the completion of the current event loop, which can be a problem with regular callbacks.

1. If you chain promises together and there is an error somewhere along the line, the promise chain will stop, which is a huge advantage of promises over callbacks. Let's take a look at an example with callbacks.

---

## Sample Promise

<iframe height='300' scrolling='no' title='Callback vs Promises' src='//codepen.io/planetoftheweb/embed/POKJbo/?height=300&theme-id=27192&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; height: 70vh;'>See the Pen <a href='https://codepen.io/planetoftheweb/pen/POKJbo/'>Callback vs Promises</a> by Ray Villalobos (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## Resources
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises">Using promises</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">The promise object</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-ecmascript-6/intro-to-promises?trk=insiders_6787408_learning">Intro to promises</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-ecmascript-6/building-promises?trk=insiders_6787408_learning">Building promises</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-node-js-2/promises?trk=insiders_6787408_learning">Promises in Node.js</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">Courses</a> | <a href="http://www.raybo.org">raybo.org</a></li>
</ul>

> > Author Notes:
- Here's some pages where you can get more information about working with this technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like linkedin, twitter or github @planetoftheweb.
