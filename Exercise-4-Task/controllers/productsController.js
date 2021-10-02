const Products = require("../model/products");



const addProduct = async (req,res) => {

    try {
        const {product_name,product_prize,product_img} = req.body;

        if (!(product_name && product_prize && product_img)) {
            res.status(400).send("All input is required");
          }
        const product = await Products.create({
            product_name,
            product_prize,
            product_img,
            product_rating,
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

module.exports ={
    addProduct,
    getAllProducts,
}
