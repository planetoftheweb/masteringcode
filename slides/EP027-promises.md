<!-- .slide: data-state="title" -->

# Mastering Code
Promises

> >Author Notes:

- Promises are a newer feature in JavaScript and are JavaScript structures that describe what is supposed to happen when an time-based operation takes place. They supplement callbacks and provide structure and certain guarantees that help make asynchronous more dependable.

---

## Callbacks

```
document.querySelector('.myButton')
  .addEventListener('click', function() {
    console.log('clicked');
  }, false);
```

- Functions passed as arguments
- Asynchronous
- Problems

> > Author Notes:

So, let's review first what a callback is.

- Callbacks in Javascript are functions, that are passed along as arguments.

- Callbacks are common on asynchronous events. The callback will be executed when something happens. In this case, whenever the click event happens.

- There's a few problems with callbacks. The most notable is that callback code often suffers from clarity and error handling, but more importantly, callbacks can suffer from a lack of guarantees that code inside them will be executed at certain times.

http://jsbin.com/yoyifax/embed?js,console

---
## Features

- Execution guarantees
- Resolve only once
- Easier chaining
- Error propagation

> >Author Notes:
The callback itself is an Object that can be created using a Promise constructor. That constructor needs a callback that takes two parameters. Functions which will be executed if the promise is successful or if it fails. You usually do some asynchronous stuff within this function and then if everything works, you can use the resolve and reject functions to control what happens when things work and when they don't

1. Promises use callbacks, but provide some additional safeguards. For example, the callbacks in promises will never be called before the completion of the current event loop, which can be a problem with regular callbacks.

1. Also, promises resolve only once. It can't succeed or fail twice. If a promise has succeeded or failed, it will call the correct callback even though the event might have taken place earlier.

1. Promises are designed to be easily chained. The result of one operation can lead to the start of another operation.

1. If you chain promises together and there is an error somewhere along the line, the promise chain will stop, which is a huge advantage of promises over callbacks. Let's take a look at an example with callbacks.

---

## Resources
<ul>
  <li><a href="https://developers.google.com/web/fundamentals/primers/promises">Introduction to Promises</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">The promise object</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/rethinking-asynchronous-javascript">Rethinking Asynchronous JavaScript</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-ecmascript-6/intro-to-promises?trk=insiders_6787408_learning">Intro to promises</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-ecmascript-6/building-promises?trk=insiders_6787408_learning">Building promises</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">Courses</a> | <a href="http://www.raybo.org">raybo.org</a></li>
</ul>

> > Author Notes:
- Here's some pages where you can get more information about working with this technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like linkedin, twitter or github @planetoftheweb.

- Using a callback
- Adding a promise
- Click event
- Loading multiple sources
- Forcing an order
