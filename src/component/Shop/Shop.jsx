import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([])
    const [cart , setcart] = useState([])
    
    
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])


    const handleAllCart = (product) =>{
         const newCart = [...cart, product]
         setcart(newCart)
    }


    return (
        <div className='shop-container'>
            <div className="product-cont">
                {
                    products.map(product => <Product
                    key={product.id}
                    product ={product}
                    handleAllCart = {handleAllCart}
                    >  </Product>)
                }
            </div>
            <div className="cart-cont">
                <h3> Order summary</h3>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;