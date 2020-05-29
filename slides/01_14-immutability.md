<!-- .slide: data-state="title" -->

# Mastering Code
Immutability

> > Author Notes:

Immutability is a really important concept, it means that an element is unchangeable. But it's practical application in JavaScript is a little different. Let's take a look.

---

## Not Immutability

```
var mutt = 5;
mutt = 3; //np
  
const inMutt = 5;
inMutt = 4; //prob
  
const myArr = [1,2,3];
myArr = 5; //error
myArr[0]=1; //wat?
```

> > Author Notes:

- One of the new options in the newer versions of JavaScript like ES6 is to create constants using the const keyword. That creates something similar to immutability. It's pretty logical that if we define a variable as a constant, we shouldn't be able to modify that variable. However, when we declare a list as a constant, the elements inside that list aren't technically immutable.
That's because the assignment of the values to our lists are references to the actual lists.

So we have to be careful when we're talking about immutability in JavaScript because what's important about it isn't that we can't change the value of things, but that in functional programming we look to develop a style where our elements aren't changed. Let's look at a better example.

---

## Mutable

```
var myArr = [5, 6, 7];
myArr.forEach(function(item, index) {
  myArr[index] = item + 1;
});
console.log(myArr);
// [6, 7, 8]
```

> > Author Notes:

- This is a typical example of how we would program something like this, and it works fine for this example and there's nothing necessarily wrong with this example, because it works, but in terms of functional programming it's better to design our fuctions so that they don't change our original arrays.

---

## Map

```
var myArray = [5, 6, 7];

function inc(item) {
  return item +1;
}
var modArr = myArray.map(inc);
console.log(modArr);
```

> > Author Notes:

- If you've seen this example before, it's from a session a few weeks ago on the reduce function and I know this seems like the same lesson but stick with me here. Map, like filter and reduce do not mutate the original array. Now technically the foreach function doesn't change the original array itself, but the way we wrote it did. Our goal when writing in the functional javascript style is to avoid writing functions that change the values of elements.

---

## Resources
<ul>
  <li>MDN: [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | [Eric Elliot](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)</li>

  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/four-semesters-of-computer-science-in-5-hours">Four Semesters of Computer Science in 5 Hours</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/functional-lite-javascript">Functional-Lite JavaScript</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-functional-programming-with-javascript/what-is-functional-programming">Learning Functional Programming</a></li>
    </ul>
  </li>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:

Here's some pages where you can get more information about working with these tools technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.
