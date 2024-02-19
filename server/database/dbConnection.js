const mongoose  = require('mongoose');
const { mongo_Url } = require('../secrets');



const mongoURL = mongo_Url

async function dbConnection() {
    await mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,    
    })
    mongoose.connection.readyState ? console.log('Connected to MongoDB')
    : console.log('Failed to connect to MongoDB');
}

module.exports = dbConnection;