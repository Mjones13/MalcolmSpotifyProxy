const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const newrelic = require('newrelic');
var compression = require('compression');

var server = express();
server.use(compression())
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, './'), { maxAge: '30 days' }));
server.use(cors());

// Albums & Player
server.get('/artists/albums/:artistID', (req, res) => {
  console.log(req.url);
  res.redirect('http://18.222.27.94' + req.url);
});

// Related Artists
server.get('/artist/:id/relatedArtists', (req, res) => {
  res.redirect('http://18.223.162.121' + req.url);
});

// Popular Songs
server.get('/artists/:id', (req, res) => {
  res.redirect('http://13.56.80.227:3003' + req.url);
});

// Header
server.get('/artists/header/:artistID', (req, res) => {
  res.redirect('http://54.67.58.69' + req.url);
});

server.listen(3998, console.log('Listening on:', 3998));