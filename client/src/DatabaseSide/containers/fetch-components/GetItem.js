import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 
import {mapJSON} from '../../../OtherComponents/JSONFunctions'
import './fetch-components.css'

export default function GetItem() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const[itemName, setItemName] = useState(""); 

  const submitted = (e) =>{
    console.log("trying to set name")
    e.preventDefault(); 
    Axios.post("http://localhost:3001/item-search",{
      itemName : itemName
    })
  .then(resp => {
    console.log("trying to output")
    setMysqlQuery(String(resp.data.query));
    setdbResponse(mapJSON(resp.data.result)); 
  })
  }

  return (
    <div className="search-container">
      <h4>Don't know the item ID? Search for one here by name: </h4>
      <form onSubmit={submitted}>
          <div className = "itemSearch">
              <input 
                placeholder="Nike"
                type="text"
                id="itemSearch"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
          <input className="submit" type="submit" value="Submit"/>
        </form>
    </div>
  )
}