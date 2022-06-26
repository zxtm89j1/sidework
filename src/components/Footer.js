import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import "./styles/Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
     
            <div className='footerSocials'>
            <p> Copyright &copy; 2022 &nbsp; <span>sideWork</span></p>
            </div>

            <div className='footerAbout'>
                <h2>Contact Us</h2>
                <p>+123-456-7890</p>
                <p>123 Main St. KDG City</p>
                <p>sideWork@sideWork.com</p>
            </div>

        </div>
    );
}

export default Footer;

