import React, { useState, useContext }  from 'react'
import {mapJSON} from '../../../OtherComponents/JSONFunctions'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 

export default function SellerAccount() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const[orderID, setorderID] = useState("");
  const[itemID, setItemID] = useState("");
  const[userID, setUserID] = useState(""); 
  const[startDate, setStartDate] = useState(""); 
  const[endDate, setEndDate] = useState("");  
  const[orderStatus, setOrderStatus] = useState(""); 
  const[warehouse, setWarehouse] = useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/get-order-invoice",{
      orderID : orderID
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
            <label htmlFor="orderID">Start Date: </label>
            <input 
              placeholder="ex. 1/1/2022"
              type="text"
              id="orderID"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
          <label htmlFor="orderID">End Date: </label>
          <input 
            placeholder="ex. 2/2/2022"
            type="text"
            id="orderID"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          </div>
        </div>
        <label htmlFor="orderStatus">Order Status: </label>
        <select
            id="orderStatus"
            value={orderStatus}
            onChange={(e)=> setOrderStatus(e.target.value)}
        >
            <option></option>
            <option value="Paid">Paid</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
        </select>
        <input className="submit" type="submit" value="Submit"/>
      </form>
      
    </div>
  )
}