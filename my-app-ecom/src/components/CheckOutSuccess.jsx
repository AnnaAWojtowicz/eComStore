import React, { useContext, useEffect } from "react";
import CartContext from "./CartContext";
import { Link } from "react-router-dom";
import Success from "./Success";
import Button from "./Button";

function CheckOutSuccess() {
    const { setCart, setFilteredObjects } = useContext(CartContext);

    const clearCartAndSearch = () => {
        setCart([]);
        setFilteredObjects([]);
    }

    useEffect(clearCartAndSearch, []);

    return (
        <div>
            <Success
                title="Your order has been placed!"
                subtitle="Thank you for shopping with us!" />
        </div>
    );
}

export default CheckOutSuccess;