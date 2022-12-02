import React, { useState, useContext }  from 'react'
import {mapJSON} from '../../../OtherComponents/JSONFunctions'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 
import OrderSearch from '../fetch-components/OrderSearch'

export default function SellerAccount() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const[orderID, setorderID] = useState("");
  const[userID, setUserID] = useState(""); 
  const[minCost, setMinCost] = useState(""); 
  const[maxCost, setMaxCost] = useState("");  
  const[warehouse, setWarehouse] = useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/get-order-invoice",{
      orderID : orderID,
      userID : userID,
      minCost : minCost, 
      maxCost : maxCost
    }).then(resp =>{
      setMysqlQuery(String(resp.data.query));
      setdbResponse(mapJSON(resp.data.result)); 
    })
  }

  return (
    <div className="form-field">
      <h3>Search for an invoice using the order ID, user ID and/or item ID</h3>
      <form onSubmit={submitted}>
        <label htmlFor="orderID">Order ID: </label>
        <input 
          placeholder="ex. 123456"
          type="text"
          id="orderID"
          value={orderID}
          onChange={(e) => setorderID(e.target.value)}
        />
        <h3>Advanced search options:</h3> 
        <div className="read__orderDate">
          <div>
            <label htmlFor="orderID">Min cost: </label>
            <input 
              placeholder="ex. 0.00"
              type="text"
              id="minCost"
              value={minCost}
              onChange={(e) => setMinCost(e.target.value)}
            />
          </div>
          <div>
          <label htmlFor="maxCost">Max cost: </label>
          <input 
            placeholder="ex. 200.00"
            type="text"
            id="maxCost"
            value={maxCost}
            onChange={(e) => setMaxCost(e.target.value)}
          />
          </div>
        </div>
        <input className="submit" type="submit" value="Submit"/>
      </form>
      <OrderSearch/>
    </div>
  )
}