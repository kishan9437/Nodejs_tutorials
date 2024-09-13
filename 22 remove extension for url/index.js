const express = require('express');
const path=require('path');

const dirpath=path.join(__dirname, 'public')
const app = express();
// console.log(dirpath)
app.get('/index',(req, res) =>{
    res.sendFile(`${dirpath}/index.html`);
})
app.get('/about',(req, res) =>{
    res.sendFile(`${dirpath}/about.html`);
})
app.get('*',(req, res) =>{
    res.sendFile(`${dirpath}/404page.html`);
})
// app.use(express.static(dirpath));
app.listen(4500)