var express = require('express');
var app = express();

var data = require('./data.json');

app.get('/', function(req, res) {
  res.send(`
      <h1>Welcome</h1>
      <p>Roux Academy Meetups put together artists from all walks of life.</p>
  `);
});

app.get('/speakers', function(req, res) {
  var info = '';
  data.speakers.forEach(function(item) {
    info += `
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
    `;
  });
  res.send(`
      <h1>Roux Academy Meetups</h1>
      ${info}
  `);
});

var server = app.listen(3000);
