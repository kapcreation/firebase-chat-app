import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const JoinRoomInput = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate()

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("room/" + value)
  };

  return (
    <form onSubmit={handleSubmit} className='join-room-input'>
      <input 
        type="text" 
        placeholder="Enter room id..." 
        value={value}
        onChange={handleChange}
        minLength={1}
        required
      />
      <button>Go</button>
    </form>
  )
}

export default JoinRoomInput