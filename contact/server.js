var express = require('express');
var nodemailer = require('nodemailer');

var app = express();

var smtpTransport = nodemailer.createTransport("SMTP", {
    host: "smtp.gmail.com", 
    secureConnection: true, 
    port: 465, 
    service: 'Gmail',
    auth: {
        // enter your gmail account
        user: 'mostafazke',
        // enter your gmail password
        pass: '0175563343'
    }
});


app.get('/', function (req, res) {

    var mailOptions = {
        from: req.query.name,
        to: req.query.to,
        subject: 'Contact Form Message',
        html:  "From: " + req.query.name + "<br>" +
               "User's email: " + req.query.user + "<br>" +     "Message: " + req.query.text
    }

    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (err, response) {
        if (err) {
            console.log(err);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });

});

app.listen(8080, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port on 8080");
    }
});
