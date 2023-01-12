import React, { useState } from 'react'
import './Login.scss'
import { useAuth } from '../../context/auth';

const Login = () => {
  const { login } = useAuth()
  
  async function handleLogin() {  
    try {
      await login()
    } catch (err){
      console.error(err)
    }
  }
  
  return (
    <div className='unauthenticated-app'>
      <h2>Log in to join a chat room!</h2>
      <button onClick={handleLogin} className="login-btn">
        Login with Google
      </button>
    </div>
  )
}

export default Login