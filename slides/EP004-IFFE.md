
<!-- .slide: data-state="title" -->

# Mastering Code
IFFE

>> Author Notes:
- An IFFE is a convention in javascript that helps you protect variables as well as execute some code immediately.

---

## IFFE

```
(function() {
  //Isolate Code Here
})();
```

<ul>
  <li class="fragment">Immediately-invoked</li>
  <li class="fragment">Function</li>
  <li class="fragment">Expression</li>
</ul>

>> Author Notes:
It's stands for Immediately-Invoked Function Expression and there's a lot happening in all of those words, so let's break it down.

- First of, this is a function that we want to execute immediately. Scripts execute when the script tag is first read, but any functions created in our script do not get executed until they're called. If you remember the code from our First Episode, you remember that we created a function and then we had to remeber to call or invoke that function. A function doesn't execute until it's invoked.
- Obviously what we want to invoke is a function, but this is going to be a special function that wraps our entire script. The reason for that is that we want to protect any variables or function inside this master function from being accessed. Also, functions inside this will also create closures. If you remember from Episode 002, functions inside other functions will remember the environment they were created in.
- Making this function an expression is what allows it to execute immediately. You do that by adding parenthesis around a function. This is sort of like what you do in math when you want an operation to happen before something else.

---
## Resources
<ul>
  <li><a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/">Defining an IFFE</a></li>
  <li><a href="http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript">IFFE question in Stack Overflow</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-essential-training">JavaScript Essential Training</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-functions">JavaScript: Functions</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-for-web-designers-2">JavaScript for Web Designers</a></li>

    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>


>> Author Notes:
- Here are some pages where you can get more information about the IFFE pattern and some courses you might want to consider taking. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.

```
function enclose() {
}
enclose();
```

```
var enclose  = function protect() {
}();
```

```
var enclose  = function() {
}();
```

```
(function() {
})();
```


```
(function() {

var colors = [
               '#C94C24', //orange
               '#268BD2', //blue
               '#C4226F', //pink
               '#859835', // lime
               '#6D73C2', // purple
               '#37A198', // green
               '#DA3637', //red
               '#F0AD4E' //yellow
             ];

+  var howMany = 10;
  var colorAmt = colors.length;
  var currColor = 0;
  var myElement;
  var myNode = document.querySelector('.boxes');

  for (var i = 0; i < howMany; i++) {

    myElement = document.createElement('div');
    myElement.className = 'box';
    myElement.style = 'background-color: ' + colors[currColor];
    myNode.appendChild(myElement);

    if (currColor === colorAmt-1) {
      currColor = 0;
    } else {
      currColor++;
    }
  }

  myNode.addEventListener('click', function(e) {
    e.target.parentNode.removeChild(e.target);
  }, false);

})();

```