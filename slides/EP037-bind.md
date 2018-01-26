<!-- .slide: data-state="title" -->

# Mastering Code
JavaScript Binding

> >Author Notes:
This week, we'll look at one of those gotcha pieces of code you might get in an interview, since it tests your understanding of two important concepts in JavaScript, the this keyword and data binding.

---

## Conditional Operator


- What is `this`?
- Meaning depends on context
- Can be redefined using `bind()`

> > Author Notes:

There is a special keyword in JavaScript called `this` that is really important and powerful in JavaScript. It's also really hard to talk about for obvious reasons.

The this keyword has different meanings depending on it's context...or where it is in your code, and therefore can often lead to unexpected results, so it's pretty important that you learn how to use it.

- There are instances where we want to redefine the meaning of the `this` keyword and we can do that with the bind method. Bind allows you to execute some code while at the same time redefining the meaning of the `this` keyword. Let's take a look at an example in JSBin, an online code editor.

http://jsbin.com/sunoxuv/1/edit?js,console

https://github.com/planetoftheweb/vueinterface/blob/master/process/App.vue

```
var myModule = {
  name: 'Ray',
  getName: function() {
    return console.log(this.name);
  }
};

myModule.getName();

var someName = myModule.getName.bind({name:'Bob'});
someName();
```

---
## Resources
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">bind() on MDN</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-functions/creating-and-namespacing-modules?trk=insiders_6787408_learning">JavaScript Essential Training</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-functions/creating-and-namespacing-modules?u=2270706">JavaScript: Functions</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/es6-the-right-parts?u=2270706?trk=insiders_6787408_learning">ES6: The Right Parts</a></li>     
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-functional-programming-with-javascript/filtering?trk=insiders_6787408_learning">ES6: The Right Parts</a></li>     
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:

Here's some pages where you can get more information about working with these tools technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.