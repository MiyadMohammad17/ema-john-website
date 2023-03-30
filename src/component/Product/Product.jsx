import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,name, seller, ratings, price} =props.product;
    return (
        <div className='product'>
            <img src={img} alt="product image" />
            <div className="product-info">
            <h6 className='pro-name'>Name: {name}</h6>
            <p>Price: ${price} </p>
            <p>Menufacture : {seller} </p>
            <p>Rating : {ratings} stars</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;