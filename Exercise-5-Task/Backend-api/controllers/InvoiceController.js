const Invoice = require("../model/Invoice");
require("../config/database").connect();

const addInvoice = async (req,res) => {

    try {
        const {product_name,product_prize,product_desc,product_rating} = req.body;

        if (!(product_name && product_prize && product_desc,product_rating)) {
            res.status(400).send("All input is required");
          }
        const invoice = await Invoice.create({
            product_name,
            product_prize,
            product_desc,
            product_rating

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

const deleteInvoice = async (req,res) =>{

    try {
       const id = req.params.id;
       await Invoice.findOneAndDelete({_id:id})
       
       res.status(200).send("Invoice deleted !");
            
      
         
        
    } catch (error) {
        res.json(error)
        
    }
}

module.exports ={
    getAllInvoice,
    addInvoice,
    deleteInvoice

    
}
