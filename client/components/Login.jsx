import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState({});

  const verifyUser = async (e) => {
    e.preventDefault();
    const body = {username, password};
    const data = await fetch('/user/login', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json()).catch(err => err)

    setLogin(data);
  }

  useEffect(() => {
    if (Object.hasOwn(login, 'username')) {
      setTimeout(() => {
        navigate('/game')
        }, 1000);
    } else if (Object.hasOwn(login, 'err')) {
      console.log(login.err)
    }
  })

  return(
    <div className='login'>
      Login
      <form onSubmit={verifyUser}>
        <input id='username' placeholder="Username" name='username' onChange={e => setUsername(e.target.value)}></input>
        <input id='password' placeholder="Password" name='password' onChange={e => setPassword(e.target.value)}></input>
        <button id='login-button'>Submit</button>
      </form>
    </div>
  )
}

export default Login;
