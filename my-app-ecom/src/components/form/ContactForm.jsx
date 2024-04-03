import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "../Button";

function ContactForm() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/contactSuccess");
    };
    return (
        <div className="container">
            <div className="card2">
                <h1>Have a question?</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <Input placeholder="Name" type="text" id="name" name="name" validate />
                    <Input placeholder="Email" type="email" id="email" name="email" />
                    <Input placeholder="Subject" type="text" id="subject" name="subject" validate />
                    <Input placeholder="Message" type="textarea" id="message" name="message" validate />
                    <Button className="oneButton2" type="submit" name="Send" />
                </form>
            </div>
        </div>
    );
}

export default ContactForm;