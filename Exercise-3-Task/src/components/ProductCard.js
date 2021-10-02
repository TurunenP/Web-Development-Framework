import React from 'react'
import "./ProductCard.css"
function ProductCard({productname,productprize,productdetails,productdesc,text}) {
    const seeDetail = {
        textDecoration:"none"
    }
    return (
        <div>
        <div class="cards">
            <div>
            <img src="./assets/product.jpeg" alt="product_img"/>
            <p class="product-name">{productname}</p>
            <h1 class="product-details">{productdetails} <br/><span>By Amor</span></h1><p>Ship to Finland</p>
            <h3 class="price">$ {productprize} euro</h3>
            <p>{productdesc} <a href="#product" style={seeDetail}>See details</a></p>
            <span class="fa fa-star fa-2x checked"></span>
            <span class="fa fa-star fa-2x checked"></span>
            <span class="fa fa-star fa-2x checked"></span>
            <span class="fa fa-star fa-2x"></span>
            <span> <i class="fa fa-star fa-1x"></i></span>

            </div>

        </div>
        </div>
     
    )
}

export default ProductCard
