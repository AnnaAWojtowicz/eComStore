import React, { useContext, useEffect } from "react";
import CartContext from "./CartContext";
import { Link } from "react-router-dom";
import Button from "./Button";

function CheckOutSuccess() {
    const { setCart } = useContext(CartContext);
    const clearCart = () => {
        setCart([]);
    }
    useEffect(clearCart, []);

    return (
        <div className='container'>
            <div className="card2">
                <h1>Your order has been placed!</h1>
                <Link className="oneButtonLink" to="/"><Button className="oneButton" type="button" name="Go back to shop" /></Link>
            </div>
        </div>
    );
}

export default CheckOutSuccess;