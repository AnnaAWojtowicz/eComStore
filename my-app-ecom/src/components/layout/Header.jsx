import React, { useState, useEffect, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Context from "../Context";



function Header({ objects, productsData }) {

    const [searchTerm, setSearchTerm] = useState("");
    // const [filteredObjects, setFilteredObjects] = useState(objects);
    // const count = cart.length;
    const [isSearching, setIsSearching] = useState(false);
    const { cart, setFilteredObjects } = useContext(Context);

    // const handleSearch = () => {
    //     const results = productsData.filter((product) => {
    //         return product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //             product.description.toLowerCase().includes(searchTerm.toLowerCase());
    //     });
    //     setFilteredObjects(results);
    //     setIsSearching(true);
    // };

    // useEffect(() => {
    //     if (searchTerm === "") {
    //         setIsSearching(false);
    //     }
    // }, [searchTerm]);

    useEffect(() => {
        if (searchTerm === "") {
            setIsSearching(false);
        } else {
            const results = productsData.filter((product) => {
                return product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setFilteredObjects(results);
            setIsSearching(true);
        }
    }, [searchTerm]);




    return (
        <header className="header">
            <div className="bungee-outline-regular"><Link className="link" to="/">Ecom</Link></div>
            <div className="searchContainer">
                <input
                    type="text"
                    className="searchInput"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)} />
                {/* <button className="searchButton" onClick={handleSearch}><span className="material-symbols-outlined">
                    search
                </span></button> */}
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