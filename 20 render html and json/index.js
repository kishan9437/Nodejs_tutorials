const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send(`
        <h1>welcome,this is a home page</h1> 
        <a href="/about">About</a>`
    )
})

app.get('/about', (req, res) => {
    res.send(`
        <input type="text" value="${req.query.name}"/>
        <a href="/contact">Contact page</a>`
    )
})

app.get('/contact', (req, res) => {
    res.send([{
        name: 'John Doe',
        email: 'john@example.com'
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com'
    }
    ])

})

app.listen(4500)