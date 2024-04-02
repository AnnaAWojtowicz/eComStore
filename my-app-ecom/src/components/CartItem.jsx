import React from 'react';
import Price from './Price';

function CartItem(props) {
    return (
        <div className='titleAndPriceCart'>
            <h3>{props.title}</h3>
            <span><Price price={props.price} discountedPrice={props.discountedPrice} /></span>
        </div>
    );
}

export default CartItem;