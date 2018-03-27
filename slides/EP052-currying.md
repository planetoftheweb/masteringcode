<!-- .slide: data-state="title" -->

# Mastering Code
Pseudo Classes vs Elements

> >Author Notes:
This question is a bit tricky because it's about a subtle difference. Although you've probably used both pseudo classes and elements, you probably haven't thought much about how they differ, so let's dig in.

---

## Pseudo Classes

- Select an element
- State or Property
- Single colon `:`

```
:hover, :focus, :first-child, :nth-child, :not
```<!-- .element: class="fragment" -->

> > Author Notes:
“Curry
Functions are values, and we can manipulate function values in interesting ways. Currying allows us to produce a new function by combining a function and an argument:
var add1 = add.curry(1);
document.writeln(add1(6));    // 7
add1 is a function that was created by passing 1 to add 's curry method. The add1 function adds 1 to its argument. JavaScript does not have a curry method, but we can fix that by augmenting Function.prototype:
Function.method('curry', function (  ) {
    var args = arguments, that = this;
    return function (  ) {
        return that.apply(null, args.concat(arguments));
    };
});    // Something isn't right...
The curry method works by creating a closure that holds that original function and the arguments to curry. It returns a function that, when invoked, returns the result of calling that original function, passing it all of the arguments from the invocation of curry and the current invocation. It uses the Array concat method to concatenate the two arrays of arguments together.
Unfortunately, as we saw earlier, the arguments array is not an array, so it does not have the concat method. To work around that, we will apply the array slice method on both of the arguments arrays. This produces arrays that behave correctly with the[…]”

---
## Resources
<ul>
  <li>MDN: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements">Elements</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">Classes</a> | <a href="https://css-tricks.com/pseudo-class-selectors/">Classes on CSS-Tricks</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/css-shorts-weekly">CSS Shorts Weekly</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/css-essential-training">CSS Essential Training</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/motion-design-with-css/introduction">Motion Design with CSS</a></li>
    </ul>
  </li>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:

Here's some pages where you can get more information about working with these tools technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.
