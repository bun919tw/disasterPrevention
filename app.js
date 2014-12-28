var express = require('express');
var path = require('path');
var http = require('http');
var portNum = process.env.PORT || 3000;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var favicon = require('static-favicon');
var index = require('./routes/index')


var app = express();

// app.set('port', portNum);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", index.load);


app.listen(portNum, function() {
  console.log("Listening on " + portNum);
});