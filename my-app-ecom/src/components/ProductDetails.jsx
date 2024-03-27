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
            const foundProduct = productArray.find((product) => product.id === Number(id));

            setProduct(foundProduct);
        }
    }, [id, products]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const { url, alt } = product.image;
    return (
        <div className="card">
            <h1 className="title">{product.title}</h1>
            <img src={url} alt={alt} />
            <div>{product.description}</div>
            <Price price={product.price} discountedPrice={product.discountedPrice} />

          //  <div>{product.rating}</div>
           // <div>{product.tags}</div>
           // <div>{product.reviews}</div>
            <Button type="submit" name="Add to cart" onClick={product.handleClick} />
        </div>
    );
}

export default ProductDetails;