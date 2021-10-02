const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  product_name: { type: String, default: null },
  product_prize: { type: Number , default: null },
  user : {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  
  
});

module.exports = mongoose.model("invoice", invoiceSchema);