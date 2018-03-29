<!-- .slide: data-state="title" -->

# Mastering Code
Map

> >Author Notes:
Moving through lists of elements is a fundamental task in just about any programming job. JavaScript provides a lot of methods for doing it and one of the lesser used, yet popular functions is called map. Let's take a look at how it works and highlight some of what makes it unique.

---

## Map

var newArray = currArray.map(function(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])


- `for()`, `forEach()`, `map()`
- Immutability
- Higher order

> > Author Notes:

- There's a few ways to go through a list and the oldest and the one that's most familiar to people is the for statement. Next in the order of popularity is the forEach statement. It always seems like a good idea to use that one because it's name is pretty expressive...right? foreach one of these things do the following. The last option is what we're talking about here though, the map statement.

- The main advantage of map over the other methods is that it is designed so that it avoids tranforming the original array, whereas forEach is often used for instances where you need to transform arrays.

- Because of this, map is considered a higher order function, and can be used in more creative ways. Let's take a look at an example

---

## forEach

```
var myArr = [5, 6, 7];
myArr.forEach(function(item, index) {
  myArr[index] = item + 1;
});
console.log(myArr);
// [6, 7, 8]
```

> > Author Notes:

- This is a pretty common example of forEach, you can see that we can either do something to a series of elements and we often use this to go through some data elements.

At the end of the statement, the value of myArray will have changed. Let's take a look at how the map function would take care of something like this.

---

## Map

```
var myArr = [5, 6, 7];

var newArr = myArr.map(function(item) {
  return item + 1;
});

console.log(newArr);

// [6, 7, 8]
```

> > Author Notes:

Here's a similar way we could take care of this using map. Notice map returns a new array with the modified values, the original array remains untouched.

This doesn't seem too exciting and that's because this isn't necessarily the best use of Map. If all you need is to go through a sequence of data, going through the trouble of creating a new array seems like extra work, but the fact that map returns a function means that we could write this in a different way.

---

## Map

```
var myArray = [5, 6, 7];

function inc(item) {
  return item +1;
}

var modArr = myArray.map(inc);
console.log(modArr);// [6, 7, 8]

// [6, 7, 8]
```

> > Author Notes:

This is more interesting because by making the callback into it's own function, I think what map is good for becomes a bit clearer. It's easier to take some data and run it through a series of transformations without changing the original data. Now, because Map returns a new array, it means that we can actually chain transformations together.

---

## Map

```
var myArray = [5, 6, 7];

function inc(item) {
  return item +1;
}

function square(item) {
  return item * item;
}

var modArr = myArray.map(inc).map(square);

console.log(modArr);
// [36, 49, 64]
```

> > Author Notes:

As you can see here, we can feed the results of a map operation into another map operation and easily work through a series of transformations. This makes map way more powerful than forEach. At the very least it makes it more fun to use.



---
## Resources
<ul>
  <li>MDN: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Map</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/four-semesters-of-computer-science-in-5-hours">4 Semesters of Computer Science</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/functional-lite-javascript">Functional-Lite JavaScript</a></li>
    </ul>
  </li>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:

Here's some pages where you can get more information about working with these tools technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.
