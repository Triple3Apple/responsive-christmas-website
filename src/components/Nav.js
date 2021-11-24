import React from 'react';
import Logo from '../assets/img/logo.png';
import NavImg from '../assets/img/gingerbread-man.png';


const Nav = () => {
    return (
        <div className="nav container">
            <a href="#" className="nav-logo">
                <img src={Logo} alt="" className="nav-logo-img" />
            </a>
            <div className="nav-menu" id="nav-menu">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#gifts" className="nav-link">Gifts</a>
                    </li>
                    <li className="nav-item">
                        <a href="#special-offer" className="nav-link">Special Offer</a>
                    </li>

                    <a href="#" className="button button-ghost">Support</a>
                </ul>


                <div className="nav-close" id="nav-close">
                    <i class='bx bx-x'></i>
                </div>

                <img src={NavImg} alt="" className="nav-img" />
            </div>

            <div className="nav-toggle" id="nav-toggle">
                <i class='bx bx-grid-alt' ></i>
            </div>
        </div>
    )
}

export default Nav;
