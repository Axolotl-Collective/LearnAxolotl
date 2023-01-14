import React from "react";

const Signup = (props) => {
  return(
    <div className='signup'>
      Sign Up
      <input id='username' placeholder="New Username"></input>
      <input id='password' placeholder="New Password"></input>
      <button id='login-button'>Submit</button>
    </div>
  )
};

export default Signup;