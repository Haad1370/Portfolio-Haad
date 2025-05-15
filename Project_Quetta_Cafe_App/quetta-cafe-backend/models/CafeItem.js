const mongoose = require('mongoose');

const cafeItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String
});

module.exports = mongoose.model('CafeItem', cafeItemSchema);
