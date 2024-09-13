const express= require('express');
const app = express();

app.get('',(req,res)=>{
    res.send("welcome,this is a home page")
})

app.get('/about',(req,res)=>{
    res.send("this is the about page")
})

app.listen(4500)