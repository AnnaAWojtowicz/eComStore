import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "./CartContext";
import Price from "./Price";
import Product from "./Product";
import Button from "./Button";
import Review from "./Review";



function ProductDetails({ products }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { cart, setCart } = React.useContext(CartContext);

    useEffect(() => {
        if (products && products.data) {
            const productArray = products.data;
            const foundProduct = productArray.find((product) => product.id === id);
            setProduct(foundProduct);
        }
    }, [products, id]);

    const addToCart = () => {

        if (product) {
            setCart([...cart, product]);
        }
    };

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
                <div>{tags.join(", ")}</div>
                {product.reviews && product.reviews.map(({ id, username, description, rating }) => {
                    return <Review key={id} username={username} description={description} rating={rating} />
                })
                }
                <Button type="button" name="Add to cart" onClick={addToCart} />
            </div>
        </div>
    );
}

export default ProductDetails;