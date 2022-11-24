import React, { useState }  from 'react';

export default function ReadWareHouseInfo() {
  const[WID, setWID] = useState(""); 
  const[city, setCity] = useState(""); 
  const[theState, setTheState] = useState(""); 
  const[country, setCountry]=  useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log(WID + city + theState+ country)
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
        <label htmlFor="city">City: </label>
        <input 
          placeholder="ex. Baltimore"
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label htmlFor="thestate">State: </label>
        <input 
          placeholder="ex. MD"
          type="text"
          id="thestate"
          value={theState}
          onChange={(e) => setTheState(e.target.value)}
        />
        <label htmlFor="country">Country: </label>
        <input 
          placeholder="ex. United States"
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}
