const Products = require("../model/products");
require("../config/database").connect();

const addProduct = async (req,res) => {

    try {
        const {product_name,product_prize,product_img, product_desc} = req.body;

        if (!(product_name && product_prize && product_img && product_desc)) {
            res.status(400).send("All input is required");
          }
        const product = await Products.create({
            product_name,
            product_prize,
            product_img,
            product_desc
          });
        res.status(201).json(product);
    } catch (err) {
        console.log(err);
        
    }
}

const getAllProducts = async (req,res) => {
    
    const product = await Products.find();
    try {
        res.json(product);
    } catch (error) {
        res.json(error);
        
    }
};

const deleteProduct = async (req,res) =>{
    try {
      
        const id = req.params.id;
        await Products.findOneAndDelete({_id:id})
        
        res.status(200).send("Product  deleted !");
             
       
          
         
     } catch (error) {
         res.json(error)
         
     }
}
module.exports ={
    addProduct,
    getAllProducts,
    deleteProduct
}
