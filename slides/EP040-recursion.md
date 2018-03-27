<!-- .slide: data-state="title" -->

# Mastering Code
Recursion

> >Author Notes:
Recursion is a development technique that is popular among developers, so it can be a common question during interviews. Let's take a look at what it is an more importantly when it is useful.

---

## Recursion

```
function myself() {
  myself();
}
```

- Function calls itself

> > Author Notes:

Recursion sounds a lot fancier and more complicated than it is to put it simply, it happens anytime a function calls itself. You might be thinking that it sounds dangerous and weird and it does. Isn't it dangerous to have a function call itself? Wouldn't it then go on forever.


---


## Recursion
```
function countUp(num, max) {
  if (num > max) return;
  console.log(num);
  countUp(num+1, max);
}
countUp(1,5);
```

- Needs [base case](http://planetoftheweb.jsbin.com/zutamunaco/edit?js,console)

> > Author Notes:

Every recursive function needs something called a base case, a statement that exits the function when a condition is met. Otherwise, the function will continue to call a copy of itself forever.

What's maybe not apparent from this example is that the copies will have a new set of internal variables called a stack. Without a base case, javascript will continue to ask for new variables until it either it runs out of memory or the browser runs into an internal limit...at the very least it will lock your browser while this is going on, which is never a good experience.

Looking at this example, you might be asking yourself, why wouldn't you just use a loop to count up to five here. Let's take a look at another example.


## Recursion

```
var fibby = function(count)  {
  if (count===1) return [0, 1];
  var arr = fibby(count - 1);  
  var sum = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(sum);
  return arr;
};
fibby(8);
```

- Used [instead of loops](http://planetoftheweb.jsbin.com/quzazam/edit?js,console)

> > Author Notes:
This is a more typical interview question for recursion. I'm trying to calculate something called fibbonacci numbers. That's a series of numbers where each number is the result of the addition of the previous two numbers. It's a pattern that appears commonly in the natural world.

We're using recursion to calculate the sum of a series of numbers. When we call fibby here, it's going to start a sequence of calls to new functions until it reaches the base case and it calls fibby with a value of 1. At the end of this, we're going to get an array of the fibbonacci sequence.

Let's look at this example with some console.log statements to make a bit more sense of it. You can see all of the functions calls appear here and fibby 1 is going to return an array with two numbers 0 and 1. We need to start with that because we need two numbers to start adding together.

Fibby will add those numbers together and store them in a temporary variable called sum. Then it's going to push that number into the end of an array called arr, it's then going to return that array to the previous call and keep on doing that until it exhausts all of the function calls. Notice that the pushes don't start until it reaches the base case and the first two numbers are pushed.

Some people love this type of pattern because it's more elegant. Some people tend to dislike it because it can be harder to follow. I think that recursion is useful when you have a formula where calculations are dependent on previous results like this fibbonacci sequence. If recursion freaks you out, it might help to visualize it in terms of loops.


---
## Resources
<ul>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/programming-foundations-discrete-mathematics/recursion">Programming Foundations: Recursion</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/four-semesters-of-computer-science-in-5-hours/recursion">4 Semesters of CS: Recursion</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/functional-lite-javascript/recursion">Functional-Lite JS: Recursion</a></li>
    </ul>
  </li>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:

Here's some pages where you can get more information about working with these tools technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.
