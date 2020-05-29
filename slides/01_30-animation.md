<!-- .slide: data-state="title" -->

# Mastering Code
Animation

> >Author Notes:
Animation in CSS is pretty simple, it involves creating a keyframe based sequence of changes and then applying it to a CSS rule. Let's take a look.

---

## Defining a sequence

```css
@keyframes animSeq {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
```

- [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

> > Author Notes:

- Unlike most CSS rules, animation takes place in two parts. First is the definition of the structure of the animation. To do that, we use the @keyframes at Rule. This is similar to and related to media queries. 

Just like with media queries notice how there's two sets of curly braces. One for the rule and one for each of the locations where we want the animation to change. At each point in the animation change. You can define different properties that get modified.

If it is a sequence with just a start and and end, you can use the keywords from and to, otherwise you can use a percentage.
---

## Applying properties

- `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, `animation-play-state`
- [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) combo


> > Author Notes:

- Like with many other properties, you have a lot of options that control how your animations are played. The key one is the animation name. that will refer to our at rule that defines the sequence, you can then specify these other things like the duration, timing functions, delays, how many times it plays, etc.

- There's also a shorter combo where you can specify all of the options at once. 

Let's take a look at an example of [how this works](https://codepen.io/planetoftheweb/pen/WzzYNe).

---
## Resources
<ul>
  <li>MDN: [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes), [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
  </li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/motion-design-with-css?trk=insiders_6787408_learning">Motion Design with CSS</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/css-animation?trk=insiders_6787408_learning">CSS: Animation</a></li>
    </ul>
  </li>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:

Here's some pages where you can get more information about working with these tools technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.
