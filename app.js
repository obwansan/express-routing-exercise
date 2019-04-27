var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hi there, welcome to my assignment');
});

app.get('/speak/:animal', function(req, res) {
  var noises = {
    pig: 'Oink!',
    cow: 'Moo!',
    sheep: 'Baaa',
    dog: 'Woof!'
  }
  var animal = req.params.animal.toLowerCase();
  var noise = noises[animal];

  console.log(req.params);
  res.send('The ' + animal + ' says \'' + noise + '\'');
});

app.get('/repeat/:word/:times', function(req, res) {
  var word = req.params.word;
  var times = parseInt(req.params.times);
  var result = "";

  for(var i = 0; i < times; i++) {
    result += word + " ";
  }
  res.send(result);
});

app.get('*', function(req, res) {
  res.send('Sorry, page not found...what are you doing with your life?')
})

app.listen(3000, function() {
  console.log('Server has started...');
});