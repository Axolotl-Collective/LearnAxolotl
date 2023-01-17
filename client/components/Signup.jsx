import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [created, setCreated] = useState({});

  const createUser = async (e) => {
    e.preventDefault();
    const body = { username, password };
    console.log(body);

    const data = await fetch('/user/signup', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())

    setCreated(data)
  }

  useEffect(() => {
    if (Object.hasOwn(created, 'username')) {
      setTimeout(() => {
      navigate('/game')
      }, 1000);
    } else if (Object.hasOwn(created, 'err')) {
      console.log(created.err)
    }
  })

  return(
    <div className='signup'>
      Sign Up
      <form onSubmit={createUser}>
        <input id='username' placeholder="New Username" name="username" onChange={e => setUsername(e.target.value)}></input>
        <input id='password' placeholder="New Password" name="password" onChange={e => setPassword(e.target.value)}></input>
        <button id='login-button' type="submit">Submit</button>
      </form>
    </div>
  )
};

export default Signup;
