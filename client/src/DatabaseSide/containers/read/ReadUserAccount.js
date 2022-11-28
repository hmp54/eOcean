import React, { useState }  from 'react'

export default function ReadUserAccount() {
  const[UID, setUID] = useState(""); 
  const[email, setEmail] = useState(""); 
  const[fname, setfname] = useState(""); 
  const[lname, setlname] = useState(""); 
  const [showSeller, setShowSeller] = useState(false); 

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log(UID + email); 
    console.log(showSeller); 
  }

  return (
    <div className="form-field">
      <h3>Search for user by ID number, name, and/or email:</h3>
      <form onSubmit={submitted}>
        <label htmlFor="UID">User ID</label>
        <input 
          placeholder="ex. 123456"
          type="text"
          id="UID"
          value={UID}
          onChange={(e) => setUID(e.target.value)}
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
        <label htmlFor="showSeller">Also show user's seller status/information?</label>
        <select
            id="showSeller"
            value={showSeller}
            onChange={(e)=> setShowSeller(e.target.value)}
        >
            <option></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

/*
find user through: 
-email OR uid 



BOILDERPLATE FORM CODE: 
import React, { useState }  from 'react'


  const submitted = (e) =>{
    e.preventDefault(); 
  }

  return (
    <div>
      <form onSubmit={submitted}>
        <label htmlFor=""></label>
        <input 
          placeholder=""
          type="text"
          id=""
          value={}
          onChange={(e) => setfname(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
*/
