<!-- .slide: data-state="title" -->

# Mastering Code
Tooling

> >Author Notes:

- One of the most important skills you should have is learning how to set up and work with different environments. This week, I'm going to talk about the tooling environments you should know, what makes them special and why you should learn them.

---

## JavaScript Tooling

- What is it for?
- Customizable
- Grunt, Gulp, WebPack
- NPM &amp; CLIs

> > Author Notes:

- So, what do you actually use tooling for? Tooling gives you a way to automate common development tasks like minifying code, testing and running local servers to preview your work while you code.

- Tooling is something that's highly customized depending on your environment. Different people use different tooling software and teams of developers will often have their own preferred setups. You'll even find the same teams using different setups depending on the type of project they're working on.

- Having said that the major tooling platforms that you can use are Grunt, Gulp, NPM and WebPack. Yes, there are some slight variations and other smaller libraries but these are not just the most popular, but probably the ones you need to have some experience with to be marketable. 

- In addition, another option might be to use the scripting capability of NPM, the node package manager that comes when you install Node.js. All of these workflows are based on Nodejs, so some people just write their own tools on top of nodejs to manage their projects. These tools are often known as CLIs or Command Line Interfaces. As a matter of fact, Grunt, Gulp and Webpack are CLIs built on top of Node.js. Some people write their own script or use a combination of some of these tools to take care of managing projects.

- Let's take a look and discuss these options:

---

## GruntJS

- Task runner
- Configuration file
- Collection of plugins

> > Author Notes:

- The grandfather of all of these workflow tools is GruntJS. It's a CLI or command line tool for running tasks. A task is simply something you want to do to your code, so minimizing or testing your code is considered a task.

- To get this to work, you create a configuration file, which uses JSON to configure your automation. Using this JSON file you [define these tasks](https://github.com/planetoftheweb/gruntworkflows/blob/master/gruntfile.js). You can create tasks to do things like process Sass, minimize your HTML, and run a live server for use during development.

- GruntJS is the oldest of all of the tooling options. I would say that you need to know what it is and the basics of how it operates. You'll probably run into some projects using GruntJS, but it's not something that is absolutely necessary for you to have a lot of experience with.

---

## GulpJS

- Tasks are JS Functions
- More isolated runners
- Streaming
- Collection of plugins

> > Author Notes:

- Gulp was released a little over a year after Grunt, so it's pretty similar. Instead of using JSON to configure things, you use regular JavaScript. That means that it's more flexible than Grunt because you have more control over what it does. Here's what a configuration file for grunt [looks like](https://github.com/planetoftheweb/sassEssentials/blob/master/gulpfile.js)

- Another differences is that Gulp plugins focus on running single tasks, whereas Grunt runners will sometimes perform multiple tasks. Because of this, gulp can be faster and also more consistent because their plugins have simpler and very similar setups.

- The other main difference is that it uses the concept of streams, whereas Grunt's execution is more sequential. Gulp isolates the running of each task separately and handles them in memory. It can run tasks simultaneously.

- You'll find Gulp pretty easy to learn and work with if you know Javascript, which is a big advantage compared to our next tool.

---

## WebPack

- Modular focus
- Individual processing
- Advanced features
- Complex &amp; powerful

> > Author Notes:
- WebPack has become really popular in the last couple of years and that's largely because of the rise of modules in web development. Currently the most popular and modern JavaScript frameworks Angular 2, React and Vue.js are designed around the concept of defining small bits of self contained code called modules. Webpack was designed with modules instead of tasks in mind.

- Case in point one of the killer feature of WebPack is it's ability to process a change in a module without have to process the rest of the modules. So whereas a task runner like Gulp or Grunt think of a project as a series of tasks Webpack can look at is a series of small modules that it can update independently. That makes is super fast and perfect for modern libraries

- In addition to that, it can perform other advanced features like tree-shaking which allows you to remove parts of libraries your application is not using. It's modular focus and advanced features makes it a very popular library especially when it comes to new projects.

- Because of how it's designed and what it does, Webpack can be a lot more complicated to set up and understand. If you take a look at this sample webpack [configuration file](https://github.com/planetoftheweb/vueinterface/blob/master/webpack.config.js), you can see that it uses a series of loaders and plugins to manage how it does things. It runs a live server for you, but you don't really set that up and WebPack for the most part makes some assumptions of how that works.

- Clearly this is the most complicated of the task runners, but also the most powerful, so you'll need to learn it or at least undertand how to customize it.




---

## Resources
<ul>
  <li>On the web: <a href="https://gruntjs.com/">Grunt</a> | <a href="https://gulpjs.com/">Gulp</a> | <a href="https://webpack.js.org/">Webpack</a></li>

  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/gulp-js-git-and-browserify-web-project-workflows?trk=insiders_6787408_learning">Gulp.js, Git, and Browserify: Web Project Workflows</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/grunt-js-web-workflows?trk=insiders_6787408_learning">Grunt.js Web Workflows</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/learning-webpack-3?trk=insiders_6787408_learning">Learning Webpack 3</a></li>
    </ul>
  </li>

  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">Courses</a> | <a href="http://www.raybo.org">raybo.org</a></li>
</ul>

> > Author Notes:

Here's some pages where you can get more information about working with these tools technology as well as some related courses. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like linkedin, twitter or github @planetoftheweb.