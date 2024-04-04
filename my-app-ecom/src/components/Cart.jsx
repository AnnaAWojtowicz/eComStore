import React from 'react';
import { Link } from "react-router-dom";
import CartItem from './CartItem';
import Price from './Price';
import Product from './Product';
import Button from './Button';
import CheckOutForm from './CheckOutSuccess';





function Cart({ items }) {
    const totalPrice = items.reduce((total, item) => total + (item.discountedPrice || item.price), 0);
    return (
        <div className='container2'>
            <div className="card4">
                <h1>Your cart</h1>
                {items.map(item => (
                    <div className='cart'><CartItem key={item.id} title={item.title} price={item.price} discountedPrice={item.discountedPrice} /></div>))}
                <div className="priceTotal">Total: ${(totalPrice).toFixed(2)}</div>
                <div className='buttons'>
                    <Link to="/"><Button type="button" name="Go back" /></Link>
                    <Link to="/checkout"> <Button type="submit" name="Checkout" /></Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;