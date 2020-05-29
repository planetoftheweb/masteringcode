
<!-- .slide: data-state="title" -->

# Mastering Code
Constructor

> > Author Notes:
- There's are a lot of patterns that developers commonly use in JavaScript and one of the most common is the constructor pattern. It lets you use the power of JavaScript objects to create powerful instances and it's fundamental to other patterns.

---

## How Constructors Work

<ul>
  <li class="fragment">Using objects</li>
  <li class="fragment">Objects and closures</li>
  <li class="fragment">Function methods</li>
</ul>

> > Author Notes:
- One of the things that makes javascript really special is that just about everything is an object...a data type that is extremely flexible because it can hold any other type of data including other objects.

- An object uses the power of closures to build reusable elements that remember the environment they were created in. If you need a review of closures, make sure you take a look at Episode 02.

- Working with flexbox is pretty easy, you specify the display property to flex and then you can control how children elements will display within the parent element. Most of the time, you'll be adding additional properties in the parent to control how the children are displayed.

- Creating a constructor is pretty easy and they look just like functions that have other functions, but because they are part of an instance of an object, these objects can perform actions and are called methods. Constructors are pretty cool, but it's definitely something that you'll need to experience to understand, so let's take a look at an example.

---
## Resources
<ul>
  <li><a href="https://css-tricks.com/understanding-javascript-constructors/">Constructors on CSS Tricks</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-essential-training?u=104">JavaScript Essential Training</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-functions?u=104">JavaScript: Functions</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-and-json?u=104">JavaScript and JSON</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>

> > Author Notes:

- Here's some pages where you can get more information about the constructor pattern and some related courses you might want to consider taking. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.

```
function Hamburger(nodeName) {
	var myNode = document.querySelector(nodeName + ' .hamburger');
	return {
		activate: function() {
				myNode.addEventListener('click', function(e) {
				myNode.parentNode.querySelector('.navbar').classList.toggle('hidden');
			}, false);
		},
		hide: function() {
			myNode.parentNode.querySelector('.navbar').classList.add('hidden');
		}
	} //return
} // Hamburger

var topMenu = new Hamburger('#topMenu');
topMenu.activate();

var bottomMenu = new Hamburger('#bottomMenu');
bottomMenu.activate();
bottomMenu.hide();

```
