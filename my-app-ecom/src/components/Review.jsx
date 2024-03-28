import React from "react";

function Review(props) {

    const { username, description, rating } = props;
    return (
        <div className="card3">
            <div>{username}</div>
            <div>{description}</div>
            <div>{rating}</div>
        </div>
    );
}

export default Review;