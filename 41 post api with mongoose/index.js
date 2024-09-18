const express = require('express');
require('./config');
const Product = require('./product');   
const app = express();

app.use(express.json());

app.post('/create', async (req, res) => {
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result)
    res.send(result);
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
