var getArtists = new Request('js/data_artists.json', {
  method: 'GET'
});


var artists = fetch(getArtists).then(function(response) {
  return response.json();
});

document.querySelector('.load-info')
  .addEventListener('click', function() {
    artists.then(function(data) {
      console.log(data);
    });
  });
