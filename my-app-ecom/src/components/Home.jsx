import React from "react";
import Product from "./Product";
import productsData from "../data/productsData";
import { getProducts } from '../api';

const products = await getProducts()
productsData = products.data;

function Home() {
    return (
        <div className='container'>
            {productsData.map(item => (
                <Product className="card"
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    discountedPrice={item.discountedPrice}
                // image={item.image}
                // rating={item.rating}
                // tags={item.tags}
                //reviews={item.reviews}
                />
            ))}
        </div>
    );
}

export default Home;