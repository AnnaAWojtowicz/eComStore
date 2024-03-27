import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Price from "./Price";
import Product from "./Product";
import Button from "./Button";
import { handleClick } from "./ProductDetails";



function ProductDetails({ products }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {

        if (products && products.data) {

            const productArray = products.data;
            const foundProduct = productArray.find((product) => product.id === id);

            setProduct(foundProduct);
        }
    });

    if (!product) {
        return <div>Loading...</div>;
    }

    const { url, alt } = product.image;
    const { } = product.tags;
    const [user] = product.reviews;
    const { username, description, rating } = user;

    return (
        <div className="card">
            <h1 className="title">{product.title}</h1>
            <div>{product.description}</div>
            <img src={url} alt={alt} />
            <Price price={product.price} discountedPrice={product.discountedPrice} />
            <div>{product.rating}</div>
            <div>{product.tags}</div>
            <div>{username}</div>
            <div>{description}</div>
            <div>{rating}</div>
            <Button type="submit" name="Add to cart" onClick={product.handleClick} />
        </div>
    );
}

export default ProductDetails;