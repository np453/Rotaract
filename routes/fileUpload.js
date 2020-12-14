const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const File = require("../model/image")
// mongoose.model('file')
//multer disk storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
  })
  
const upload = multer({ storage: storage }).single('file')

router.post('/',function(req, res) {

    upload(req, res, async (err) => {
      // const file = new File();
      //  file.meta_data = req.body.file;
      //  file.save().then(()=>{
      //  res.send({message:"uploaded successfully"})
      //  })
      console.log(req.file)
      let fullpath = req.file.path;
      let imgData  = fs.readFileSync(fullpath).toString('base64')
      let file = new File()
      file.file.data = Buffer(imgData, 'base64')
      file.file.contentType = req.file.mimetype;
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

router.get('/img/:imgId', async(req, res) => {
    const imData = await File.findById({_id:req.params.imgId})
    // console.log(imData.file.data.buffer)
          // console.log(results.file.data.buffer); //<-- Output below
    res.setHeader('content-type', imData.file.contentType);
    res.send(Buffer.from(imData.file.data.buffer, 'base64'));
    // res.setHeader('content-type', im.contentType);
    // res.send(im.file);
    
 });

 router.get('/img', async(req, res) => {
  const imData = await File.find({ })
  const img = [];
  for(let i=0;i<imData.length;i++) {
    // console.log(Buffer.from(imData[i].file.data.buffer, 'base64').toString('base64'))
    img.push( {buffer:Buffer.from(imData[i].file.data.buffer, 'base64').toString('base64'), contentType:imData[i].file.contentType} )
  }
  // console.log(imData.file.data.buffer)
        // console.log(results.file.data.buffer); //<-- Output below
  // res.setHeader('content-type', imData.file.contentType);
  // res.send(Buffer.from(imData.file.data.buffer, 'base64'));
  res.send(img)

  // res.setHeader('content-type', im.contentType);
  // res.send(im.file);
  
});

module.exports = router;