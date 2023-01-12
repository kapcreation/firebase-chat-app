import React from 'react'
import './Navbar.scss'
import { useAuth } from '../../context/auth'
import { Link } from 'react-router-dom'
import { logout } from '../../firebase'

const Navbar = () => {
  const { user } = useAuth()

  return (
    <div className='navbar'>
      <Link to='/'><h2 className='brand'>💬 Chat Room</h2></Link>
      {user && <div className="user">
        <img src={user?.photoURL} alt="" className="avatar" />
        <button onClick={logout}>Logout</button>
      </div>}
    </div>
  )
}

export default Navbar