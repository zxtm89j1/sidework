import React from 'react'
import {UserAuth} from '../../context/AuthContext';
import '../styles/Account.css'
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
      <h1>Hello, {user?.displayName} </h1>
      <button onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default Account
