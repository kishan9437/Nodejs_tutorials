const express= require('express');
const EventEmitter= require('events');
const app= express();
const event=new EventEmitter();

event.on('apiCalled',()=>{
    console.log("event called");
})

app.get('/',(req, res) =>{
    res.send("api called")
    event.emit('apiCalled')
})

app.get('/search',(req, res) =>{
    res.send("search api called")
})

app.get('/update',(req, res) =>{
    res.send("update api called")
})

app.listen(5000)