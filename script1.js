const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.send("Champion");
})
app.get('/profile', function (req, res) {
  res.send('Hello Wor Dear')
})


app.listen(3001)