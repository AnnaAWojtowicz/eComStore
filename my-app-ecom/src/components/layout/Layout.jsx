import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ProductDetails from "../ProductDetails";



function Header({ cart }) {
    const count = cart.length;

    return (
        <header className="header">
            <div className="bungee-outline-regular"><Link className="link" to="/">Ecom</Link></div>
            <div className="searchContainer">
                <input type="text" className="searchInput" placeholder="Search">
                </input>
            </div>
            <Link className="link" to="/cart">
                <div className="CartAndNumber">
                    <span className="material-symbols-outlined exceptionIcon">shopping_bag</span>
                    <span className="numberOfItems">{cart.length}</span>
                </div>
            </Link>
            <Outlet />
        </header>
    );
}

export default Header;