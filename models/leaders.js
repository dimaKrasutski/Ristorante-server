const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const leadersSchema = new Schema({
    id: Number,
    name: String,
    image: String,
    designation: String,
    abbr: String,
    featured: Boolean,
    description: String
 })

 const ModelClass = mongoose.model('Leader', leadersSchema);
 module.exports = ModelClass 