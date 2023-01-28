const mongoose=require("mongoose")
require('dotenv').config()

mongoose.set('strictQuery', false)
const connect=mongoose.connect(process.env.mongoUrl)


module.exports={connect}