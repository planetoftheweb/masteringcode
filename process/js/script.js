var artists, calendar;

function loadData(url) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
      if (req.status == 200) {
        console.log('getting ' + url);
        resolve(JSON.parse(req.response))
      } else {
        reject(Error('Problem loading data'))
      }
    } // onload callback
    req.send();
  });
}

calendar = loadData('js/data_schedule.json');
artists = loadData('js/data_artists.json');

document.querySelector('.load-info')
  .addEventListener('click', function () {
    calendar.then(function (data) {
      console.log(data);
      return artists;
    }, function (error) {
      console.log('Problem', error);
    }).then(function (otherData) {
      console.log(otherData);
    });
  });