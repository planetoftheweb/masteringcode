var data, DOMNode;
var request = new XMLHttpRequest();

DOMNode = document.querySelector('.artists');

request.open('GET', 'js/data.json');

request.onreadystatechange = function() {
  if(
    request.status === 200 &&
    request.readyState === 4
  ) {
    data = JSON.parse(request.responseText);

    for (var item in data.artists) {
      if (data.artists.hasOwnProperty(item)) {
        var element = data.artists[item];
        var listItem = document.createElement('div');
        listItem.className = 'artist';
        listItem.innerHTML = '<h4>' + element.name + '</h4>' +
          '<p>' + element.bio + '</p>';
        DOMNode.appendChild(listItem);
      }
    }

  }
}

request.send();