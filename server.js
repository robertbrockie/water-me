var express = require('express');
var path = require('path');

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(port, '0.0.0.0', function() {
	console.log('Listening on port %d', server.address().port);
});