const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/E-comme');

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
});

const main = async () => {
    const Product = mongoose.model('product', productSchema);
    let data = new Product({
        name: "note 10",
        brand: "max",
        price: 100,
        category: "mobile"
    });
    let result = await data.save();
    console.log(result);
}

const updateInDb = async () => {
    const Product = mongoose.model('products', productSchema);
    let result = await Product.updateOne({
        name: "note 10"}, 
        {$set: {price: 1000,name:"y-35"}}
    );
    console.log(result);
}

const deleteInDb=async()=>{
    const Product = mongoose.model('products', productSchema);
    let result = await Product.deleteOne({
        name: "note 10"
    });
    console.log(result);
}

const findInDb=async()=>{
    const Product = mongoose.model('products', productSchema);
    let result = await Product.find();
    console.log(result);
}

// deleteInDb();
findInDb();
// updateInDb();