const express = require('express');
const app = express();
const multer = require('multer')
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fs = require('fs');
const File = require("./model/image")
const PORT = 4444;
dotenv.config();

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database is connected!"));

//multer disk storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
  })
  
const upload = multer({ storage: storage }).array('file')
app.post('/upload',function(req, res) {

    upload(req, res, async (err) => {
      // const file = new File();
      //  file.meta_data = req.body.file;
      //  file.save().then(()=>{
      //  res.send({message:"uploaded successfully"})
      //  })
      console.log(req.files[0].filename)
      let fullpath = 'public/'+req.files[0].filename;
      let imgData  = fs.readFileSync(fullpath).toString('base64')
      let file = new File()
      file.Img.data = Buffer(imgData)
      file.Img.contentType = req.files[0].mimetype;
      const savedFile = await file.save()
      res.send(savedFile)
      
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
          // A Multer error occurred when uploading.
        } else if (err) {
            return res.status(500).json(err)
          // An unknown error occurred when uploading.
        } 
        
        return res.status(200).send(req.file)
        // Everything went fine.
      })
});
app.post("/contact",async(req,res)=>{
   const newalter = new contact({
      name:req.body.name,
      email:req.body.email,
      description:req.body.description,
      source:req.body.source
  })
  try{
      const savedUser = await newalter.save();
      res.send(savedUser);
  }catch(err) {
      res.status(400).send(err);
  }
})

app.get('/img/:imgId', async(req, res) => {
   const imData = await File.findById({_id:req.params.imgId})
   console.log(imData.Img.data.buffer)
         // console.log(results.Img.data.buffer); //<-- Output below
   res.setHeader('content-type', imData.Img.contentType);
   res.send(Buffer.from(imData.Img.data.buffer, 'base64'));
   // res.setHeader('content-type', im.contentType);
   // res.send(im.Img);
});

app.listen(PORT, function() {
    console.log('App running on port 4444');
});
