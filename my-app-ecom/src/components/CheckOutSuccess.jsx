import React, { useContext, useEffect } from "react";
import CartContext from "./CartContext";
import { Link } from "react-router-dom";
import Success from "./Success";
import Button from "./Button";

function CheckOutSuccess() {
    const { setCart } = useContext(CartContext);
    const clearCart = () => {
        setCart([]);
    }
    useEffect(clearCart, []);

    return (
        <div>
            <Success
                title="Your order has been placed!"
                subtitle="Thank you for shopping with us!" />
        </div>
    );
}

export default CheckOutSuccess;