import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Layout';
import Footer from './layout/Footer';
import { getProducts } from '../api';
import Home from './Home';

const products = await getProducts()
const productsData = products.data;

const url = "https://v2.api.noroff.dev/online-shop";

// function createCard(item) {
//   return (
//     <Product className="card"
//       key={item.id}
//       title={item.title}
//       description={item.description}
//       price={item.price}
//       discountedPrice={item.discountedPrice}
//       // image={item.image}
//       rating={item.rating}
//       tags={item.tags}
//     //reviews={item.reviews}
//     />

//   );
// }

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(url);
      const fetchedProducts = await response.json();
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
