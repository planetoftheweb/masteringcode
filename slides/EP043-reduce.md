<!-- .slide: data-state="title" -->

# Mastering Code
Reduce

> >Author Notes:
Reduce like the method we covered in the previous week is a higher order function that it's designed to solve a common problem. Going over a list of elements and retrieving a single value related to them.

---

## Traditional

```javascript
var total = 0;
var myArr = [2, 3, 4, 5, 6];

for ( var i = 0; i < myArr.length; i++ ){
    total = total + myArr[i];
}

console.log(total);
//20
```

> > Author Notes:

- Reducing always happens when you need to go from a list of elements to a single value. Let's take a look at how to handle this with a reducer.


---

## Reduce

```javascript
var myArr = [2, 3, 4, 5, 6];

var total = myArr.reduce(function(inc, item) {
  return inc + item; 
});

console.log(total);
// 20
```

> > Author Notes:

- Reducing will take a callback where you can pass along a series of parameters, which are typically an incrementor, so the thing we want to keep track of as we go through the operation as well as a variable for the itement item. 


---
## Map and Reduce

```javascript
var myArr = [2, 3, 4, 5, 6];

function inc(item) {
  return item +1;
}

function addEm(inc, item) {
  return inc + item;
}

var total = myArr.map(inc).reduce(addEm);
 
console.log(total);
// 25
```

> > Author Notes:

- That means that it can be chained just like with Map, as a matter of fact, you can map and reduce together like this.

---
## Reduce with arrow functions

```javascript
var myArr = [2, 3, 4, 5, 6];
var inc = item => item +1;
var addEm = (inc, item) => inc + item;

var total = myArr.map(inc).reduce(addEm); 

console.log(total);
// 25
```

> > Author Notes:

- For simple methods, these are sometimes expressed in the newer arrow function notation, which looks like this. I'm always leery of arrow notation in code examples, because I think it's a bit less clear, but you'll probably see examples of map and reduce in expressed in this way and you should be able to read them. Make sure you check epidode titled "How do you use arrow functions in ES6? if you need a refresher

---
## Resources
<ul>
  <li>MDN: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce">Reduce</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Map</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/mastering-web-developer-interview-code/how-do-you-use-arrow-functions-in-es6?trk=insiders_6787408_learning">Arrow functions in ES6</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/four-semesters-of-computer-science-in-5-hours?trk=insiders_6787408_learning">4 Semesters of Computer Science</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/functional-lite-javascript?trk=insiders_6787408_learning">Functional-Lite JavaScript</a></li>
    </ul>
  </li>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos?trk=insiders_6787408_learning">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:

Here's some pages where you can get more information about working with these tools technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.
