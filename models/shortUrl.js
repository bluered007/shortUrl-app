const mongoose = require("mongoose");
const shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema({
    fullUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        require:true,
        default:shortId.generate
    }
});

module.exports = mongoose.model("shortUrl",shortUrlSchema);