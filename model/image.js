var mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
    Img: {
        data: Buffer, 
        contentType: String 
    },
});

module.exports = mongoose.model("file",fileSchema);