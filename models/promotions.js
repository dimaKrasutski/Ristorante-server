const mongoose = require('mongoose');
 const Schema = mongoose.Schema;


 const promotionSchema = new Schema({
    "name": String,
    "label": String,
    "price": String,
    "featured":Boolean,
    "description": String
 })

 const ModelClass = mongoose.model('Promotion', promotionSchema);
 module.exports = ModelClass 