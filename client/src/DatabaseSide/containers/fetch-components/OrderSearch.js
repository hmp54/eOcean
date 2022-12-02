import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 
import {mapJSON} from '../../../OtherComponents/JSONFunctions'
import './fetch-components.css'

export default function OrderSearch() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const[fname, setfname] = useState(""); 
  const[lname, setlname] = useState("");  

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/order-search",{
      fname : fname, 
      lname : lname
    })
  .then(resp => {
    console.log("trying to output")
    setMysqlQuery(String(resp.data.query));
    setdbResponse(mapJSON(resp.data.result)); 
  })
  }

  return (
    <div className="search-container">
      <h4>Don't know thes order ID? Search for one here by customer's name: </h4>
      <form onSubmit={submitted}>
        <div className='user-search'>
          <div>
          <label htmlFor="fname">First Name: </label>
              <input 
                placeholder="Jane"
                type="text"
                id="fname"
                value={fname}
                onChange={(e) => setfname(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lname">Last Name: </label>
              <input 
                placeholder="Doe"
                type="text"
                id="lname"
                value={lname}
                onChange={(e) => setlname(e.target.value)}
              /> 
            </div>
          </div>
          <input className="submit" type="submit" value="Submit"/>
        </form>
    </div>
  )
}