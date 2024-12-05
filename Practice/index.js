const express= require('express');
const app=express();
const path=require('path');
const fs=require('fs');

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get("/",function(req,res){
    fs.readdir(`./files`,function(err,files){
        res.render("index",{files:files});

    })
    
});

app.post("/create", function (req, res) {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function (err) {
        
            res.redirect("/");
        
    });
});

app.get("/file/:filename", function (req, res) {
    fs.readFile(`./files/${req.params.filename}`,"utf-8", function(ree,filedata) {
        res.render('show',{filename: req.params.filename , filedata:filedata});     
    })
})
app.get("/edit/:filename", function (req, res) {
    res.render("edit",{filename: req.params.filename})  ;  
    })

// app.post("/edit", function (req, res) {
//     fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,function(err){
//         res.redirect("/");
//     })       
// });
app.post("/edit", function (req, res) {
    if (!req.body.previous || !req.body.newName) {
        return res.status(400).send("Invalid input");
    }
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.newName}`, function (err) {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to rename file");
        }
        res.redirect("/");
    });
});

app.listen(3001)