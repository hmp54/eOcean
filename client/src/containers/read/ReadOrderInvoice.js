import React, { useState }  from 'react'

export default function SellerAccount() {
  const[orderID, setorderID] = useState("");
  const[itemID, setItemID] = useState("");
  const[userID, setUserID] = useState(""); 
  const[startDate, setStartDate] = useState(""); 
  const[endDate, setEndDate] = useState("");  

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log(orderID)
    console.log(itemID)
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
        <label htmlFor="itemID">Item ID: </label>
        <input 
          placeholder="ex. 123456"
          type="text"
          id="itemID"
          value={itemID}
          onChange={(e) => setItemID(e.target.value)}
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

        <input className="submit" type="submit" value="Submit"/>
      </form>
      
    </div>
  )
}