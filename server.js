var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var request = require('request');

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.get('/', function (request,response) {
  // response.send('hola');
  response.render('index');
});

app.listen(port, function () {
  console.log('Node listening at port ' + port + '.');
});
