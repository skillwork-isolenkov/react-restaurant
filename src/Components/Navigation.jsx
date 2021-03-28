import { Link } from "react-router-dom";
import logo from './img/lipsum-team.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    let timesClicked = 0;

    const burgerButton = (e) => {
        e.preventDefault();
        timesClicked++;

        let burgerMenu = document.querySelector('#burger-menu');
        burgerMenu.style.marginLeft = "55px"

        if (timesClicked % 2 === 0) {
            document.querySelector('.navbar ul').style.display = "none";
        } else {
            document.querySelector('.navbar ul').style.display = "block";
        }
    }

    return (
        <div className="navigation">
            <div className="navbar">
                <img src={logo} alt="logo" />
                <a href="true" onClick={burgerButton} id="burger-menu"><FontAwesomeIcon icon={faBars} /></a>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/reservation">Reservation</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;