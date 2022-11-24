import React, { useState }  from 'react'

export default function SellerAccount() {
  const[orderID, setorderID] = useState("");
  const[itemID, setItemID] = useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log(orderID)
    console.log(itemID)
  }

  return (
    <div className="form-field">
      <h3>Search for an invoice using the order ID and/or item ID</h3>
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
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}