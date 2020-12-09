const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer')
const dotenv = require('dotenv')
var fs = require('fs');
const app = express()
const cors = require('cors');
const bp = require('body-parser');
const port=4444;
dotenv.config();
//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("client/build"));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database is connected!"));

app.listen(port,console.log(`Server started at ${port}`));
