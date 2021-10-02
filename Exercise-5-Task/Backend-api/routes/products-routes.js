const express = require('express');
const { addProduct, getAllProducts, deleteProduct } = require('../controllers/productsController');


const router = express.Router();

// crud operations
// 1 Add products
// 2 Get products



router.post("/add/product",addProduct);
router.get("/all/products",getAllProducts);
router.delete("/product/:id/delete",deleteProduct)



module.exports = {
    routes:router
}