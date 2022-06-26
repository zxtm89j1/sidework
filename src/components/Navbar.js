import React, { useEffect, useState }from 'react'
import {Link, useLocation} from 'react-router-dom';
import "./styles/Navbar.css";
import menuIcon from './images/menu.svg'

 function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

  return (
    <div className="navbar" id={ expandNavbar ? "open" : "close"}>
        
        <div className="logo">
            <h2>sideWork</h2>
                <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
                    <img src={menuIcon} alt='menu Icon'/>
                </button>
        </div>

       
       
        <div className="links" id={ expandNavbar ? "openLink" : "closeLink"}>
            <Link className="hover" to="/">Home</Link>
            <Link className="hover" to="/AboutUs">About Us</Link>
            <Link className="hover" to="/Categories">Categories</Link>
            <Link  className="hover" to="/LogIn">Log In</Link>
            <Link  className="hover" to="/SignUp">Sign Up</Link>
        </div>
    </div>
  )
}

export default Navbar
