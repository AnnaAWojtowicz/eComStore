import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="bungee-outline-regular footerLogo">Ecom</div>
            <p>Copywright {year}</p>
            <div><button>Contact </button></div>
        </footer>
    );
}

export default Footer;