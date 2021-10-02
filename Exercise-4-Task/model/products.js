const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: { type: String, default: null },
  product_prize: { type: String , default: null },
  product_rating: {type:Number ,default: null},
  product_img: { type: String, default: null },
  
});

module.exports = mongoose.model("Products", productSchema);