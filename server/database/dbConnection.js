const mongoose  = require('mongoose');




const mongoURL = "mongodb+srv://deepprabh832:helloworld69@cluster0.euq01bt.mongodb.net/?retryWrites=true&w=majority"

async function dbConnection() {
    await mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,    
    })
    mongoose.connection.readyState ? console.log('Connected to MongoDB')
    : console.log('Failed to connect to MongoDB');
}

module.exports = dbConnection;