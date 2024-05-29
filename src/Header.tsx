import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import PM from "src/assets/images/PM.svg";
import OutsideClickHandler from 'react-outside-click-handler';
import {ALLIES} from "src/pages/Allies/Allies";
import {CONTACT} from "src/pages/Contact/Contact";
import {ELEMENTS} from "src/pages/Examples/Elements";
import {GENERIC} from "src/pages/Examples/Generic";
import {PRICING} from "src/pages/Pricing/Pricing";
import {REVIEWS} from "src/pages/Reviews/Reviews";
import {SERVICES} from "src/pages/Services/Services";

export default function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        if (isMenuVisible) {
            document.body.classList.add('is-menu-visible');
        } else {
            document.body.classList.remove('is-menu-visible');
        }
    }, [isMenuVisible]);

    const toggleMenu = (e) => {
        e.preventDefault();
        setIsMenuVisible(!isMenuVisible);
    };

    const handleOutsideClick = () => {
        if (isMenuVisible) {
            setIsMenuVisible(false);
        }
    };

    return (
        <header id="header">
            <img
                src={PM}
                alt="Logo"
                width="50"
                height="50"
                className="d-inline-block align-text-center pr-5"
                style={{
                    backgroundColor: 'rgba(255,255,255, 1)', // keep at white and 1!
                    backgroundSize: '90%',
                    borderRadius: '50%',
                    margin: '5px',
                }}
            />
            <h1 style={{paddingLeft: '60px'}}>
                <a href="/">Profession Mate</a>
            </h1>
            <nav id="nav">
                <ul>
                    <li className="special">
                        <a href="#menu" className="menuToggle" onClick={toggleMenu}><span>Menu</span></a>
                        {isMenuVisible && (
                            <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                                <div id="menu">
                                    <ul>
                                        <li><Link to="/" onClick={() => setIsMenuVisible(false)}>Home</Link></li>
                                        <li><Link to={"/" + SERVICES}
                                                  onClick={() => setIsMenuVisible(false)}>Service</Link></li>
                                        <li><Link to={"/" + ALLIES}
                                                  onClick={() => setIsMenuVisible(false)}>Allies</Link></li>
                                        <li><Link to={"/" + CONTACT}
                                                  onClick={() => setIsMenuVisible(false)}>Contact</Link></li>
                                        <li><Link to={"/" + REVIEWS}
                                                  onClick={() => setIsMenuVisible(false)}>Reviews</Link>
                                        </li>
                                        <li><Link to={"/" + PRICING}
                                                  onClick={() => setIsMenuVisible(false)}>Pricing</Link></li>


                                        <li><Link to={"/" + GENERIC}
                                                  onClick={() => setIsMenuVisible(false)}>Generic</Link></li>
                                        <li><Link to={"/" + ELEMENTS}
                                                  onClick={() => setIsMenuVisible(false)}>Elements</Link></li>
                                    </ul>
                                </div>
                            </OutsideClickHandler>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
