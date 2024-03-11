import React from "react";

function Product(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <p>{props.discountedPrice}</p>
            <p>{props.image}</p>
            <p>{props.rating}</p>
            <p>{props.tags}</p>
            <p>{props.reviews}</p>
        </div>
    );
}

export default Product;