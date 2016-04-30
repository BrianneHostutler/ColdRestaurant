var express = require('express');
var bodyParser = require('body-parser');


app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '../public/home.html'));
})


