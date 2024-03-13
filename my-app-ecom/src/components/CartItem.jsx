import React from 'react';

function CartItem(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <p>{props.discountedPrice}</p>
        </div>
    );
}

export default CartItem;