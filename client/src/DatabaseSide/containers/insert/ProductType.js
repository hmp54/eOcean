import React, { useState, useContext, useEffect }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 

export default function ProductType() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const[productName, setName] = useState("");
  const[productCategory, setCategory] = useState(""); //want to be able to fetch available categories from the database and display them
  const[productDescription, setDescription] = useState(""); 
  const[categoryList, setCategoryList]= useState([]); 

  const testCategories = ["", "Hat", "Shoes", "Women's Dresses"]
  const renderCategories = testCategories.map((item, index) => 
    <option key={index}>{item}</option>
  );

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log("Attempting to post to localhost:3001/create-new-order");
    Axios.post("http://localhost:3001/create-new-product",{
        productName : productName,
        productCategory : productCategory, 
        productDescription : productDescription
    }).then(resp =>{
      setMysqlQuery(resp.data.query);
      setdbResponse(resp.data.dbResponse); 
    })
}
  
  return (
    <div className="form-field">
      <h2>Create a New Product Type:</h2>
      <form  onSubmit={submitted}>
        <label htmlFor='productName'>Product Name:</label>
        <input
          placeholder='for example: Nike AF1 Shoes'
          type='text'
          id='productName'
          value={productName}
          onChange = {(e) => setName(e.target.value)}
        />
        <label htmlFor='productCategory'>Product Category:</label>
        <input
          placeholder='for example: Nike AF1 Shoes'
          type='text'
          id='productCategory'
          value={productCategory}
          onChange = {(e) => setCategory(e.target.value)}
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
