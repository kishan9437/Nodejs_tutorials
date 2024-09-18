const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'E-comme';
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    db = result.db(database);
    return collection = db.collection('product');
}

module.exports = dbConnect;