const express = require('express');
const app = express();
const multer = require('multer')
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer')
const fs = require('fs');
const File = require("./model/image")
const User = require('./model/user')
const ourWorks = require('./routes/ourWorks')
// const contactModel = require("./model/contact")
// const story = require("./model/story")
const contactModel = require("./model/contact")
const story = require("./model/story")
const PORT = 4444;
dotenv.config();
const uploadRoute = require('./routes/fileUpload')
const addStory = require('./routes/addStory');
const { getMaxListeners } = require('./model/image');
//Middlewares
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/upload', uploadRoute) //file upload route
app.use('/addstory', addStory)
app.use('/ourworks', ourWorks)

//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database is connected!"));

//Node mailer section
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "rotaractmnnit4@gmail.com",
//         pass: process.env.PASSWORD 
//     }
//     }
// );
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "adf4ee44d30d9d",
      pass: "d8ee980db2e93c"
    }
  });
let from = `Rotaract Club MNNIT Allahabad <rotaractmnnit4@gmail.com>`

// Join us section
// app.post("/contact",async(req,res)=>{
// //    console.log(req.data)
//    const contact = new contactModel({
//       name:req.body.name,
//       email:req.body.email,
//       description:req.body.description,
//       source:req.body.source
//   })
//   try{
//       const savedUser = await contact.save();
//       res.status(200)
//   }catch(err) {
//       res.status(400).send(err);
//   }
// })
// Share Rotary story section
app.post("/rotary_story",async(req,res)=>{
   const newalter = new story({
      name:req.body.name,
      email:req.body.email,
      title:req.body.title,
      story:req.body.story
  })
// node mailer transporter
    let mailOptions = {
        from: from, 
        to: "namanpatel453@gmail.com", 
        subject: `New Rotary Story`,
        text: `
        
            `,
        html:`
        <p>Someone just shared his/her Rotary story with you</p>
            <br/>
           Name: ${req.body.name} <br/>
           Email: ${req.body.email} <br/>
           Title: ${req.body.title} <br/>
           Story: ${req.body.story}
        `    
    };
    transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return console.log('Error occurs');
    }
        return console.log('Email sent!!!');
    });
  try{
      const savedUser = await newalter.save();
      res.send(savedUser);
  }catch(err) {
      res.status(400).send(err);
  }
})





app.listen(PORT, function() {
    console.log('App running on port 4444');
});
