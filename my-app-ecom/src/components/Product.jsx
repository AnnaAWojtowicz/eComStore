import React from "react";
import Price from "./Price";
import Button from "./Button";


function Product(props) {
    return (
        <div className="card">
            <h1 className="title">{props.title}</h1>
            <div>{props.description}</div>
            <Price price={props.price} discountedPrice={props.discountedPrice} />
            <div>{props.image}</div>
            <Button type="submit" name="More" />
        </div>
    );
}

export default Product;