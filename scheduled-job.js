let moment = require('moment')
let twilio = require('twilio')
require('dotenv').config()

const ALERT_DAY = 5 // Friday

function generateMessage() {
    if (moment().day() === ALERT_DAY) {
        return 'Do remember to water your plants today!'
    } else {
        return 'It\'s only ' + moment().format('dddd') + ' no need to worry about your plants today!'
    }
}

function sendReminderText() {
    var client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

    client.messages.create({
            body: generateMessage(),
            to: process.env.MY_PHONE,
            from: process.env.TWILIO_PHONE
    }).then((message) => {
        res.send({
            'sid': message.sid
        });
    });
}

sendReminderText()