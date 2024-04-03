import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Success({ title, subtitle }) {
    return (
        <div className='container2'>
            <div className="card2">
                <h1>{title}</h1>
                <h4>{subtitle}</h4>
                <Link className="oneButtonLink" to="/"><Button className="oneButton" type="button" name="Go back to shop" /></Link>
            </div>
        </div>
    );
}

export default Success;