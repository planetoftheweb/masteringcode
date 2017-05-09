var tips = document.querySelectorAll('.hastip');

for (var i = 0; i < tips.length; ++i) {
  tips[i].addEventListener('click', function(e) {
    e.target.querySelector('.tooltip').classList.toggle('active');
  }, false);
}