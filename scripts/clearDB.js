const User = require('../models/User');
const connectDB = require('../db/connect');
require('dotenv').config();

clearDB = async () => {
    try {
        await connectDB(process.env.MONGO_URI).then(await User.deleteMany({}).then(()=>{console.log('Cleared')}))
        
    } catch (error) {
        console.log(error.message)
    }
};

clearDB()