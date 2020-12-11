const express = require('express');
const app = express();
const multer = require('multer')
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fs = require('fs');
const File = require("./model/image")
const User = require('./model/user')
// const contactModel = require("./model/contact")
// const story = require("./model/story")
const PORT = 4444;
dotenv.config();
const uploadRoute = require('./routes/fileUpload')
const addStory = require('./routes/addStory')
//Middlewares
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/upload', uploadRoute) //file upload route
app.use('/addstory', addStory)

//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database is connected!"));

// Join us section
app.post("/contact",async(req,res)=>{
   console.log(req.data)
   const contact = new contactModel({
      name:req.body.name,
      email:req.body.email,
      description:req.body.description,
      source:req.body.source
  })
  try{
      const savedUser = await contact.save();
      res.status(200)
  }catch(err) {
      res.status(400).send(err);
  }
})
// Share Rotary story section
app.post("/rotary_story",async(req,res)=>{
   const newalter = new story({
      name:req.body.name,
      email:req.body.email,
      title:req.body.title,
      story:req.body.story
  })
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
