<!-- .slide: data-state="title" -->

# Mastering Code
Solving Hoisting

> >Author Notes:



---

## JavaScript Hoisting

- Declarations to top of scope
- Assignments left in place
- Costly

> > Author Notes:

- JavaScript hoisting is a feature of JavaScript that causes both variables and functions to move to the top of the scope before the code executes, so the code that you write doesn't always reflect the order in which the code is actually executed. That makes 

-

- Since the DOM is a representation that has to be converted into what the user sees, when we create a traditional application, a lot of time has to be spend updating the code that is displayed ot the user. That can slow down your applications, specially if we end up doing unecessary updates.

- If you have an application like this where you have a display of information that comes from data. Whenever the state of that application changes, you have to spend some time redrawing that data. We usually do that by redrawing the entire section that contains that data or the entire page. That can be a costly change in terms of performance.

---

## Virtual DOM

- DOM representation
- Diff DOM &amp; update
- Focus on model

> > Author Notes:

- The virtual DOM is a virtual representation of the DOM in memory, when something about your application changes, you make changes on this virtual DOM instead of in the real DOM.

- The framework can compare what is being displayed with the state of the data and only changes the real DOM when it is necessary.

- That means that we don't have to worry about adding and removing DOM elements when we modify our data, we only have to worry about the state of the data and the framework takes care of updating the DOM for us.

---

## Resources
<ul>
  <li>On the web: <a href="https://vuejs.org">Vue.js</a> | <a href="https://reactjs.org/">React</a></li>

  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/building-a-web-interface-with-react-js?trk=insiders_6787408_learning">Building a Web Interface with React.js</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/react-js-essential-training?trk=insiders_6787408_learning">React.js Essential Training</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/vue-js-building-an-interface?trk=insiders_6787408_learning">Vue.js Building an Interface</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-vue-js">Learning Vue.js</a></li>
    </ul>
  </li>

  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="http://www.raybo.org">raybo.org</a></li>
</ul>

> > Author Notes:

Here's some pages where you can get more information about working with these tools technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like linkedin, twitter or github @planetoftheweb.