
const mongoose  = require('mongoose');

const reportSchema = new mongoose.Schema({
   name : String , 
   dtype : String , 
   description : String ,
   contact : String ,
   lat : String , 
   long : String , 
    image : String ,
});

const  Report = mongoose.model('Report', reportSchema);

module.exports = Report;