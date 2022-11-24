import React, { useState }  from 'react';

export default function ReadWareHouseInfo() {
  const[WID, setWID] = useState(""); 
  const[city, setCity] = useState(""); 
  const[theState, setTheState] = useState(""); 
  const[country, setCountry]=  useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
  }

  return (
    <div className="form-field" >
      <form onSubmit={submitted}>
        <label htmlFor="WID">Warehouse ID: </label>
        <input 
          placeholder="ex. 123456"
          type="text"
          id="WID"
          value={WID}
          onChange={(e) => setWID(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}