var artists;

function loadData(url) {

  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status == 200) {
        artists = JSON.parse(req.response);
        console.log(artists);
      }
    } // onload callback
    req.send();
  });
}

loadData('js/data_artists.json');
console.log(artists);