import React from 'react'
import {Navigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const Protected2 = ({children}) => {
    //Restricts access to sign up page if user is logged in or authenticated from Google Sign In
    const {user} = UserAuth()
    if(user != null) {
        return (<Navigate to ='/Account'/>)
    }
  
    return children;
};

export default Protected2