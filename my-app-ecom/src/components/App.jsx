import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { getProducts } from '../api';
import Home from './Home';

const products = await getProducts()
const productsData = products.data;

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route index element={<Home />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
