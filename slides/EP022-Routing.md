<!-- .slide: data-state="title" -->

# Mastering Code
Routing

> >Author Notes:
- Modern web apps can often communicate with the server and have more direct access to the request that's being sent and the response that you get back. One of the technologies that works really well for managing routes is Node with the ExpressJS framework, so let's take a look at what it's all about.

---

## Routing

<ul>
  <li class="fragment">Uses URI</li>
  <li class="fragment">Methods</li>
  <li class="fragment">Node &amp; ExpressJS</li>
</ul>

> >Author Notes:

1. An application that can manage routing uses the URI or Uniform Resource Identifier to communicate and send requests to a server.

1. The server expects you to specify a method, which tells the server the action you want the server to perform. So, for example you can ask the server to use a GET method, which usually just returns some data or a DELETE method when you want the server to delete a record in a piece of data.

1. Different servers do this differently, but Node with the ExpressJS framework gives you a super easy way to manage the different types of requests. NodeJS also gives you direct access to the file system, which JavaScript doesn't.

Let's take a look at how it works and build the simplest of apps that routes reads some data and handles two requests.

---

## Resources
<ul>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/node-js-essential-training">Node.js Essential Training</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js">Building a Website with Node.js and Express.js</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/node-js-test-driven-development">Node.js: Test-Driven Development</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">raybo.org</a></li>
</ul>

>> Author Notes:
- Here's some pages where you can get more information about working with this technology as well as some related courses with information on developer tools. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.

```app.js
var express = require('express');
var app = express();

var data = require('./data.json');

app.get('/', function(req, res) {
  res.send(`
      <h1>Welcome</h1>
      <p>Welcome to our site.</p>
  `);
});

app.get('/speakers', function(req, res) {
  var info = '';
  data.speakers.forEach(function(item) {
    info += `
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
    `;
  });
  res.send(`
      <h1>Roux Academy Meetups</h1>
      ${info}
  `);
});

var server = app.listen(3000);
```
