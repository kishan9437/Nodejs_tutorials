const { name } = require('ejs')
const dbConnect=require('./mongoDB')

const update=async()=>{
    let data=await dbConnect()
    let result=await data.updateOne(
        {name:'max 5'},{
            $set:{name:'max pro 5',price:1000}
        }
    )
}

update()