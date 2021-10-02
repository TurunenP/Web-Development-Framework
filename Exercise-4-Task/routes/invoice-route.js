const express = require('express');
const { getAllInvoice, addInvoice } = require('../controllers/InvoiceController');


const auth = require("../middleware/auth");
const router = express.Router();


router.post("/add/invoice",auth,addInvoice);
router.get("/all/invoice",getAllInvoice);



module.exports = {
    routes:router
}