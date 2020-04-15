import React from 'react';
// import { Link } from 'react-router-dom';


// This component handles our login form and has a link to the register form
const SignIn = (props) => {

  return (
    <div className = "StartUp">
      <h2>Sign In</h2>
      <div className = "formStyle">
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <input name="email" placeholder="email"type="text" value={props.authFormData.email} onChange={props.handleChange} />
        <input name="password" placeholder="password" type="password" value={props.authFormData.password} onChange={props.handleChange} />
        <button>Sign In</button>
        </form>
      </div>
      
    </div>
  );
}

export default SignIn;
