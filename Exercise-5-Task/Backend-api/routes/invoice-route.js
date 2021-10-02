const express = require('express');
const { getAllInvoice, addInvoice, deleteInvoice } = require('../controllers/InvoiceController');

const router = express.Router();


router.post("/add/invoice",addInvoice);
router.get("/all/invoice",getAllInvoice);
router.delete("/invoice/:id/delete",deleteInvoice)



module.exports = {
    routes:router
}