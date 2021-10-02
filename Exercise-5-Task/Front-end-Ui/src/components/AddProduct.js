import React , { Component }  from 'react'
import "./AddProduct.css"
import axios from "axios";

class AddProduct extends Component{

     state = {
        product_name:"",
        product_prize:"",
        product_desc:"",
        product_img:""
        
      };
   
      onnameChange = e => {
        this.setState({
          product_name: e.target.value
        });
      };
    
      onPrizeChange = e => {
        this.setState({
          product_prize: e.target.value
        });
      };
      onProdDesc = e => {
          this.setState({
            product_desc: e.target.value
          })
      };
      onProdImg = e => {
        this.setState({
            product_img:e.target.value
            
        })
    }



      handleSubmit = e => {
        e.preventDefault();
        const data = {
            product_name: this.state.product_name,
            product_prize: this.state.product_prize,
            product_desc: this.state.product_desc,
            product_img:this.state.product_img
        };
        axios
          .post("http://localhost:3004/api/v1/add/product", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      };

      render(){
    return (
        <div>
             <h3>Add Product</h3>
            <div className="form">
         
                <form onSubmit={this.handleSubmit}>
                
                    <label >Product Name</label>
                    <input value={this.state.product_name} onChange={this.onnameChange} required type="text"  placeholder="Product  name.."/>

                    <label >Product Description</label>
                    <input value={this.state.product_desc} onChange={this.onProdDesc} required type="text"  placeholder="Product description ..."/>

                    <label >Product Prize</label>
                    <input value={this.state.product_prize} onChange={this.onPrizeChange} required type="text"   placeholder="Prize 200"/>
                    <label >Product Image</label>
                    <input value={this.state.product_img} onChange={this.onProdImg} required type="text"   placeholder="Product img url .."/>

                    <input type="submit" value="Add product"/>
                </form>
                </div>
            
        </div>
    )
}}

export default AddProduct
