import React from 'react'
import {Navigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const Protected = ({children}) => {
    //Restricts access to account page if no user is logged in or authenticated from Google Sign In
    const {user} = UserAuth()
    if(!user) {
        return (<Navigate to ='/Signin'/>)
    }
  
    return children;
};

export default Protected
