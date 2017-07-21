<!-- .slide: data-state="title" -->

# Mastering Code
Event Propagation

>>Author Notes:

- Events are a huge part of what makes it possibly to have dynamic pages, so knowing how to work with them and understanding how they work is pretty important. Let's take a look at a real popular interview question that tests your understanding of events.

---

## Event Propagation

<ul>
  <li class="fragment">`addEventListener(name, callback, propagation)`</li>
  <li class="fragment">Capturing vs Bubbling</li>
  <li class="fragment">`stopPropagation()`</li>
</ul>

>>Author Notes:

1. The modern way to create events are by adding an event listener to an element and you need to pass three different parameters. First is the type of event you want to track, second is the callback or function that you want to execute when that event takes place and finally the type of propagation.

1. The type of propagation is a boolean so you specify a true or false value there. That determines the order in which the event is tracked through the DOM. We'll take a look at an example, but most of the time this value is false, which means the event bubbles up from the element that was the target up through the top of the DOM. The other type is a capturing event, which does the reverse.

1. You can also control wether the event continues to propagate through the DOM, and I think this is a great time for an example.

---

## Resources
<ul>
  <li><a href="https://www.quirksmode.org/js/events_advanced.html">Advanced Registration Models</a></li>
  <li><a href="https://www.sitepoint.com/event-bubbling-javascript/">Event Propagation</a></li>
  <li><a href="http://javascript.info/bubbling-and-capturing">Bubbling and Capturing</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-essential-training-3/what-are-dom-events">What are DOM Events?</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-events">JavaScript: Events</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">raybo.org</a></li>
</ul>

>> Author Notes:
- Here's some pages where you can get more information about working with this technology as well as some related courses with information on developer tools. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.

```script.js
var boxes = document.querySelector('.boxes');
var special = document.querySelector('#special');

boxes.addEventListener('click', function(e) {
  if (e.target.className==='box') {
    e.target.parentNode.removeChild(e.target);
  }
}, false);

special.addEventListener('click',function(e) {
  e.target.style="background-color: #6D73C2;"
  e.stopPropagation();
}, false);

```