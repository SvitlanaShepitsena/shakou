'use strict'


var express = require('express');
var compression = require('compression')
var app = express();


app.use(compression());

app.use(express.static(__dirname + '/dev/local-workspace/build/svitlana~shakou'));

app.listen(1618, function () {
	console.log('listening at 1618');
});