const mongoose = require('mongoose');


const connectDatabase = async() => {
    try {
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.MONGODB_URL, {
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log(`MongoDB is connected to ${connect.connection.host}`);
    }catch(err) {
        throw err;
    }
}

module.exports = connectDatabase;