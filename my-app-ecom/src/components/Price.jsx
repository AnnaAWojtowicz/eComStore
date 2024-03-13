import React from "react";

function Price(props) {
    return (
        <div>
            {props.discountedPrice < props.price ?
                (<div>
                    <div>
                        <s>{props.price}</s>
                        <div>Discount {Math.ceil(((props.price - props.discountedPrice) / props.price) * 100)}%</div>
                    </div>
                    <div>{props.discountedPrice}</div>
                </div>
                ) : (<div>{props.price}</div>)}
        </div>
    );
}


export default Price;