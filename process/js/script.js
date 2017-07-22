var boxes = document.querySelector('.boxes');
var special = document.querySelector('#special');

boxes.addEventListener('click', function(e) {
  console.log('other');
  if(e.target.className==='box') {
    e.target.parentNode.removeChild(e.target);
  }
}, false);

special.addEventListener('click', function(e) {
  console.log(e);
  e.target.style='background-color: #6D73C2;';
  e.stopPropagation();
}, false);
