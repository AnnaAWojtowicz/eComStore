import React from "react";

function Button(props) {
    return (
        <button type={props.type} onClick={props.onClick}>{props.name}</button>
    );
}

export default Button;