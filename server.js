var express = require('express');
var path = require('path');
var twilio = require('twilio');

require('dotenv').config()

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/send_message', function(req, res) {
    var client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

    client.messages.create({
            body: 'Hello Brock from Node',
            to: process.env.MY_PHONE,
            from: process.env.TWILIO_PHONE
    }).then((message) => {
        console.log(message.sid)
        res.send({
            'sid': message.sid
        });
    });
});

var server = app.listen(port, '0.0.0.0', function() {
	console.log('Listening on port %d', server.address().port);
});