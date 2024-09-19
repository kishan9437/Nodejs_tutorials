const express= require('express');
const con= require('./config');
const app = express();

app.get('/',(req,res)=>{
    con.query("SELECT * FROM users",(err,result)=>{
        if(err){
            res.send("error");
        }
        else{
            res.send(result)
        }
    })
})

app.listen(5000)