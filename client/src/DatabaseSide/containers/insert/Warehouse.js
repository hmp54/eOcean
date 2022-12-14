import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 

export default function Warehouse() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const [city, setCity] = useState(""); 
  const [state, setState] = useState(""); 
  const [country, setCountry] = useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/create-warehouse",{
      city : city,
      state : state,
      country : country
    }).then(resp =>{
      setMysqlQuery(resp.data.query);
      setdbResponse(resp.data.dbResponse); 
    })
  }

  return (
    <div className="form-field warehouse">
      <h2>Create a New Warehouse Location: </h2>
      <form onSubmit={submitted}>
        <label htmlFor='city'>City:</label>
        <input
          placeholder='city'
          type='text'
          id='city'
          name='city'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label htmlFor='state'>State:</label>
        <input
          placeholder='state'
          type='text'
          id='state'
          name='state'
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <label htmlFor='country'>Country:</label>
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

/* 
 * warehouse id (auto)
 * city
 * state
 * country
 * 
 * 

        <input
          placeholder=''
          type='text'
          id=''
          name=''
          value={}
          onChange={(e) => (e.target.value)}
        />
*/
