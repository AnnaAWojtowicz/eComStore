import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Context from "../Context";
import Price from "../Price";
import Button from "../Button";
import Review from "./Review";
import StarRating from "./StarRating";


function ProductDetails({ products }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { cart, setCart } = React.useContext(Context);

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
                <div className="title">{product.title}</div>
                <div className="productDescription">{product.description}</div>
                <img src={url} alt={alt} />
                <div className="paragraph">
                    <Price price={product.price} discountedPrice={product.discountedPrice} showDiscount />
                    <StarRating rating={product.rating} color="#037f8c" />
                    {/* <div className="paragraph">{tags.join(", ")}</div> */}
                </div>
                {product.reviews && product.reviews.map(({ id, username, description, rating }) => {
                    return <Review key={id} username={username} description={description} rating={rating} />
                })
                }
                <div className='buttons'>
                    <Link to="/"><Button type="button" name="Go back" /></Link>
                    <Button type="button" name="Add to cart" onClick={addToCart} />
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;