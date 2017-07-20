var express = require('express');
var app = express();

var data = require('./data.json');

app.get('/', function(req, res) {
  res.send('<h1>Welcome</h1>');
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
    <h2>Artist List</h2>
    ${info}
  `);
});

var server = app.listen(3000);