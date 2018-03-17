var twilio = require('twilio')
require('dotenv').config()

function sendReminderText() {

    console.log('SENDING REMINDER TEXT!');
    console.log('SID: ' + process.env.TWILIO_SID);
    console.log('TOKEN: ' + process.env.TWILIO_TOKEN);
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