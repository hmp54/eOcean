import React, { useState }  from 'react'
import Axios from 'axios'; 

export default function User() {
  const[fname, setfname] = useState("");
  const[lname, setlname] = useState("");
  const[email, setemail] = useState("");
  const[uPassword, setPassword] = useState(""); 
  const[billingAddress, setbillingAddress] = useState("");
  const[isSeller, setIsSeller] = useState(""); 

  //sends form variables to back-ensd upom form submission
  const submitted = (e) =>{
    e.preventDefault(); 
    console.log("Created new user:" + fname + lname + email + billingAddress); 
    console.log("Attempting to post to localhost:3001/create-new-user");
    Axios.post("http://localhost:3001/create-new-user", {
      fname : fname, 
      lname : lname, 
      email: email, 
      uPassword : uPassword, 
      billingAddress : billingAddress }).then(() =>{
        console.log("Succesfully added new user to database.");
      })
  }

  return (
    <div className="form-field user">
      <h2>Create new user:</h2>
      <form onSubmit={submitted}>
        <div className="insert__flname" >
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
        </div>
        <label htmlFor="email">email:</label>
        <input 
          placeholder="email"
          type="text" 
          id="email" 
          name="email" 
          value={email}
          onChange = {(e) => setemail(e.target.value)}
        />
        <label htmlFor="password">password:</label>
        <input 
          placeholder="password"
          type="text" 
          id="password" 
          name="password" 
          value={uPassword}
          onChange = {(e) => setPassword(e.target.value)}
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
        <label htmlFor="isASeller">Is this user also a seller? </label>
        <p className="msg-small">*This will create a seller profile for them as well</p>
        <select
          id="isASeller"
          value={isSeller}
          onChange={(e)=> setIsSeller(e.target.value)}
        >
          <option value="seller">Yes</option>
          <option value="notSeller">No</option>
        </select>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

/*
controlled inputs youtube tutorial: https://www.youtube.com/watch?v=IkMND33x0qQ&ab_channel=TheNetNinja
*/