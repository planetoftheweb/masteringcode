<!-- .slide: data-state="title" -->

# Mastering Code
AJAX

>>Author Notes:
- Every developer needs to understand how to make Asynchronous requests to a server using AJAX. Let's get started by talking about what AJAX is and then look at a quick example.

---

## AJAX

<ul>
  <li class="fragment">Asynchronous</li>
  <li class="fragment">`XMLHttpRequest()`</li>
  <li class="fragment">`send()`, `open()` </li>
  <li class="fragment">`onreadystatechange`</li>
</ul>

>>Author Notes:

1. AJAX stands for Asynchronous Javascript and XML. and that means that you can make requests to a server and then not wait for an immediate response, but continue to work until the server is done with the request. Once the request is completed, the data is sent to the browser and your application can do something with that data.

1. To create the request, we use the XMLHttpRequest constructor and then we use a few other functions to manage the request. The XML in JavaScript can be a bit confusing because it seems to indicate that the language you have to use to make these requests is XML. These days, it's rare to see the older eXtensible Markup Language being used and so AJAX requests can be retrieved as simple text and then parsed into a JavaScript Object.

1. The most important ones are are the open method, which lets us prepare the original request for the server and the send method, which actually sends the request to the server.

1. If the request has been sent, we can track a special event called readystatechange. The server will send us data about the request through this variable. The request object we receive will have some codes we can use to verify the request has been succesful and if everything works out ok, then we'll get the data, which then needs to be parsed into a JavaScript object.

---
## Resources
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/AJAX">MDN AJAX</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-and-ajax-integration-techniques">JavaScript and AJAX: Integration Techniques</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/building-web-applications-with-ajax/welcome">Building Web Applications with Ajax</a></li>
      <li style="margin-bottom: 10px"><a href="jQuery Data with AJAX">jQuery Data with AJAX</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-and-json-integration-techniques?u=2125562">JavaScript and JSON: Integration Techniques</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/ajax-with-php-add-dynamic-content-to-websites">Ajax with PHP: Add Dynamic Content to Websites</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

>> Author Notes:
- Here's some pages where you can get more information about working with this technology as well as some related courses with information on developer tools. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.

```
var request=new XMLHttpRequest();

request.open('GET', 'js/data.json');

request.onreadystatechange = function () {
  if (request.status === 200 
    && request.readyState === 4) {
    data = JSON.parse(request.responseText);
    console.log(data);
    console.log(request);
  }
};

request.send();
```