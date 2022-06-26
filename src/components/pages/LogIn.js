import React, { useState } from 'react'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import LoginForm from '../LoginForm';
import '../styles/LogIn.css'
import hello from '../images/hello.svg';


const LogIn = () => {
    const adminUser = {
        email:"email@admin.com",
        password: "admin123"
      }
    
      const [user, setUser] = useState({name:"", email:""});
      const [error, setError] = useState("");
    
      const Login = details => {
        console.log(details)
    
        if (details.email === adminUser.email && details.password === adminUser.password){
          console.log("Logged in");
          setUser({
            name: details.name,
            email: details.email
          });
        } else {
          setError("Try Again");
        }
      }

      // Not really used right now since I'll just redirect to home with PROCEED
     // const Logout = () => {
     //   setUser({name:"" , email:""});
     // }

  return (
    <div className='LogInBox'>
          {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <img src={hello} className='helloIcon' alt='A greeting sign'/>
          <button><Link className="hover" to="/">PROCEED</Link></button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  )
}

export default LogIn
