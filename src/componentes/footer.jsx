import React from 'react';
import '../css/footer.css';

const Footer = () => {
    return (
        <div className="cajaFooter font fontFooter">
            <hr />
            <div className="headerFooter">
                <p>&copy; 2023 Company, Inc</p>
                <div>
                    <p>Autor: María Sol García Linfozzi</p>
                    <p>Contacto: msolgarcialinf@gmail.com</p>
                </div>
                <ul className="menuFooter">MenuBox</ul>
            </div>
            <p className="parrafoFooter">Provincia de Buenos Aires.</p>
        </div>
    );
};

export default Footer;