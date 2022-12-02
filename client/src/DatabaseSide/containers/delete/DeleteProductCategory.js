import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 
import GetCategories from '../fetch-components/GetCategories';

export default function DeleteUserAccount() {
  const[category, setCategory] = useState(""); 
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  
  const getCategoryChange = (newCategory) =>{ 
    setCategory(newCategory); 
  }

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/delete-product-category",{
      category : category
    }).then(resp =>{
      setMysqlQuery(resp.data.query);
      setdbResponse(resp.data.dbResponse); 
    })
  }

  return (
    <div className="form-field">
      <h3>Which category do you want to delete? </h3>
      <p>*does not actually delete data - included for demo purposes to show what happens when one tries to delete a category (because many other tables rely on this table's data as a foreign key).</p>
      <form onSubmit={submitted}>
        <label htmlFor='category'>Product Category:</label>
        <GetCategories 
          id='category'
          getCategoryChange={getCategoryChange}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}
