<!-- .slide: data-state="title" -->

# Mastering Code
calc();

> >Author Notes:

- Fetch is the next generation API for performing AJAX requests. It's a lot simpler and easier than using the XMLHttpRequest method. Let's take a look at some of it's features.

---

## Callbacks

- Uses Promises
- Simple to use
- Full access to features
- Parse formats

> > Author Notes:

- The main difference between fetch and XMLHttpRequest is that it uses promises, which makes it easier to set up operations and chain sequences of events outside of the request.
- The API is built so that it's super easy to use if all you want is to load up an external document, but it also gives you complete control over the request.
- It returns full information over the request object so you can specify things like the verb, the header information or get information like the URL, referrer and much more.
- The fetch API also provides utilities so that the content can easily be parsed as JSON, text, blobs or others. It makes it simpler to process the request.

---

## Resources
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API (MDN)</a></li>
  <li><a href="https://developers.google.com/web/updates/2015/03/introduction-to-fetch">Introduction to Fetch</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/fetch-api">Fetch API</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-ecmascript-6/loading-data-with-fetch">Loading data with fetch</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">Courses</a> | <a href="http://www.raybo.org">raybo.org</a></li>
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
