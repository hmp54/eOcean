import React, { useState, useContext }  from 'react'
import {mapJSON} from '../../../OtherComponents/JSONFunctions'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu';
import GetCategories from '../fetch-components/GetCategories';

export default function ProductType() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const[productName, setName] = useState("");
  const[productCategory, setCategory] = useState(""); //want to be able to fetch available categories from the database and display them

  const getCategoryChange = (newCategory) =>{ 
    setCategory(newCategory); 
  }

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/get-product-types",{
      productName : productName,
      productCategory : productCategory
    }).then(resp =>{
      setMysqlQuery(String(resp.data.query));
      setdbResponse(mapJSON(resp.data.result)); 
    })
  }

  return (
    <div className="form-field">
      <h2>Search for a Product Type:</h2>
      <form onSubmit={submitted}>
        <label htmlFor='productName'>Product Name:</label>
        <input
          placeholder='for example: Nike AF1 Shoes'
          type='text'
          id='productName'
          value={productName}
          onChange = {(e) => setName(e.target.value)}
        />
        <label htmlFor='productCategory'>Product Category:</label>
        <p>*leave blank if you want to search across all product categories</p>
        <GetCategories 
          id='productCategory'
          getCategoryChange={getCategoryChange}
        />
        {/*<input
          placeholder='for example: Nike AF1 Shoes'
          type='text'
          id='productName'
          value={productCategory}
          onChange = {(e) => setCategory(e.target.value)}
  />*/}
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}