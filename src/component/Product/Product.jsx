import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {img,name, seller, ratings, price} =props.product;
    
   const handleAllCart =props.handleAllCart
    
    return (
        <div className='product'>
            <img src={img} alt="product image" />
            <div className="product-info">
            <h6 className='pro-name'>Name: {name}</h6>
            <p>Price: ${price} </p>
            <p>Menufacture : {seller} </p>
            <p>Rating : {ratings} stars</p>
            </div>
            <button onClick={() =>handleAllCart(props.product)} className='btn-cart'>Add to Cart  
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;