var path = require('path')
var twilio = require('twilio')
require('dotenv').config()

function sendReminderText() {
    var client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

    client.messages.create({
            body: 'Water your plants idiot!',
            to: process.env.MY_PHONE,
            from: process.env.TWILIO_PHONE
    }).then((message) => {
        res.send({
            'sid': message.sid
        });
    });
}

sendReminderText()