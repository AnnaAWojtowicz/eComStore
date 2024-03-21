import React from 'react';
import CartItem from './CartItem';
import Price from './Price';
import Product from './Product';
import Button from './Button';

function Cart(props) {
    const totalPrice = props.items.reduce((total, item) => total + (item.discountedPrice || item.price), 0);
    return (
        <div>
            <h1>Cart</h1>
            {props.items.map(item => (
                <div><CartItem title={item.title} price={item.price} discountedPrice={item.discountedPrice} /></div>))}
            <div>Total: {totalPrice}</div>
            <Button type="submit" name="Checkout" />
        </div>
    );
}