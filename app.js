const express =require('express');
const app=express();
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const AWS = require('aws-sdk');
const path = require("path");
const multer = require("multer");
require("./model/image")
const File = mongoose.model("file");
const router = express.Router();
const port=4444;
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static("client/build"));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database is connected!"));


const storage = multer.diskStorage({
    destination: "./public/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("myfile");
 
 const obj =(req,res) => {
    upload(req, res, () => {
       console.log("Request ---", req.body);
       console.log("Request file ---", req.body.file);//Here you get file.
       const file = new File();
       file.meta_data = req.body.file;
       file.save().then(()=>{
       res.send({message:"uploaded successfully"})
       })
       /*Now do where ever you want to do*/
    });
 }
 
 router.post("/upload", obj);
 app.use(router);

app.get("/",(req,res)=>{
});
app.listen(port,console.log(`Server started at ${port}`));
