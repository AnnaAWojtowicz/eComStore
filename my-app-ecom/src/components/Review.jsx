import React from "react";
import StarRating from "./StarRating";

function Review(props) {

    const { username, description, rating } = props;
    return (
        <div className="card3">
            <div>{username}: </div>
            <div className="reviewDescription">"{description}"</div>
            <StarRating rating={rating} color="#fdd0d9" />
        </div>
    );
}

export default Review;