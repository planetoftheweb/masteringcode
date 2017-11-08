<!-- .slide: data-state="title" -->

# Mastering Code
Data attribute

> >Author Notes:

- The data attribute is a powerful way of adding meaning to your HTML tags without disrupting the structure of your HTML. You may have seen it before, but do you really know how to use it? Let's check it out.

---

## Data Attribute

<ul>
  <li class="fragment">`data-WHATEVER`</li>
  <li class="fragment">Accessible in CSS with `[]`</li>
  <li class="fragment">JS using `dataset`</li>
</ul>

> >Author Notes:

1. The data attribute works just like any other attribute, but you prefix your custom name with the keyword data and a dash. You can add additional dashes if you want to if you need a more complex data attribute.

1. The attribute is accessible through CSS using brackets, and that lets you create some really powerful slectors...although some older browsers might have problems with this.

1. The value in these data attributes can also be accessed through javascript using a special parameter called dataset and then the name of the attribute. If you're using more than one dash in the name, then you camel case the name just like you would with CSS names.

---

## Resources
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset">The dataset Element MDN</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">Using Data Attributes</a></li>
  <li><a href="https://www.sitepoint.com/use-html5-data-attributes/">How to Use HTML5 Data Attributes</a></li>
  <li style="list-style: none;">
    <ul>
      <li style="margin-bottom: 10px"><a href="https://www.linkedin.com/learning/javascript-enhancing-the-dom/detecting-data-attributes">Detecting data attributes</a></li>
    </ul>
  <li style="list-style: none; font-size: 1.3rem;"><a href="hhttps://www.linkedin.com/in/planetoftheweb">linkedin.com/in/planetoftheweb</a> | <a href="https://www.twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="https://raybo.org">raybo.org</a></li>
</ul>

>> Author Notes:
- Here's some pages where you can get more information about working with this technology as well as some related courses with information on developer tools. If you have some ideas for this weekly series, maybe you want to share with me some questions you've been asked or have asked in interviews connect with me in LinkedIn or just about any social media network like twitter or github @planetoftheweb.


```index.html
  <button class="btn tooltip" data-tooltip="Eenie">One</button>
  <button class="btn tooltip" data-tooltip="Meenie" data-position="right">Two</button>
  <button class="btn tooltip" data-tooltip="Minie" data-position="bottom" data-highlight-click="on">Three</button>
  <button class="btn tooltip" data-tooltip="Moe" data-position="left"  data-highlight-click="on">Four</button>
```

```style.css
.tooltip::before {
  color: black;
  z-index: 1;
  padding: 6px 12px;
  border-radius: 10px;
  position: absolute;
  background: hsla(45, 82%, 64%, .9);
  content: attr(data-tooltip);
  top: -100%;
  left: 0;
  display: none;
}

.tooltip:hover::before {
  display: block;
}

.tooltip[data-position='right']::before {
  top: 0;
  left: 100%;
}

.tooltip[data-position='bottom']::before {
  top: 100%;
  left: 0;
}

.tooltip[data-position='left']::before {
  top: 0;
  left: -100%;
}
```

```script.js
var highlight = document.querySelectorAll('.tooltip');

highlight.forEach(function(item) {
  item.addEventListener('click', function() {
    if (item.dataset.highlightClick === 'on') {
      item.style.backgroundColor = 'red';
    }
  }, false);
}, this);```

```script.js
var highlight = document.querySelectorAll('[data-highlight-click]');

highlight.forEach(function(item) {
  item.addEventListener('click', function() {
      item.style.backgroundColor = 'red';
  }, false);
}, this);
```
