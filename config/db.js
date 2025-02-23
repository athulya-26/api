const mongoose = require('mongoose')
require("dotenv").config()

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb connecttion SUCCESS")
} catch (error) {
    console.log("MongoDB connection FAILED",error)
    ProcessingInstruction.exit(1)
}
}
module.exports=connectDB
