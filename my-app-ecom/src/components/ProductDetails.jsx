import React from "react";
import Price from "./Price";
import Product from "./Product";
import Button from "./Button";


function ProductDetails(props) {
    return (
        <div className="card">
            <h1 className="title">{props.title}</h1>
            <div>{props.description}</div>
            <Price price={props.price} discountedPrice={props.discountedPrice} />
            <div>{props.image}</div>
            <div>{props.rating}</div>
            <div>{props.tags}</div>
            <div>{props.reviews}</div>
            <Button type="submit" name="Add to cart" />
        </div>
    );
}

export default ProductDetails;