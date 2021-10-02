const Invoice = require("../model/Invoice");



const addInvoice = async (req,res) => {

    try {
        const {product_name,product_prize,user} = req.body;

        if (!(product_name && product_prize)) {
            res.status(400).send("All input is required");
          }
        const invoice = await Invoice.create({
            product_name,
            product_prize,
            user,
            
          });
        res.status(201).json(invoice);
    } catch (err) {
        console.log(err);
        
    }
}

const getAllInvoice= async (req,res) => {
    
    const invoice = await Invoice.find();
    try {
        res.json(invoice);
    } catch (error) {
        res.json(error);
        
    }
};

module.exports ={
    getAllInvoice,
    addInvoice
    
}
