
<!-- .slide: data-state="title" -->

# Mastering Code
Debugging CSS

> > Author Notes:
- In our interview with John Riviello, we learned that one of the important skills developers need is their ability to debug their code. In this episode, we'll take a look at some of my favorite ways to debug css with the Chrome Developer Tools.

---

## Developer Tools

<ol>
  <li class="fragment">Navigating the DOM</li>
  <li class="fragment">Analyzing styles</li>
  <li class="fragment">Making changes</li>
</ol>

> > Author Notes:
Although we're using chrome, all browsers have their own set of developer tools, which are fairly comparable with what I'm going to go over, regardless of the tool you're using, it's critical to be comfortable with the developer tools you know. Developer tools are pretty deep, so I'm going to focus on just CSS in this episode and the following things.

1. First, I'm going to talk about navigating the DOM, or the structure of the page, so that you can target a specific element. In the Chrome Browser, you do that through the Elements tab.

2. Second, we'll take a look at the main two places to analyze what your stylesheet is doing. The Styles sub-tab as well as the computed sub-tab.

3. I'll show you how to make changes to your CSS, so that you can test out what would happen when you make some changes to your code.


The other way is to either use the command key shortcuts. That's Command+Option+I (Mac) or Control+Shift+I (Windows).

The best way though is by right clicking on any element on the page you want to target. That allows you to go directly to an existing element on the page.

There's a lot of contextual functionality available by right clicking, so make sure you try this in different places.

Once you get to the right place, you can move up and down the DOM tree in several ways. In the main elements panel shows you an outline of the HTML that you can click through to highlight different DOM nodes. You can use the arrows to the left to collapse nodes, so that you can see things a bit better.

At the bottom of the screen, there is a breadcrumb trail that lets you move up and down DOM elements. Everything works together, so when you move through the DOM, the code is highlighted and the page itself shows you a preview of where you've made a selection.

You can also click on the icon on the top left to select a page element. Once you have a DOM element selected and active in the elements pane, you can also use the arrow keys to go up and down the DOM.

The elements panel also allows you to do some simple editing of your HTML. You can double click on an element in order to edit. You can also right click and get a bunch of options to edit elements or an entire section as HTML, which is sometimes easier than to try to target and element.

Here's some Pro tips. You can click and drag DOM nodes to see how it would affect their functionality.

If you want to see how a node looks like when an event like a hover takes place, you can right click to the left of the DOM element to chose the state of that node.

Let's take a look at the key information on the right. The right side of the elements pane shows you how the CSS is applied to the element. It's in the order it is applied to the element. Towards the top will be the most specific changes and then as you move down, you'll see less specific changes.

To the right, you can see where these styles are being applied from including the line number of where it is in your CSS. You can click on that and it will switch you to the sources panel so you can see that line of code in your stylesheet.

You can of course edit these by clicking on them. You can also add styles at any point in the styles breakdown.

Sometimes you'll see a rule that says user agent stylesheet. That means that the browser itself is affecting this element with it's own defaults. If you see a strikethrough style on some of this text, it means that the style is being overridden by some other style. If you see grayed out styles, it means that these aren't defined in the stylesheets, but are computed at runtime.

One of the most common debugging tasks you'll have to do is to figure out the width of elements. At the bottom of the styles tab

You can see that there is a section where you can find out the width of the current element. This box is editable, so you can change the values in there.

There is another sub-tab called computed. The different with this tab is that it ignores the cascade, it just shows you the finished styles being applied to the element. You can open up the triangles to the left and see where those styles came from. You can also click on the triangle to see where in the stylesheet these are defined.


---
## Resources
<ul>
  <li>Tools: <a href="https://developers.google.com/web/tools/chrome-devtools/">Chrome</a> | <a href="https://developer.mozilla.org/en-US/docs/Tools">Firefox</a> | <a href="https://developer.apple.com/safari/tools/">Safari</a> | <a href="https://docs.microsoft.com/en-us/microsoft-edge/f12-devtools-guide">Edge</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-enhancing-the-dom/navigating-the-dom-with-developer-tools">JavaScript Enhancing the DOM</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/css-page-layouts/css-debugging-tools">CSS: Page Layouts</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/css-essential-training-2/debugging-css">CSS Essential Training</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:
- Here's some pages where you can get more information about working with the developer tools as well as some related courses with information on developer tools. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.
