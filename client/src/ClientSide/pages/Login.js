import React, {useState} from 'react'
import './auth.css'

export default function Login() {
  const[email, setEmail] = useState(); 
  const[password, setPassword]=  useState(); 

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log("Username, password"); 
  }

  return (
    <div className='auth'>
      <div className='auth__content'>
        <h1>Login:</h1>
        <form onSubmit={submitted}>
          <input className="auth__input" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input className="auth__input" type="text" placeholder="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
          <input className="auth__submit" type="submit" value="Login"/>
          <span className="error">Unable to log in - check email/password!</span>
          <span>Don't have an account? <a className = "auth__redirect" href="/client/register">Register here</a>.</span>
        </form>
      </div>
    </div>
  )
}
