import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import { getProducts } from '../api';

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
    <div>
      <Header />
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
        ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
