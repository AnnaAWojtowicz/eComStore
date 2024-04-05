import React from "react";

function StarRating({ rating, color }) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<span style={{ color: color }} key={i}>&#9733;</span>); // filled star
        } else {
            stars.push(<span style={{ color: color }} key={i}>&#9734;</span>); // empty star
        }
    }
    return <div>{stars}</div>;
}

export default StarRating;