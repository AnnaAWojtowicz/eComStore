import React from "react";

function Input(props) {
    const validateInput = (event) => {
        if (props.validate && event.target.value.length < 3) {
            event.target.setCustomValidity("Minimum 3 characters are required!");
        } else if (props.type === "email") {
            const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!event.target.value.match(pattern)) {
                event.target.setCustomValidity("Please enter a valid email address!");
            } else {
                event.target.setCustomValidity("");
            }
        } else {
            event.target.setCustomValidity("");
        }
    };

    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            {props.type === "textarea" ? (
                <textarea id={props.id} name={props.name} placeholder={props.placeholder} onInput={validateInput} required></textarea>
            ) : (
                <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} onInput={validateInput} required />
            )}
        </div>
    );
}

export default Input;