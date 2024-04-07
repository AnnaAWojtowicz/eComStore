import React, { useEffect, useState } from 'react';
import Context from './Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { getProducts } from '../api';
import Home from './Home';
import ProductDetails from './product/ProductDetails';
import Cart from './cart/Cart';
import CartItem from './cart/CartItem';
import CheckOutSuccess from './cart/CheckOutSuccess';
import ContactForm from './contact/ContactForm';
import ContactSuccess from './contact/ContactSuccess';
import Success from './Success';

const products = await getProducts()
const productsData = products.data;

const url = "https://v2.api.noroff.dev/online-shop";

function App() {
  const [cart, setCart] = useState([]);
  const [objects, setObjects] = useState([]);
  const [filteredObjects, setFilteredObjects] = useState(objects);
  const [isSearching, setIsSearching] = useState(false);
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
    <Context.Provider value={{ cart, setCart, filteredObjects, setFilteredObjects }}>
      <BrowserRouter>
        <div className='site'>
          <Layout cart={cart} objects={objects} productsData={productsData} setFilteredObjects={setFilteredObjects}>
            <Routes>
              <Route path="/" element={<Home products={productsData} isSearching={isSearching} filteredObjects={filteredObjects} />} index />
              <Route path="/ProductDetails/:id" element={<ProductDetails products={products} />} />
              <Route path='/cartItem' element={<CartItem />} />
              <Route path="/cart" element={<Cart key={cart.length} items={cart} />} />
              <Route path="/checkout" element={<CheckOutSuccess />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/success" element={<Success />} />
              <Route path="/contactSuccess" element={<ContactSuccess />} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
