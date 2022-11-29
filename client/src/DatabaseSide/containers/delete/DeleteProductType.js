import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 


export default function DeleteProductType() {
  const[productID, setID] = useState(""); 
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log("Sending axios request")
    console.log("prodid: " + productID)
    Axios.post("http://localhost:3001/delete-product-type",{
     productID : productID
    }).then(resp =>{
      setMysqlQuery(resp.data.query);
      setdbResponse(resp.data.dbResponse); 
    })
  }

  return (
    <div className="form-field">
      <h3>Enter the ID of the product you wish to delete: </h3>
      <form onSubmit={submitted}>
        <label htmlFor="productID">Item ID: </label>
        <input 
          type="text"
          placeholder="ex. 123456"
          value={productID}
          onChange={(e)=> setID(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}
