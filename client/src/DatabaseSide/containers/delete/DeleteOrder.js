import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu';

export default function DeleteUserAccount() {
  const[orderID, setID] = useState(""); 
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/delete-order-invoice",{
      orderID : orderID
    }).then(resp =>{
      setMysqlQuery(resp.data.query);
      setdbResponse(resp.data.dbResponse); 
    })
  }

  return (
    <div className="form-field">
      <h3>Enter the ID of the order you wish to delete: </h3>
      <form onSubmit={submitted}>
        <label htmlFor="orderID">Item ID: </label>
        <input 
          type="text"
          placeholder="ex. 123456"
          value={orderID}
          onChange={(e)=> setID(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}
