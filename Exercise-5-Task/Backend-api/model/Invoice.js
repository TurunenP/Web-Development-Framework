const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  product_name: { type: String, default: null },
  product_prize: { type: Number , default: null },
  product_desc:{type:String,default:null},
  product_rating:{type:Number,default:null}

});

module.exports = mongoose.model("invoice", invoiceSchema);