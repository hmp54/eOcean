import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 

export default function Warehouse() {
  const [city, setCity] = useState(""); 
  const [state, setState] = useState(""); 
  const [country, setCountry] = useState(""); 
  const [WID, setWID] = useState(""); 
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/update-warehouse",{
      city : city,
      state : state, 
      country : country, 
      WID : WID
    }).then(resp =>{
      setMysqlQuery(resp.data.query);
      setdbResponse(resp.data.dbResponse); 
    })
  }

  return (
    <div className="form-field warehouse">      
      <form onSubmit={submitted}>
      <h3>Which warehouse do you want to edit? </h3>
        <label htmlFor="WID">Warehouse ID: </label>
            <input 
              placeholder="ex. 123456"
              type="text"
              id="WID"
              value={WID}
              onChange={(e) => setWID(e.target.value)}
            />

        <h3>Enter the new warehouse location: </h3>
        <p>*required.</p>
        <label htmlFor='city'>City:*</label>
        <input
          placeholder='city'
          type='text'
          id='city'
          name='city'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label htmlFor='state'>State:*</label>
        <input
          placeholder='state'
          type='text'
          id='state'
          name='state'
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <label htmlFor='country'>Country:*</label>
        <input
          placeholder='country'
          type='text'
          id='country'
          name='country'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
      
    </div>
  )
}