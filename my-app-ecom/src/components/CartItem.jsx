import React from 'react';
import Price from './Price';

function CartItem(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p><Price price={props.price} discountedPrice={props.discountedPrice} /></p>
        </div>
    );
}

export default CartItem;