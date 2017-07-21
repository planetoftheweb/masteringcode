var highlight = document.querySelectorAll('[data-highlight-click]');

highlight.forEach(function(item) {
  item.addEventListener('click', function() {
    item.style.backgroundColor = 'blue';
  }, false);
}, this);