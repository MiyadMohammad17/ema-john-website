import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart

    let total = 0;
    let totalShipping =0;


    for(const product of cart){
        total =total+ product.price
        totalShipping =totalShipping + product.shipping
    }
    const tax =  total*7/100;
    const grandTotal = total + totalShipping + tax
    return (
        <div className="cart-cont">
                <h3> Order summary</h3>
                <div className="order-info">
                <p>Selected items: {cart.length}</p>
                <p>Total price: ${total} </p>
                <p>Total shipping : ${totalShipping} </p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
                </div>

            </div>
    );
};

export default Cart;