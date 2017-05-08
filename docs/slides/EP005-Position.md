
<!-- .slide: data-state="title" -->

# Mastering Code
CSS Position

>> Author Notes:
- One of the most important properties that page elements can have is the position property. It's useful for controlling how elements appear in relation to other elements on the page.

---

## Position Property

<ul>
  <li class="fragment">`static`, `relative`, `absolute`, `fixed`</li>
  <li class="fragment">Adjustable? (trbl)</li>
  <li class="fragment">Remove from flow?</li>
  <li class="fragment">Relative to what?</li>
</ul>

>> Author Notes:
The position property is particularly useful for creating things like tooltips or dropdown menus. The key thing to remember about the position property is that it helps you control how elements affect the flow of content within a page.

- There are four main position properties available...The default position is called static, and the other ones are relative, absolute and fixed. There's an experimental property called sticky that allows content to stick to the page as it is scrolled, but it barely has any browser support as of now, so we'll skip this one.

- One of the differences between these properties lets you control wether the position of the element is adjustable by using additional position properties for top right bottom or left.

- Another difference is wether the property removes the current element from the normal flow from the document. If it removed, the block containing the element will behave as it weren't there at all.

- Finally, the change in position happens in relation to different elements on the pager or with the normal position of the document. Let's review.


---

## Options

|                     |  static | relative | absolute | fixed |
|---|:---:|:---:|:---:|:---:|
| **Adjustable**<br>(top, right, bottom, left)	    | no      | yes      | yes      | yes   |
| **Flow**	          | normal | normal | removed | removed |
| **Relative to**     | n/a | current | parent/<br>document | document |

>> Author Notes:


---
## Resources
<ul>
  <li><a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/">Defining an IFFE</a></li>
  <li><a href="http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript">IFFE question in Stack Overflow</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-essential-training">JavaScript Essential Training</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-functions">JavaScript: Functions</a></li>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-for-web-designers-2">Javascript for Web Designers</a></li>

    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">blog</a></li>
</ul>


>> Author Notes:
- Here are some pages where you can get more information about the IFFE pattern and some courses you might want to consider taking. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.

```
  body { font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 1.5rem; line-height: 150%;; margin: 0; padding: 0; width: 80%; }

  .container {
    width: 80%; 
    margin: 0 auto; 
  }

  .btn {
    display: inline-block; 
    padding: 6px 12px; 
    font-size: 1rem; 
    line-height: 1.42857143; 
    text-align: center; 
    cursor: pointer; 
    background-image: none; 
    border: none; 
    border-radius: 4px; 
    color: #fff; 
    background-color: hsl(175, 49%, 42%);
    position: relative;
  }

  .tooltip {
    background: hsla(45, 82%, 64%, .9);
    color: black;
    z-index: 1;
    padding: 6px 12px; 
    border-radius: 10px 10px 10px 0;
    white-space: nowrap;
    display: none;
    position: absolute;
  }

  .btn:hover .tooltip {
    display: block;
    bottom: 38px;
    left: 10px;
  }
```

```
  <button class="btn btn-primary">static<span class="tooltip">Static Position</span></button>
  <button class="btn btn-primary">relative<span class="tooltip">Relative Position</span></button>
  <button class="btn btn-primary">absolute<span class="tooltip">Absolute Position</span></button>
  <button class="btn btn-primary">fixed<span class="tooltip">Fixed Position</span></button>
```