import React, { useEffect, useState }from 'react'
import {Link, useLocation} from 'react-router-dom';
import "./styles/Navbar.css";
import menuIcon from './images/menu.svg'
import {UserAuth} from '../context/AuthContext'

 function Navbar() {
    //get user Details
    const {user, logOut} = UserAuth();


    //sign out google account
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

  return (
    <div className="navbar" id={ expandNavbar ? "open" : "close"}>
        
        <div className="logo">
            <h2>sideWork</h2>
            <p>{ user?.displayName ? (<p>Hello, {user?.displayName}</p>) 
            : 
            (<p><Link to='/Signin'>Sign in</Link></p>) }</p>
                <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
                    <img src={menuIcon} alt='menu Icon'/>
                </button>
        </div>
       
        <div className="links" id={ expandNavbar ? "openLink" : "closeLink"}>
            <Link className="hover" to="/">Home</Link>
            <Link className="hover" to="/AboutUs">About Us</Link>
            <Link  className="hover" to="/Account">Account</Link>

            { user?.displayName ? (<button className='buttonLogOut' onClick={handleSignOut}>Logout</button>) 
            : 
            ( <>
                <Link  className="hover" to="/Signin">Sign In</Link>
                <Link  className="hover" to="/SignUp">Sign Up</Link>
                </>
                )}

        </div>
    </div>
  )
}

export default Navbar
