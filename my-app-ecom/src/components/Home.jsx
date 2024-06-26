import React, { useEffect, useState } from "react";
import Product from "./product/Product";
import { getProducts } from '../api';


function Home({ products, isSearching, filteredObjects }) {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProductsData(products.data);
        };
        fetchProducts();
    }, []);

    let itemsToDisplay = productsData;
    if (filteredObjects.length > 0) {
        itemsToDisplay = filteredObjects;
    }

    return (
        <div className='container'>
            {itemsToDisplay.map((item) => (
                <Product id={item.id} className="card"
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    discountedPrice={item.discountedPrice}
                    rating={item.rating}
                    tags={item.tags}
                    reviews={item.reviews}
                />
            ))}
        </div>
    );
}

export default Home;