import React from "react";

function Input(props) {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            {props.type === "textarea" ? (
                <textarea id={props.id} name={props.name}></textarea>
            ) : (
                <input type={props.type} id={props.id} name={props.name} />
            )}
        </div>
    );
}

export default Input;