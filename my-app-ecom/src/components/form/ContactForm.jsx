import React from "react";
import Input from "./Input";

function ContactForm() {
    return (
        <div>
            <form className="form">

                <Input label="Name" type="text" id="name" name="name" />
                <Input label="Email" type="text" id="email" name="email" />
                <Input label="Message" type="textarea" id="message" name="message" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;