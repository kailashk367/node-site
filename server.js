/* // import http 
var http = require('http');

//handling request and response.
function requestHandle(req, res) {
	res.end('Hello World from NODE JS!!!!');
}

// create the server

var server = http.createServer(requestHandle);

//start server and listen on port x
server.listen(8181, function(){
	console.log('server started at 8181');	
}); */


////////////EXPRESS/////////////////

var express = require('express');
var app = express();
var port = 8181;

app.listen(port, function(){
	console.log("App Started...");
});

app.get('/', function(req, res){
	res.send("hello World");
});

////////////end express///////