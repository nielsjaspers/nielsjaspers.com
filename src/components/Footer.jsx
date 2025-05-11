import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <hr />
            <p>
                © {currentYear} Niels Jaspers.
            </p>
        </footer>
    );
}

export default Footer;

