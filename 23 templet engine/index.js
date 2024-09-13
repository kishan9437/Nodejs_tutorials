const express = require('express');
const path=require('path');

const dirpath=path.join(__dirname, 'public')
const app = express();
// console.log(dirpath)

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    const user={
        name: 'John Doe',
        age: 30,
        city: 'New York'
    }
    res.render('profile',{user})
})
app.get('/',(req, res) =>{
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