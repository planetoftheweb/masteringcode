var data, result;
var request = new XMLHttpRequest();

request.open('GET', 'js/data.json');

request.onreadystatechange = function () {
  if (request.status === 200 && request.readyState === 4) {
    data = JSON.parse(request.responseText);

    result = new EJS({url: 'js/template.ejs'}).render(data.artists);
    document.querySelector('.artists').innerHTML = result;

  }
};

request.send();