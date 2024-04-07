import React, { useContext, useEffect } from "react";
import Context from "../Context";
import Success from "../Success";

function CheckOutSuccess() {
    const { setCart, setFilteredObjects } = useContext(Context);

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