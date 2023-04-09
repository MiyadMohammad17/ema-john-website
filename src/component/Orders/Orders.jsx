import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData()
    
    return (
        <div className='shop-container'>
            <div className='product-cont' >
            <h2>Order Summary</h2>
        </div>,
        <div className='cart-cont'>
            <Cart cart= {[]}  ></Cart>
        </div>
        </div>
    );
};

export default Orders;