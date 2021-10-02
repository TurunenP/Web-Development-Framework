import React from 'react'
import "./ProductCard.css"
function ProductCard({productname,productprize,productdesc,productimg}) {
    const seeDetail = {
        textDecoration:"none"
    }
    return (
        <div>
        <div class="cards">
            <div>
            <img src={productimg} alt="product_img"/>
            <p class="product-name">{productname}</p>
            <h1 class="product-details">something <br/><span>By Faith</span></h1><p>Ship to Finland</p>
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
