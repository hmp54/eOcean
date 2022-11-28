import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 

export default function ReadUserAccount() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const[UID, setUID] = useState(""); 
  const[email, setEmail] = useState(""); 
  const[fname, setfname] = useState(""); 
  const[lname, setlname] = useState("");  

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/get-user-account",{
      UID: UID, 
    })
  .then(resp => {
    console.log("uid" + UID)
    setMysqlQuery("congrats! your database works (kind of). If you're seeing this message it means you forgot to set the useContext() for the MySql query. Whoops!")
    setdbResponse(resp.data); 
  })
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
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

