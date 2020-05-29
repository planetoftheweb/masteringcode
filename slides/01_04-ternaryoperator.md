<!-- .slide: data-state="title" -->

# Mastering Code
Conditional Operator

> > Author Notes:

The conditional operator is a different version of the regular conditional expression in JavaScript. It's something that you'll probably see in a lot of code and it might come up during some interview questions, so let's take a look.


---

## Conditional Operator

```
condition ? trueExpr : falseExpr

if (condition) {
  trueExpr;
} else {
  falseExpr;
}
```

- Ternary shortcut
- Chainnable
- Confusing

> > Author Notes:

Here's what it looks like and also the longer version using conditional expressions

- The conditional operator is the only javascript operator that takes three operands and that's why it's also known as the ternary operator. So, it's a shortcut for the conditional expression, which is the if then else expression that's commonly used in JavaScript.

- The conditional operator is chainnable, so you can use another ternary condition as one of the expressions that is true or false. 

- Unfortunately, that's one of the reasons you don't see me using the conditional operator often since it can get very confusing. It's the same reason while sometimes in my code, I avoid arrow functions, but a lot of people love it because it's concise. It can be an advantage when you use it in something like a return statement, or any time a single line looks cleaner by using this operator.

```
currColor === colorAmt-1 ? currColor = 0 : currColor++
```

---
## Resources
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">Conditional Operator on MDN</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-essential-training?trk=insiders_6787408_learning">JavaScript Essential Training</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-the-javascript-language?trk=insiders_6787408_learning">Learning the JavaScript Language</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:

Here's some pages where you can get more information about working with these tools technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.