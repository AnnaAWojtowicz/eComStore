import React from "react";
import Price from "./Price";
import Button from "./Button";


function Product(props) {
    const { url, alt } = props.image;
    return (
        <div className="card">
            <h1 className="title">{props.title}</h1>
            <img src={url} alt={alt} />
            <div>{props.description}</div>
            <Price price={props.price} discountedPrice={props.discountedPrice} />

            <Button type="submit" name="More" />
        </div>
    );
}

export default Product;