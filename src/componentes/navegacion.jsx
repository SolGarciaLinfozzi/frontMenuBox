import React, { useEffect } from 'react';
import '../css/navbar.css';

const Navbar = () => {
    useEffect(() => {
        //const nav = document.querySelector('.navSticky');
        window.addEventListener('scroll', fixNav);

        return () => {
            window.removeEventListener('scroll', fixNav);
        };
    }, []);

    function fixNav() {
        const nav = document.querySelector('.navSticky');
        if (window.scrollY > nav.offsetHeight + 150) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    }

    return (
        <div className="fontNavbar">
            <div className="bodySticky">
                <nav className="navSticky">
                    <div className="containerSticky ">
                        <h2 className="logoSticky  ">
                            <a  href="/"> MenuBox </a>
                        </h2>
                        <ul>
                            <li>
                                <a href="./" className="current">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="./nosotros">Nosotros</a>
                            </li>
                            <li>
                                <a href="./FAQ">FAQ</a>
                            </li>
                            <li>
                                <a href="./contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
