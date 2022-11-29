import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 

export default function UpdateUserAccount() {
  const[UID, setUID] = useState(0); 
  const[fname, setfname] = useState("");
  const[lname, setlname] = useState("");
  const[email, setemail] = useState("");
  const[billingAddress, setbillingAddress] = useState("");

  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/update-user",{
      UID : UID,
      fname : fname,
      lname : lname,
      email : email,
      billingAddress : billingAddress
    }).then(resp =>{
      setMysqlQuery(resp.data.query);
      setdbResponse(resp.data.dbResponse); 
    })
  }

  return (
    <div className='form-field'>
    <h3>Enter the UID of the user account you wish to edit: </h3>
    <form onSubmit={submitted}>
      <h3>First, enter the UID of the account you want to edit: </h3>
        <label htmlFor="UID">UID:</label>
        <input 
          type="number"
          placeholder="ex. 123456"
          value={UID}
          onChange={(e)=> setUID(e.target.value)}
        />
      <h3>Next, enter the fields you want to change: </h3>
      <p>*Submit one field at a time</p>
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
        <label htmlFor="billingAddress">Billing Address:</label>
        <input 
          placeholder="Billing Address"
          type="text" 
          id="billingAddress" 
          name="billingAddress" 
          value={billingAddress}
          onChange = {(e) => setbillingAddress(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
  </div>
  )
}
