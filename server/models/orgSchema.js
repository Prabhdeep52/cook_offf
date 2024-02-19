const mongoose = require('mongoose');
//Organization Schema
const orgSchema = new mongoose.Schema({
  name: String,
  description: String,
  orgtype: String,
  contact: Number,
  lat: String,
  long: String,
  logo: String
});

const  Org = mongoose.model('Org', orgSchema);

module.exports = Org;