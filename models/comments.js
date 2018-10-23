const mongoose = require('mongoose');
 const Schema = mongoose.Schema;


 const commentSchema = new Schema({
   "dishId":Number,
   "rating": Number,
   "comment": String,
   "author": String,
   "date": Date,
   "id":Number
 })

 const ModelClass = mongoose.model('Comment', commentSchema);
 module.exports = ModelClass 