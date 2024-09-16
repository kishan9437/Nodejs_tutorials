const express = require('express')
const app = express();
const reqFilter = require('./middleware')
const route=express.Router()

// app.use(reqFilter)
route.use(reqFilter)

route.get('/', (req, res) => {
    res.send('welcome to Home page')
})

route.get('/about', (req, res) => {
    res.send('welcome to About page')
})

app.get('/contact', (req, res) => {
    res.send('welcome to Contact page')
})

app.use('/', route)
app.listen(5000)