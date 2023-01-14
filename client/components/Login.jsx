import React from "react";

const Login = (props) => {
  return(
    <div className='login'>
      <input id='username' placeholder="Username"></input>
      <input id='password' placeholder="Password"></input>
      <button id='login-button'>Submit</button>
    </div>
  )
}

export default Login;