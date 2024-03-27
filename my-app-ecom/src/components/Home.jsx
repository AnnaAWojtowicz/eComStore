import React, { useEffect, useState } from "react";
import Product from "./Product";
//import productsData from "../data/productsData";
import { getProducts } from '../api';

// const products = await getProducts()
// productsData = products.data;

function Home() {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProductsData(products.data);
        };
        fetchProducts();
    }, []);

    return (
        <div className='container'>
            {productsData.map(product => (
                <Product id={product.id} className="card"
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                    discountedPrice={product.discountedPrice}
                />
            ))}
        </div>
    );
}

export default Home;