const express = require("express");

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/shortUrl').then(() => console.log("connect start!"));

const shortUrl = require("./models/shortUrl");

const app = express();


app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));

app.get("/",async (req,res) => {
    const data = await shortUrl.find();
    res.render("index",{shortUrls:data});
});

app.post("/shortUrl",async (req,res) => {
    await shortUrl.create({fullUrl:req.body.fullUrl});
    res.redirect("/");
});

app.get("/:shortUrl",async(req,res) => {
    const findData = await shortUrl.findOne({shortUrl:req.params.shortUrl});
    if(findData.shortUrl = null) return;
    
    res.redirect(findData.fullUrl);
})

app.listen(3000);