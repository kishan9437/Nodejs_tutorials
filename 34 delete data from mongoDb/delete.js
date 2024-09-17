const dbConnect = require('./mongoDB');

const deleteData = async() => {
    let data = await dbConnect()
    let result = await data.deleteMany({name:'y-10 kd'})
    console.warn(result);

    if(result.acknowledged){
        console.log('Data deleted successfully');
    }
}

deleteData();
