var express = require('express');
var app = express();
var path = require('path');
var http = require('http'),
	fs = require('fs');


app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static( __dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/login.ejs');
});

app.post('/', function(request, response) {
  response.render('pages/login.ejs');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


