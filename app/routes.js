
// require express.
var express = require('express');

//for access files we need to provide path'
var path = require('path');

//Create a router boject.
var router = express.Router();

//export router to server.js
module.exports = router;

// set router 
router.get('/', function(req, res) {
	//res.send(path);
	//console.log(path);
	res.sendFile(path.join(__dirname, '../index.html')); // 2 dots becuse we are in app directory
	
});

router.get('/about', function(req, res){
	res.send("This is about us page!!");
});

router.get('/contact');
router.post('/contact');