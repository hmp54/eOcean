import React, { useState }  from 'react'

export default function SellerAccount() {
  const[SID, setSID] = useState("");
  const[email, setEmail] = useState(""); 
  const[fname, setfname] = useState(""); 
  const[lname, setlname] = useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
  }

  return (
    <div className="form-field">
      <h3>Search for seller by ID number, name, and/or email:</h3>
      <form onSubmit={submitted}>
        <label htmlFor="SID">Seller ID: </label>
        <input 
          placeholder="ex. 123456"
          type="text"
          id="SID"
          value={SID}
          onChange={(e) => setSID(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input 
          placeholder="jane.doe@gmail.com"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="fname">First Name: </label>
        <input 
          placeholder="Jane"
          type="text"
          id="fname"
          value={fname}
          onChange={(e) => setfname(e.target.value)}
        />
        <label htmlFor="fname">Last Name: </label>
        <input 
          placeholder="Doe"
          type="text"
          id="lname"
          value={lname}
          onChange={(e) => setlname(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}






