<!-- .slide: data-state="title" -->

# Mastering Code
Virtual DOM

> >Author Notes:

- One of the most significant developments in recent history has been the rise of the virtual DOM as a technology that can help speed up development. Let's take a look at what the virtual DOM is and how it can help you develop projects faster.

---

## Traditional DOM

- What is it for?
- Time consuming
- Costly

> > Author Notes:

- Before I get to talk about the virtual DOM, it's probably a good idea to talk about how the DOM works. The DOM is of course the Document Object Model, it's the conceptual structure that is generated when you create a website. You can preview that structure on any website by using a browser like Google Chrome and looking at the inspect option.

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

  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">Courses</a> | <a href="http://www.raybo.org">raybo.org</a></li>
</ul>

> > Author Notes:

Here's some pages where you can get more information about working with these tools technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like linkedin, twitter or github @planetoftheweb.