<!-- .slide: data-state="title" -->

# Mastering Code
Pseudo Classes vs Elements

> > Author Notes:

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

- A pseudo-class is way of selecting an existing HTML element...that's really important because that's main difference between classes an elements

- It selects that element based on either a state or a property of the element.

- Pseudo classes are related to to an existing element using a single colon character.

- Some common pseudo elements are :hover which let's you modify an element when you hover over it. Or :focus, where you can do something when for example an input field is activated. You'll also notice I've listed here :first-child and nth-child...two ways you can choose an element in a group based on their position.

---

## Pseudo Elements


- Virtual elements
- One or two colons?

```
::before, ::after, ::first-letter
```<!-- .element: class="fragment" -->

> > Author Notes:

- The main difference between a pseudo class and a pseudo element is that pseudo elements don't actually select an element, but create a sort of virtual element that didn't exist before. You can target that virtual element and then you can style it appropriately.

- CSS3 rolled out the use to two colons instead of one colons to differentiate pseudo elements from pseudo classes, but because older browsers do not support the double colons, it's ok most of the time to use a single colon instead.

- You can see some of the common pseudo elements here. They are a lot more scarce than pseudo classes. One good way to figure these out is to compare the difference between :first child and ::first-letter. They may seem like they're very similar, but first-child selects the first element that is a child of an element. So the target of the style is an actual element, where ::first letter lets you pick an non-existing position inside an element...the first letter of some element.

Let's take a look at an example:

```
footer a:hover {
  color: #EEC856;
}

footer a:not(.special) {
  color: #8AC8E1;
}

footer p::first-letter {
  color: #EEC856;
  font-size: 150%;
}
```

https://codepen.io/planetoftheweb/pen/JMgxOd

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
