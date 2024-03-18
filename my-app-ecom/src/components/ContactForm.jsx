import React from "react";

function ContactForm() {
    return (
        <div>
            <form className="form">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" />
                <label for="email">Email</label>
                <input type="text" id="email" name="email" />
                <label for="message">Message</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;