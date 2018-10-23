 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const feedbackSchema = new Schema({
    "firstname": String,
    "lastname": String,
    "telnum": Number,
    "email": String,
    "agree": Boolean,
    "contactType": String,
    "message": String,
    "date": Date,
      "id":Number
 })

 const ModelClass = mongoose.model('Feedback', feedbackSchema);
 module.exports = ModelClass 
