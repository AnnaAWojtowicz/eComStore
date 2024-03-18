import React from "react";

function Header() {
    return (
        <header className="header">
            <div className="bungee-outline-regular">Ecom</div>
            <div className="searchContainer">
                <input type="text" className="searchInput" placeholder="Search">
                </input>
            </div>
            <div className="CartAndNumber">
                <span className="material-symbols-outlined exceptionIcon">shopping_bag</span>
                <span className="numberOfItems">6</span>
            </div>
        </header>
    );
}

export default Header;