<!-- .slide: data-state="title" -->

# Mastering Code
Filtering

> > Author Notes:

This question about searching through a series of elements can be accomplished in several ways, but in the last few episodes, I've been showing you how you can work with higher order functions to perform actions on items without modifying arrays. Let's take a look at one of those functions called filter to see how we can take care of this common task.

---

## Sample Data

```
var aptData = [
  {
    "petName": "Pepe",
    "ownerName": "Reggie Tupp",
    "aptNotes": "It's time for this rabbit's post spaying surgery checkup",
  },
  {
    "petName": "Rio",
    "ownerName": "Philip Ransu",
    "aptNotes": "Rio is up for his next round of vaccinations",
  }
];
```

> > Author Notes:

- This technique is called exclusion, because we're removing elements that we want to filter out of a list. Let's say we wanted to search through some existing data. We have an array of objects here that we want to filter through. Let's take a look at how we can take care of this with the classic for loop.



---

## Traditional Scripting

```
var searchFor = "rabbit";
var resultArr = [];

for ( var i = 0; i < myArr.length; i++ ) {
  var item = myArr[i].aptNotes.match(searchFor);
  if (item) {
    resultArr.push(myArr[i]);
  };
}

console.log(resultArr);
```

> > Author Notes:

I'm creating a variable with the keyword I want to search for and then looping through all of the elements in the array. Then I'm using the push method to push the correct ones to a new array.

Let's see how we might do this using the filter method.

---

## Filter

```
var searchText = "for";
var dataFilter = item => 
  item.aptNotes.toLowerCase()
  .match(searchText.toLowerCase());

var displayData = aptData.filter(dataFilter);
 
console.dir(displayData);
```

> > Author Notes:

- Here's the functional method of achieving this, the filter function is designed to do the same thing we were trying to do with our for loop, with a few advantages. First, filter does not modify the original array, which means that we have to create a new array to hold the results here, but it also means that it is easier to compose.

I'll argue that the first way we looked at solving this problem is a valid way of solving the problem, but the second way illustrates that you understand the concepts of funtional programing and the importance of not modifying data. That second concept is called immutability and it can help you develop code that is easier to test.

---
## Resources
<ul>
  <li>MDN: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">Filter</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match">Match</a></li>
    <ul>
  <li style="list-style: none;">
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/four-semesters-of-computer-science-in-5-hours?trk=insiders_6787408_learning">Four Semesters of Computer Science in 5 Hours</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/functional-lite-javascript?trk=insiders_6787408_learning">Functional-Lite JavaScript</a></li>
  </li>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos?trk=insiders_6787408_learning">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:

Here's some pages where you can get more information about working with these tools technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.
