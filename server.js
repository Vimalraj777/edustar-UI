const express=require("express");
const path=require("path");
const app=express();
app.use(express.static(__dirname+'/dist/project1'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist'+'/dist/project1/index.html'));

});

app.listen(process.env.port || 8080)