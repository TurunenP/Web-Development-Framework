const express = require('express');
const { addProduct, getAllProducts } = require('../controllers/productsController');

const auth = require("../middleware/auth");
const router = express.Router();

// crud operations
// 1 Add products
// 2 Get products



router.post("/add/product",auth,addProduct);
router.get("/all/products",getAllProducts);



module.exports = {
    routes:router
}