import React from "react";

function Price(props) {
    return (
        <div>
            {props.discountedPrice < props.price ?
                (<div className="priceElement">
                    <div className="price">
                        <span><s>{props.price}</s></span>
                        <span className="discount"><span class="material-symbols-outlined">
                            sell
                        </span>Discount {Math.ceil(((props.price - props.discountedPrice) / props.price) * 100)}%</span>
                    </div>
                    <div>{props.discountedPrice}</div>
                </div>
                ) : (<div>{props.price}</div>)}
        </div>
    );
}


export default Price;