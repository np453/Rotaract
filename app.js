const express =require('express');
const app=express();
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const AWS = require('aws-sdk');
const port=4444;

app.use(cors());
app.use(express.json());
app.use(express.static("client/build"));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
let transport = nodemailer.createTransport('SES', {
    AWSAccessKeyID: '',
    AWSSecretKey: '',
    ServiceUrl: 'email-smtp.us-west-2.amazonaws.com'
});
var message = {
    from: 'acw.dnsp@gmail.com', // verified in Amazon AWS SES
    to: 'acw.dnsp@gmail.com', // verified in Amazon AWS SES
    subject: 'testing',
    text: 'hello',
    html: '<p><b>hello</b></p>' +
          'test'
};
transport.sendMail(message, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Message sent: ' + response.message);
    }
});
app.get("/",(req,res)=>{
})
app.listen(port,console.log(`Server started at ${port}`));
