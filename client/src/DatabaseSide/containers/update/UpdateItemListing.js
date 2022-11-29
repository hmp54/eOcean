import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 


export default function ItemListing() {
  const [condition, setCondition] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [shippingPrice, setShippingPrice] = useState("");
  const [itemID, setItemID] = useState(""); 

  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/update-listings",{
      condition: condition,
      itemPrice : itemPrice,
      shippingPrice : shippingPrice,
      itemID : itemID
    }).then(resp =>{
      setMysqlQuery(resp.data.query);
      setdbResponse(resp.data.dbResponse); 
    })
  }

  return (
    <div className="form-field item-listing">
      <h2>Edit existing item listing: </h2>
      <form onSubmit={submitted}>
        <h3>Enter ID for the item listing you want to edit: </h3>
        <label htmlFor="itemID">Order ID: </label>
        <input 
          id="itemID" 
          placeholder="ex. 123456"
          value={itemID}
          onChange={(e) => setItemID(e.target.value)}/>
        <h3>Enter the fields you want to edit: </h3>
        <label htmlFor="condition">Item condition: </label>
        <select
          id="condition"
          value={condition}
          onChange={(e)=>setCondition(e.target.value)}
        >
          <option></option>
          <option value="Brand New">Brand New</option>
          <option value="Used - Excellent">Used - Excellent</option>
          <option value="Used - Good">Used - Good</option>
          <option value="Used - Fair">Used - Fair</option>
        </select>
        <label htmlFor="itemPrice">Item Asking Price: </label>
        <input
          placeholder='ex: $10.99'
          type='text'
          id='itemPrice'
          name='itemPrice'
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <label htmlFor="shippingPrice">Shipping Price: </label>
        <input
          placeholder='ex: $4.99'
          type='text'
          id='shippingPrice'
          name='shippingPrice'
          value={shippingPrice}
          onChange={(e) => setShippingPrice(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

/*
item id
product id 
condition 
warehouse id
item price
shipping price

        <input
          placeholder=''
          type='text'
          id=''
          name=''
          value={}
          onChange={(e) => (e.target.value)}
        />
*/