import React from "react";
import Price from "./Price";


function Product(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>{props.description}</div>
            <Price price={props.price} discountedPrice={props.discountedPrice} />
            <div>{props.image}</div>
            <div>{props.rating}</div>
            <div>{props.tags}</div>
            <div>{props.reviews}</div>
        </div>
    );
}

export default Product;