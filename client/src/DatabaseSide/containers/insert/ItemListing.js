import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 

export default function ItemListing() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const [sellerID, setSellerID] = useState("");
  const [productID, setProductID] = useState("");
  const [condition, setCondition] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [shippingPrice, setShippingPrice] = useState("");


  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/create-item-listing",{
      sellerID : sellerID,
      productID :productID,
      condition :condition, 
      warehouse : warehouse, 
      itemPrice : itemPrice,
      shippingPrice : shippingPrice
    }).then(resp =>{
      setMysqlQuery(resp.data.query);
      setdbResponse(resp.data.dbResponse); 
    })
  }

  return (
    <div className="form-field item-listing">
      <h2>Create new item listing: </h2>
      <form onSubmit={submitted}>
        <label htmlFor="sellerID">Seller ID: </label>
        <input
          placeholder='ex: 123456789'
          type='text'
          id='sellerID'
          name='sellerID'
          value={sellerID}
          onChange={(e) => setSellerID(e.target.value)}
        />
        <label htmlFor="productID">Product ID: </label>
        <input
          placeholder='ex: 123456789'
          type='text'
          id='productID'
          name='productID'
          value={productID}
          onChange={(e) => setProductID(e.target.value)}
        />
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
        <label htmlFor="warehouseLocation">Warehouse ID: </label>
        <input
          placeholder='ex: 12'
          type='text'
          id='itemPrice'
          name='itemPrice'
          value={warehouse}
          onChange={(e) => setWarehouse(e.target.value)}
        />
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