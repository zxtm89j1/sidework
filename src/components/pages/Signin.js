import React, { useEffect} from 'react'
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../context/AuthContext';
import '../styles/Signin.css';
import hello from '../images/hello.svg';
import {useNavigate} from 'react-router-dom';

const Signin = () => {

  // get user detail authentication
    const {googleSignIn, user} = UserAuth();
    

// navigate to account page once successfully logged in
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error) 
        }
    }

    //redirect to account page if there is a user!
    useEffect (() => {
      if (user != null) {
        navigate('/Account')
      }

    }, [user]);

  return (
    <div className='Login2Main'>
      <div className='googleButton'>
      <h1>Hello!</h1>
      <img src={hello} alt='Hello!' className='helloLog'/>
        <GoogleButton onClick={handleGoogleSignIn}/>
      </div>
    </div>
  )
}

export default Signin;
