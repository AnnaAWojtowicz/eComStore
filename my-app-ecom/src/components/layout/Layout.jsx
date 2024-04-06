import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, cart, objects, productsData, setFilteredObjects }) {
    return (
        <div className="layout">
            <Header cart={cart} objects={objects} productsData={productsData} setFilteredObjects={setFilteredObjects} />
            <div className="content"> {children} </div>
            <Footer />
        </div>
    );
}

export default Layout;