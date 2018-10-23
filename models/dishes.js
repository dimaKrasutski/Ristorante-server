const mongoose = require('mongoose');
 const Schema = mongoose.Schema;


 const dishSchema = new Schema({
   "name":String,
   "category": String,
   "label": String,
   "price":String,
   "featured":Boolean,
   "description": String,
   "id":Number
 })

 const ModelClass = mongoose.model('Dish', dishSchema);
 module.exports = ModelClass 