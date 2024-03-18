import React from "react";

function Header() {
    return (
        <header className="header">
            <h1>Ecom</h1>
            <div className="searchContainer">
                <input type="text" className="searchInput" placeholder="Search">
                </input>
            </div>
            <div className="material-symbols-outlined">shopping_bag</div>
        </header >
    );
}

export default Header;