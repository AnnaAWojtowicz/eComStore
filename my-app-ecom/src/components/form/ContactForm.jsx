import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "../Button";

function ContactForm() {
    return (
        <div>
            <form className="form">
                <Input label="Name" type="text" id="name" name="name" />
                <Input label="Email" type="text" id="email" name="email" />
                <Input label="Message" type="textarea" id="message" name="message" />
                <Link to="/"> <Button type="submit" name="Send" /></Link>
            </form>
        </div>
    );
}

export default ContactForm;