var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hi there, welcome to my assignment');
});

app.get('/speak/:animalName', function(req, res) {
  var animalName = req.params.animalName;
  var animalNoise;

  if (animalName === 'pig') {
    animalNoise = 'Oink';
  } else if (animalName === 'cow') {
    animalNoise = 'Moo'; 
  } else if (animalName === 'dog') {
    animalNoise = 'Woof Woof';
  } else {
    res.send('Sorry, page not found...what are you doing with your life?');
  }

  console.log(req.params);
  res.send('The ' + animalName + ' says \'' + animalNoise + '\'');
});

app.get('/repeat/:word/:number', function(req, res) {
  var word = req.params.word;
  var number = parseInt(req.params.number);
  var wordArr = [];

  for(var i = 0; i < number; i++) {
    wordArr.push(word + ' ');
  }
  res.send(wordArr.join(' '));
});

app.get('*', function(req, res) {
  res.send('Sorry, page not found...what are you doing with your life?')
})

app.listen(3000, function() {
  console.log('Server has started...');
});