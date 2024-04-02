import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Button from "./Button";




function Product(props) {
    const { url, alt } = props.image;
    return (
        <div className="card">
            <div className="title">{props.title}</div>
            <img src={url} alt={alt} />
            <div className="productDescription">{props.description}</div>
            <Price price={props.price} discountedPrice={props.discountedPrice} showDiscount />
            <Link className="oneButtonLink" to={`/ProductDetails/${props.id}`}><Button className="oneButton" type="button" name="More" /></Link>
        </div>
    );
}

export default Product;