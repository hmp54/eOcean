import React, { useState, useContext }  from 'react'
import {mapJSON} from '../../../OtherComponents/JSONFunctions'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu';

export default function ReadWareHouseInfo() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const[WID, setWID] = useState(""); 
  const[city, setCity] = useState(""); 
  const[theState, setTheState] = useState(""); 
  const[country, setCountry]=  useState(""); 
  const[showItems, setShowItems] = useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/get-warehouse",{
      WID : WID
    }).then(resp =>{
      setMysqlQuery(String(resp.data.query));
      setdbResponse(mapJSON(resp.data.result)); 
    })
  }

  return (
    <div className="form-field" >
      <form onSubmit={submitted}>
        <h3>Search for individual warehouse by ID: </h3>
        <label htmlFor="WID">Warehouse ID: </label>
        <input 
          placeholder="ex. 123456"
          type="text"
          id="WID"
          value={WID}
          onChange={(e) => setWID(e.target.value)}
        />
        <h3>Search for warehouses by city: </h3>
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
        <label htmlFor="showItems">Show items located in warehouse? </label>
            <select
                id="showItems"
                value={showItems}
                onChange={(e)=> setShowItems(e.target.value)}
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
