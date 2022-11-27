import React, {useState} from 'react'
import './auth.css'

export default function Register() {
  const[email, setEmail] = useState(); 
  const[password, setPassword]=  useState(); 
  const[fname, setfname] = useState();
  const[lname, setlname] = useState(); 
  const[cardNum, setcardNum] = useState("");
  const[billingAddress, setbillingAddress] = useState("");
  const[shippingAddress, setshippingAddress] = useState("");

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log("Username, password"); 
  }

  return (
    <div className='auth'>
      <div className='auth__content'>
        <h1>Register:</h1>
        <form onSubmit={submitted}>
        <div className="auth__flname">
          <input 
              className="auth__input"
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setfname(e.target.value)}
            />
            <input 
              className="auth__input"
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => setlname(e.target.value)}
            />
          </div>
          <input
            className="auth__input" 
            type="text" placeholder="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            className="auth__input" 
            type="text" placeholder="password" 
            value={password}  
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            className="auth__input"
            type="text"
            placeholder="Credit Card Number"
            value={cardNum}
            onChange={(e) => setcardNum(e.target.value)}
          />
          <input 
            className="auth__input"
            type="text"
            placeholder="Billing Address"
            value={billingAddress}
            onChange={(e) => setbillingAddress(e.target.value)}
          />
          <input 
            className="auth__input"
            type="text"
            placeholder="Shipping Address"
            value={shippingAddress}
            onChange={(e) => setshippingAddress(e.target.value)}
          />

          <input className="auth__submit" type="submit" value="Login"/>
          <span>Already have an account? <a className = "auth__redirect" href="/client/login">Login here!</a></span>
        </form> 
      </div>
    </div>
  )
}
