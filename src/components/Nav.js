import { useState } from 'react';
import Logo from '../assets/img/logo.png';
import NavImg from '../assets/img/gingerbread-man.png';


const Nav = () => {

    const [menuShown, setMenuVisibility] = useState(false);

    const ToggleMenu = () => {
        console.log('toggled menu');
        setMenuVisibility(!menuShown);
    }

    const RemoveMenu = () => {
        console.log('removed menu');
        setMenuVisibility(false);
    }

    return (
        <div className="nav container">
            <a href="#" className="nav-logo">
                <img src={Logo} alt="" className="nav-logo-img" />
                Christmas
            </a>
            <div className={`nav-menu ${(menuShown === true) ? 'show-menu' : ''}`} id="nav-menu">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#home" className="nav-link" onClick={() => RemoveMenu()}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={() => RemoveMenu()}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#gifts" className="nav-link" onClick={() => RemoveMenu()}>Gifts</a>
                    </li>
                    <li className="nav-item">
                        <a href="#special-offer" className="nav-link" onClick={() => RemoveMenu()}>Special Offer</a>
                    </li>

                    <a href="#" className="button button-ghost" onClick={() => RemoveMenu()}>Support</a>
                </ul>


                <div className="nav-close" id="nav-close">
                    <i className='bx bx-x' onClick={() => ToggleMenu()}></i>
                </div>

                <img src={NavImg} alt="" className="nav-img" />
            </div>

            <div className="nav-toggle" id="nav-toggle">
                <i className='bx bx-grid-alt' onClick={() => ToggleMenu()}></i>
            </div>
        </div >
    )
}

export default Nav;
