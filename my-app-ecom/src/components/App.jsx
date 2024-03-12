import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import { getProducts } from '../api';

const products = await getProducts()
const productsData = products.data;

function createCard(item) {
  return (
    <Product
      key={item.id}
      title={item.title}
      description={item.description}
    // price={item.price}
    // discountedPrice={item.discountedPrice}
    // image={item.image}
    // rating={item.rating}
    // tags={item.tags}
    // reviews={item.reviews}
    />
  );
}

function App() {

  return (
    <div>
      <Header />
      <h1>Hello world</h1>
      {productsData.map(createCard)}
      <Product />
      <Footer />
    </div>
  );
}

export default App;
