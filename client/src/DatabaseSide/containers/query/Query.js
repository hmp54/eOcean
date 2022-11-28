import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 

import {
  BrowserRouter,
  Route,
  Routes,
  useMatch,
  Link
} from 'react-router-dom';

export default function Query() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const [theQuery, setTheQuery] = useState("");

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log("THE QUERY: " + theQuery)
    Axios.get("http://localhost:3001/custom-query").then(resp =>{
     console.log(resp); 
      setMysqlQuery(String(resp.data.query))
      setdbResponse(String(resp.data.result)); 
    })
  }

  return (
    <div className='form-field'>
      <h1 className="container__header">Query</h1>
      <form onSubmit={submitted}>
        <label htmlFor='category'>Enter a custom MySQL query here: </label>
        <input 
            placeholder="ex. 'SELECT * FROM users;'"
            type="text" 
            id="category" 
            name="category" 
            value={theQuery}
            onChange = {(e) => setTheQuery(e.target.value)}
          />
          <input className="submit" type="submit" value="Submit"/>      
      </form>
    </div>
  )
}
