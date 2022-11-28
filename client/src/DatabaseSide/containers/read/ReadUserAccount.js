import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 
import {mapJSON} from '../../../OtherComponents/JSONFunctions'

export default function ReadUserAccount() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const[UID, setUID] = useState(""); 
  const[email, setEmail] = useState(""); 
  const[fname, setfname] = useState(""); 
  const[lname, setlname] = useState("");  
  const[seller, setSeller] = useState(false);
  const[fInitial, setfInitial] = useState("");
  const[lInitial, setlInitial] = useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/get-user-account",{
      UID: UID, 
      email : email,
      fname : fname, 
      lname : lname,
      seller : seller,
      fInitial : fInitial,
      lInitial : lInitial
    })
  .then(resp => {
    console.log("uid" + UID)
    setMysqlQuery(String(resp.data.query));
    setdbResponse(mapJSON(resp.data.result)); 
})
  }

  return (
    <div className="form-field">
      <h3>Search for user by ID number: </h3>
      <form onSubmit={submitted}>
        <label htmlFor="UID">User ID</label>
        <input 
          placeholder="ex. 123456"
          type="text"
          id="UID"
          value={UID}
          onChange={(e) => setUID(e.target.value)}
        />
        <h3>OR:</h3>
        <label htmlFor="email">Email</label>
        <input 
          placeholder="jane.doe@gmail.com"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3>OR:</h3>
        <div>
          <label htmlFor="fname">First Name: </label>
          <input 
            placeholder="Jane"
            type="text"
            id="fname"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          />
          <label htmlFor="lname">Last Name: </label>
          <input 
            placeholder="Doe"
            type="text"
            id="lname"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          />
        </div>
        <h3>OR:</h3>
        <div>
          <label htmlFor="fInitial">First Initial: </label>
          <input 
            placeholder="J"
            type="text"
            id="fInitial"
            value={fInitial}
            onChange={(e) => setfInitial(e.target.value)}
          />
          <label htmlFor="lInitial">Last Initial: </label>
          <input 
            placeholder="D"
            type="text"
            id="lInitial"
            value={lInitial}
            onChange={(e) => setlInitial(e.target.value)}
          />
        </div>
        <label htmlFor="showSeller">Show seller information? *if applicable</label>
        <select
          id="showSeller"
          value={seller}
          onChange={(e)=> setSeller(e.target.value)}
        >
          <option value={true}>yes</option>
          <option value={false}>no</option>
        </select>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

