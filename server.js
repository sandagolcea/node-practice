var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var request = require('request');
var mongoUri = 'mongodb://mm_recruitment_user_readonly:rebelMutualWhistle@ds037551.mongolab.com:37551/mm-recruitment'
var mongodb =  require('mongodb');

var mongoClient = mongodb.MongoClient;

var collection;

mongoClient.connect(mongoUri, function (err, db) {
  if (err) {
    throw err;
  } else {
    collection = db.collection('company');
    // console.log(collection.find());
  }
});

var findCompanyName = function(code, callBack){
  collection.find({ tickerCode: code }).toArray(function(err, results) {
    if (results.length === 0) {
      console.log('my error');
      callBack("company not found");
    } else {
      callBack(results[0].name);
    }
  });
};

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.get('/:ticker', function (request, response) {
  var myTicker = request.params.ticker.toUpperCase();
  console.log('my params '+myTicker);
  findCompanyName(myTicker, function onCompanyNameFound (companyName){
    console.log("Co name is : "+companyName);
    // if(!companyName) {
      // response.render('index', { tickerCode: 'ticker code not found', name: 'company not found' });
    // } else {
      response.render('index', { tickerCode: request.params.ticker, name: companyName });
    // }
  });
});

app.listen(port, function () {
  console.log('Node listening at port ' + port + '.');
});
