
const mongoose = require('mongoose');

const main = async () => {
    mongoose.connect('mongodb://localhost:27017/E-comme');
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number
    });

    const productmodal = mongoose.model('product', productSchema);
    let data = new productmodal({ name: "m1", price: 100 });
    let result = await data.save();
    console.log(result);
}

main();