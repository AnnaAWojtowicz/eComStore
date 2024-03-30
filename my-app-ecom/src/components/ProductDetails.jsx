import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Price from "./Price";
import Product from "./Product";
import Button from "./Button";
import { handleClick } from "./ProductDetails";
import Review from "./Review";



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
    const tags = product.tags;

    return (
        <div className='container'>
            <div className="card2">
                <h1 className="title">{product.title}</h1>
                <div className="productDescription">{product.description}</div>
                <img src={url} alt={alt} />
                <Price price={product.price} discountedPrice={product.discountedPrice} />
                <div>{product.rating}</div>
                <div>{tags}</div>
                {product.reviews && product.reviews.map(({ id, username, description, rating }) => {
                    return <Review key={id} username={username} description={description} rating={rating} />
                })
                }
                <Button type="submit" name="Add to cart" onClick={product.handleClick} />
            </div>
        </div>
    );
}

export default ProductDetails;