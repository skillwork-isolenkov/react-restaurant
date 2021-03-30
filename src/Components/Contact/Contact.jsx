import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faLocationArrow, faMobile, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import lipsumTeams from '../img/lipsum-teams.png'
import { useState } from 'react'

const Contact = () => {
    const [message, setMessage] = useState('');

    const contactButton = (e) => {
        e.preventDefault();
        let email = document.querySelector('.input-email');
        let spanMsg = document.querySelector('.message');

        if (email.value !== '') {
            setMessage('Your e-mail has been submitted!');
            spanMsg.style.color = "#08bd08";
        } else {
            setMessage('Please enter your e-mail!');
            spanMsg.style.color = "red";
        }
        email.value = '';
    }
    return (
        <div className="contact">
            <div className="contact-main">
                <div className="elements">
                    <h2>Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className="email-bar">
                        <input className="input-email" type="email" required placeholder="Enter Your E-Mail ID" />
                        <a href="true" onClick={contactButton} className="orange-btn"><FontAwesomeIcon icon={faAngleDoubleRight} /></a>
                    </div>
                    <span className="message">{message}</span>
                </div>
            </div>

            <div className="contact-footer">
                <img src={lipsumTeams} alt="lipsumTeams" />
                <div className="navbar-elements">
                    <div className="about-contact">
                        <h3 className="orange">About Us</h3>
                        <p>Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes.</p>
                    </div>

                    <ul className="new-menu">
                        <h3 className="orange">New Menu</h3>
                        <li><a href="/">Pizza Peperoni</a></li>
                        <li><a href="/">Chicken Burger</a></li>
                        <li><a href="/">Spaghetti Bolognese</a></li>
                        <li><a href="/">Club Sandwich </a></li>
                    </ul>

                    <ul className="contact-us">
                        <h3 className="orange contact">Contact Us</h3>
                        <li><FontAwesomeIcon className="fa" icon={faLocationArrow} /> 685 Eva Pearl Street Baton Rouge LA</li>
                        <li><FontAwesomeIcon className="fa" icon={faMobile} />+359 87 6778588</li>
                        <li><FontAwesomeIcon className="fa" icon={faEnvelopeSquare} /> <a href="/">ivansolenkov99@gmail.com</a></li>
                    </ul>

                    <div className="hours">
                        <h3 className="orange">Opening Hours</h3>
                        <h4>Monday-Thursday</h4>
                        <span>11:00 AM - 9:00 PM</span>
                        <h4>Friday-Saturday</h4>
                        <span>11:00 AM - 5:00 PM</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;