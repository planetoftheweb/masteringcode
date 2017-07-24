
<!-- .slide: data-state="title" -->

# Mastering Code
Callbacks

>> Author Notes:
- A callback is a convention in javascript that is often used in asynchronous programming to execute some code at a certain time in your application.

---

## Callbacks

<ul>
  <li class="fragment">Executed asynchronously</li>
  <li class="fragment">Often tied to events</li>
  <li class="fragment">Uses anonymous functions</li>
</ul>

>> Author Notes:
- Callbacks are often used in JavaScript to do things asynchronously...or when you want to execute code at a certain point in time.

- Because of this, they're often during in events to take care of tasks when the events are triggered.

- Callbacks often use anonymous functions, which means functions with no name because they are invoked immediately once the event takes place, so there's no need for a name.

---

## Resources
<ul>
  <li><a href="http://callbackhell.com/">Callback Heck</a></li>
  <li>`classList` <a href="http://caniuse.com/#search=classList"> browser support</a> <a href="http://callbackhell.com/"> pollyfill</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-functions">JavaScript: Functions</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-events?u=104">Javascript: Events</a></li>
      <li><a href="https://www.lynda.com/HTML-tutorials/Controlling-classes-HTML5-classList/122462/137633-4.html">Using classList</a></li>
    </ul>
  </li>
  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>


>> Author Notes:
- Here are some pages where you can get more information about this topic and some courses you might want to consider taking. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.

```
var tips = document.querySelectorAll('.hastip');

for (var i = 0; i < tips.length; ++i) {
  tips[i].addEventListener('click', function(e) {
    e.target.querySelector('.tooltip').classList.toggle('active');
  }, false);
}
```

```
.btn .tooltip.active {
  display: block;
  bottom: 40px;
  left: 10px;
}
```