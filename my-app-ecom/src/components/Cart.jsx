import React from 'react';
import CartItem from './CartItem';
import Price from './Price';
import Product from './Product';
import Button from './Button';





function Cart({ items }) {
    const totalPrice = items.reduce((total, item) => total + (item.discountedPrice || item.price), 0);
    return (
        <div>
            <h1>Your cart</h1>
            {items.map(item => (
                <div><CartItem key={item.id} title={item.title} price={item.price} discountedPrice={item.discountedPrice} /></div>))}
            <div>Total: {totalPrice}</div>
            <Button type="submit" name="Checkout" />
        </div>
    );
}

export default Cart;