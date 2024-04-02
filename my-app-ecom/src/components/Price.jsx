import React from "react";

function Price({ price, discountedPrice, showDiscount }) {
    return (
        <div>
            {showDiscount ? (
                discountedPrice < price ?
                    (<div className="priceElement">
                        <div className="price">
                            <span><s>${price}</s></span>
                            <span className="discount"><span class="material-symbols-outlined">
                                sell
                            </span>Discount {Math.ceil(((price - discountedPrice) / price) * 100)}%</span>
                        </div>
                        <div>${discountedPrice}</div>
                    </div>
                    ) : (<div>${price}</div>)
            ) : (
                discountedPrice < price ?
                    (<div className="priceElement2">
                        <span>
                            <span><s>${price}</s></span>
                        </span>
                        {" "}
                        <span>${discountedPrice}</span>
                    </div>
                    ) : (<div className="priceElement2">${price}</div>))}
        </div>
    );
}


export default Price;