import React, { useState }  from 'react'

export default function User() {
  const[fname, setfname] = useState("");
  const[lname, setlname] = useState("");
  const[email, setemail] = useState("");
  const[cardNum, setcardNum] = useState("");
  const[billingAddress, setbillingAddress] = useState("");
  const[shippingAddress, setshippingAddress] = useState("");
  const date = new Date(); 

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log("Created new user:" + fname + lname + email + billingAddress + shippingAddress)
  }

  return (
    <div className="insert__option user">
      <h2>Create new user:</h2>
      <form onSubmit={submitted}>
        <label htmlFor="fname" >First Name:</label>
        <input 
          placeholder="First name"
          type="text" 
          id="fname" 
          name="fname" 
          value={fname}
          onChange={(e) => setfname(e.target.value)}
        />
        <label htmlFor="lname">Last Name:</label>
        <input 
          placeholder="Last name"
          type="text" 
          id="lname" 
          name="lname" 
          value={lname}
          onChange = {(e) => setlname(e.target.value)}
        />
        <label htmlFor="email">email:</label>
        <input 
          placeholder="email"
          type="text" 
          id="email" 
          name="email" 
          value={email}
          onChange = {(e) => setemail(e.target.value)}
        />
        <label htmlFor="cardNum">Credit Card Number:</label>
        <input 
          placeholder="Credit Card Number"
          type="text" 
          id="cardNum" 
          name="cardNum" 
          value={cardNum}
          onChange = {(e) => setcardNum(e.target.value)}
        />
        <label htmlFor="billingAddress">Billing Address:</label>
        <input 
          placeholder="Billing Address"
          type="text" 
          id="billingAddress" 
          name="billingAddress" 
          value={billingAddress}
          onChange = {(e) => setbillingAddress(e.target.value)}
        />
        <label htmlFor="shippingAddress">Shipping Address:</label>
        <input 
          placeholder="Shipping Address"
          type="text" 
          id="shippingAddress" 
          name="shippingAddress" 
          value={shippingAddress}
          onChange = {(e) => setshippingAddress(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

/*
controlled inputs youtube tutorial: https://www.youtube.com/watch?v=IkMND33x0qQ&ab_channel=TheNetNinja
*/