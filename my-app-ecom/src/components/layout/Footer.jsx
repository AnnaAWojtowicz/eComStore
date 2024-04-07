import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <Link className="footerLink" to="/"><div className="bungee-outline-regular footerLogo">Ecom</div></Link>
            <p>Copyright {year}</p>
            <Link className="footerLink" to="/contact">Contact</Link>
        </footer>
    );
}

export default Footer;