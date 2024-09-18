const express = require('express');
require('./config');
// const Product = require('./product');
const product = require('./product');
const app = express();

app.use(express.json());

app.get('/search/:key',async(req, res)=>{
    console.log(req.params.key);
    let data=await product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    )
    res.send(data);
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
