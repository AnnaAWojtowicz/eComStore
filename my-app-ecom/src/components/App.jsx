import React, { useEffect, useState } from 'react';
import CartContext from './CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Layout';
import Footer from './layout/Footer';
import { getProducts } from '../api';
import Home from './Home';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import CartItem from './CartItem';
import CheckOutSuccess from './CheckOutSuccess';

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

  const [cart, setCart] = useState([]);


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
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/ProductDetails/:id" element={<ProductDetails products={products} />} />
          <Route path='/cartItem' element={<CartItem />} />
          <Route path="/cart" element={<Cart key={cart.length} items={cart} />} />
          <Route path="/checkout" element={<CheckOutSuccess />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
