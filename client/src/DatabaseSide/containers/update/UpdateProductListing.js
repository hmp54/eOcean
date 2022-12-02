import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 
import GetCategories from '../fetch-components/GetCategories';

export default function ProductType() {
  const[productName, setName] = useState("");
  const[productCategory, setCategory] = useState(""); //want to be able to fetch available categories from the database and display them
  const[productDescription, setDescription] = useState(""); 
  const[prodID, setProdID] = useState("");

  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
 
  const getCategoryChange = (newCategory) =>{ 
    setCategory(newCategory); 
  }

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/update-product",{
      productName : productName,
      productCategory : productCategory,
      productDescription : productDescription, 
      prodID : prodID
    }).then(resp =>{
      setMysqlQuery(resp.data.query);
      setdbResponse(resp.data.dbResponse); 
    })
  }

  return (
    <div className="form-field">
      <form onSubmit={submitted}>
      <h3>First, enter the product ID: </h3>
          <label htmlFor="prodID">Product ID: </label>
          <input 
            id="prodID" 
            placeholder="ex. 123456"
            value={prodID}
            onChange={(e) => setProdID(e.target.value)}/>
        <h3>Then, enter what you want to edit: </h3>
        <label htmlFor='productName'>Product Name:</label>
        <input
          placeholder='for example: Nike AF1 Shoes'
          type='text'
          id='productName'
          value={productName}
          onChange = {(e) => setName(e.target.value)}
        />
        <label htmlFor='productCategory'>Product Category:</label>
       {/* <input
          id="productCategory"
          type="text"
          value={productCategory}
          onChange={(e)=> setCategory(e.target.value)}
          placeholder="ex. Dresses"
        />*/}
        <GetCategories 
          id='productCategory'
          getCategoryChange={getCategoryChange}
        />

        <label htmlFor='productDescription'>Product Description:</label>
        <input
          placeholder='for example: white low-top tennis shoes.'
          type='text'
          id='productDescription'
          value={productDescription}
          onChange = {(e) => setDescription(e.target.value)}
        />
        
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

/*
product ID (auto)
product name
product category
product description 
*/
