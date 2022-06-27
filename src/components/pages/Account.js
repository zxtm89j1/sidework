import React from 'react'
import {UserAuth} from '../../context/AuthContext';
import '../styles/Account.css'
import sleeping from '../images/sleepingGif.gif'

const Account = () => {
    const { logOut, user } = UserAuth();


    //sign out google account
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    };


  return (
    <div className='accountMain'>
        <div className='accountHeading'>
            <h1>Hello, {user?.displayName} </h1>
            <button onClick={handleSignOut}>Logout</button>
      </div>

      <div className='accountBody'>
            <div className='accountSubBody'>
                <h1>Team</h1>
            </div>
            <div className='accountSubBody2'>
                <img src={sleeping} alt='Sleeping Dev' className='sleeping'/>
                <h2>Coming Soon<span className='blink'>.</span> 
                <span className='blink'>.</span> 
                <span className='blink'>.</span> </h2>
            </div>
      </div>
    </div>
  )
}

export default Account
