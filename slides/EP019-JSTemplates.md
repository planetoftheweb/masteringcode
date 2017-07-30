<!-- .slide: data-state="title" -->

# Mastering Code
JavaScript templates

>>Author Notes:
- Using JSON and AJAX is great, but if you're going to parse more complex data, it's better and more common to use a templating engine.

---

## Templating

<ul>
  <li class="fragment">Many Options</li>
  <li class="fragment">EJS</li>
</ul>

>>Author Notes:

1. Templating is a really common task in JavaScript because it makes parsing easier. It's part of several languages like React and something even implemented in ES6. In this video, we'll examine the concept as well as a specific implementation called EJS.

1. EJS stands for Embedded JavaScript and is one of the templating implementations popular with one of the popular frameworks for NodeJS called ExpressJS. However the concept is very similar in different languages. Once you learn to work with them in EJS, it will be super easy to learn the difference in some of the other implementations.

---

## Resources
<ul>
  <li><a href="http://www.embeddedjs.com/">EJS Site</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-templating/conditionals-and-loops?u=2125562">JavaScript Templating</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-and-json-integration-techniques?u=2125562">JavaScript and JSON: Integration Techniques</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-and-ajax-integration-techniques">JavaScript and AJAX: Integration Techniques</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">raybo.org</a></li>
</ul>

>> Author Notes:
- Here's some pages where you can get more information about working with this technology as well as some related courses with information on developer tools. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.

```
  result = new EJS({url: 'js/template.ejs'}).render(data.artists);
  document.querySelector('.artists').innerHTML = result;
```

```template.ejs
<% for(var i=0; i < data.artists.length; i++) { %>
  <div class="artist">
    <h4><%= data.artists[i].name %></h4>
    <p><%= data.artists[i].bio %></p>
  </div>
<% } %>
```