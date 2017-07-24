
<!-- .slide: data-state="title" -->

# Mastering Code
Flexbox

>> Author Notes:
- Flexbox is one of the display properties and it brings makes single dimensional layout super easy. A good front-end developer should be familiar with this technology and comfortable with how it works, so let's takea look at how it's used to control horizontal alignment and then take a look at an example that you might be asked to build during a coding test.

---

## Flexbox Basics

<ul>
  <li class="fragment">Display property</li>
  <li class="fragment">Support issues</li>
  <li class="fragment">Parent properties</li>
  <li class="fragment">Children properties</li>
</ul>

>> Author Notes:
- Flexbox is one of the available CSS display properties. There are several display properties and this is just one of them. Flexbox is perfect for laying out simple dimensional content. There's a separate property called grid that is for more complex layouts, but it doesn't have great browser support.

- Although flexbox has good browser support, depending on what browsers you're targeting, the syntax can get a bit complex, so you should use something like postCSS to manage the conversion to the different versions of the syntax depending on which browsers you're supporting.

- Working with flexbox is pretty easy, you specify the display property to flex and then you can control how children elements will display within the parent element. Most of the time, you'll be adding additional properties in the parent to control how the children are displayed.

- There are some additional properties to control individual children within the parent container, so if you want a single children to behave differently than the rest of the elements, you can add additional properties on the children.

---

## Horizontal Alignment

<style>
  ul li.fragment {
    margin-bottom: 35px;
  }
</style>
<ul>
	<li class="fragment" style="line-height: 100%"><div><code style="padding: 6px 12px">display: flex;</code></div>
	</li>
	<li class="fragment" style="line-height: 100%"><div><code style="padding: 6px 12px">flex-direction: DIR;</code></div>
		<small style="line-height: 120%; vertical-align: text-bottom;">
      <b>DIR:</b> <code style="background:#5cb85c; color:white; padding: 5px 10px;">row</code>
			<code style="background:#D95357; color:white; padding: 5px 10px;">column</code>
			<code style="background:#D95357; color:white; padding: 5px 10px;">row-reverse</code>
			<code style="background:#D95357; color:white; padding: 5px 10px;">column-reverse</code>
		</small>
	</li>
	<li class="fragment" style="line-height: 100%"><div><code style="padding: 6px 12px">flex-wrap: WRP;</code></div>
		<small style="line-height: 120%; vertical-align: text-bottom;">
			<b>WRP:</b> <code style="background:#5cb85c; color:white; padding: 5px 10px;">nowrap</code>
			<code style="background:#D95357; color:white; padding: 5px 10px;">wrap</code>
			<code style="background:#D95357; color:white; padding: 5px 10px;">wrap-reverse</code>
		</small>
	</li>
	<li class="fragment" style="line-height: 100%"><div><code style="padding: 6px 12px">justify-content: JUS;</code></div>
		<small style="line-height: 120%; vertical-align: text-bottom;">
			<b>JUS:</b> <code style="background:#5cb85c; color:white; padding: 5px 10px;">flex-start</code>
			<code style="background:#D95357; color:white; padding: 5px 10px;">flex-end</code>
			<code style="background:#D95357; color:white; padding: 5px 10px;">center</code>
			<code style="background:#D95357; color:white; padding: 5px 10px;">space-between</code>
			<code style="background:#D95357; color:white; padding: 5px 10px;">space-around</code>
		</small>
	</li>
</ul>

>> Author Notes:
- The main rule you add on the parent is the display: flex rule; This sets up the main parent container and establishes some defaults. Flexbox is too complex to cover in a single question, so we'll focus on just the horizontal components in this episode.

- Once you establish the parent container as a flexbox component, you can specify how elements inside will flow. You can choose that the elements behave as rows, which is the default. That means that those elements will display side by side. This is sort of like floating elements. The other option is to stack children on top of one another in columns. There are also options to reverse the order of rows and columns so that they show up in reverse.

- Flex children will try to stay in a single line, but you can change that so that items will wrap or not and also reverse the order of the items.

- Finally, you can use the justify-content property to control how the elements are aligned within their main axis. The default is for them to be left aligned, but you can easily right align them with flex-end. Flexbox is also one of the easiest ways to center or space elements. Space between places the content on the edges and space-around which puts equal space between and at the edges.

---

## Resources
<ul>
  <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS Tricks Flexbox Guide</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox">MDN Flexbox Guide</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/css-flexbox-first-look">CSS Flexbox: First Look</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/advanced-responsive-layouts-with-css-flexbox/what-is-flexbox">Advanced Flexbox Layouts</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/next-generation-css-design-with-postcss-and-cssnext">Next Generation CSS Design</a></li>
    </ul>
  </li>
  <li style="list-style: none; font-size: 1.3rem;"><a href="https://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>


>> Author Notes:
- Flexbox is pretty complicated and full of options, but if you understand a basic layout like the one we've done here, it's pretty easy to pickup the rest. Here are some additional resources and courses you should check out. Also, if you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.

```
.nav .navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media all and (min-width: 600px) {
    flex-direction: row;
  }
} /* navbar */
```