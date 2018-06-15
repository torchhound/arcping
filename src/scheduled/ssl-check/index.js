let arc = require('@architect/functions');
let sslChecker = require('ssl-checker');
let nodemailer = require('nodemailer');

function handler(event, callback) {
  sslChecker(process.env.SITE).then(result => 
    if (result.days_remaining === 0) {
      let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.SENDEMAIL,
            pass: process.env.SENDPASSWORD
        }
      });

      let mailOptions = {
        from: process.env.SENDEMAIL,
        to: process.env.RECEIVEEMAIL,
        subject: `SSL Cert Check Failed for ${process.env.SITE}`,
        text: `SSL Cert for ${process.env.SITE} has ${result.days_remaining} days remaining until it needs to be renewed.`
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Message sent: ' + info.response);
        }
      });
    });
  callback()
}

exports.handler = arc.scheduled(handler)
