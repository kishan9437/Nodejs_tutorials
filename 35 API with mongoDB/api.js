const express = require('express')
const dbConnect = require('./mongoDB')
// const { name } = require('ejs')
const app = express()
// const port = 3000

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find({}).toArray();
    // console.log(data)
    res.send(data)
})
app.listen(5000)