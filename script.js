// const fs=require('fs')

// fs.rm("./copy",{recursive:true},function(err){
//     if(err)console.error(err);
//     else console.log("removed")
// })
// //file is remover

const http=require('http');

const server=http.createServer(function(req,res){
    res.end("Hello worls");
})

server.listen(3001);


