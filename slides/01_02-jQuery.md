<!-- .slide: data-state="title" -->

# Mastering Code
jQuery

> > Author Notes:

- jQuery is one of the most popular javascript libraries. It was introduced in 2006, so it's more than 10 years old and some estimates calculate that it is used in almost 80% of all websites. Let's take a look at what it does and why it is so popular.

---

## What is jQuery

- JavaScript library
- More compatible
- New feature support

> > Author Notes:

- First off, jQuery is a JavaScript library, so it's essentially a series of functions that sit on top of JavaScript.

- The main reason people use jQuery is because it makes JavaScript more compatible across different browsers and platforms. One of the dirty secrets of browsers is that they don't always implement JavaScript features the same way.

- Older browsers don't always support newer features, so jQuery implements popular features and then translates converts them so that they work in older browsers. This saves you a lot of time because you don't have to write extra code to support both new and old browsers.

---

## Popular Features

- DOM Management
- AJAX
- Chaining

> > Author Notes:

- Before JavaScript offered methods like querySelector and querySelectorAll, jQuery provided a robust language for accessing elements. As a matter of fact, the new JavaScript selectors are modeled after jQuery's approach, but even then jQuery provides many more ways of accessing and modifying your documents than JavaScript.

- jQuery provides a robust set of AJAX methods that are easy to learn and are more backwards compatible with older browsers than regular JavaScript. Although you should know how to perform traditional AJAX requests with the fetch API, promises and even the XMLHttpRequest methods, you should definitely be comfortable with jQuery's access to these features.

- jQuery also implements the concept of chaining methods so that the results of one action will be accessible to the next sequence of events. Learning to chain is essential to mastering jQuery, so let's take a look at how we can work with jQuery to perform a simple task.

---

## Resources
<ul>
  <li><a href="https://jquery.com/">jQuery Website</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/jquery-essential-training-2?trk=insiders_6787408_learning">jQuery Essential Training</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/search?keywords=chris%20converse%20jquer?trk=insiders_6787408_learning">Chris Converse on jQuery</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/jquery-for-web-designers?trk=insiders_6787408_learning">jQuery for Web Designers</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="http://www.raybo.org">raybo.org</a></li>
</ul>

> > Author Notes:

- Here's some pages where you can get more information about working with this technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like linkedin, twitter or github @planetoftheweb.

```

var getArtists = new Request('js/data_artists.json', {
  method: 'GET'
});

var artists = fetch(getArtists).then(function (response) {
  return response.json();
});

document.querySelector('.load-info')
  .addEventListener('click', function () {
    artists.then(function(data) {
      console.log(data.artists[0].name);
    });
});
```
