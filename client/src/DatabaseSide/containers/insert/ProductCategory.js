import React, {useState} from 'react'
import Axios from 'axios'; 

export default function ProductCategory() {
  const [categoryName, setCategoryName] = useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/create-product-category",{
      categoryName : categoryName
    }).then(resp=>{
      console.log(resp.data)
    })
  }
  
  return (
    <div className="form-field">
      <h2>Create a New Product Category</h2>
      <form onSubmit={submitted}>
        <label htmlFor='category'>Category name: </label>        
        <input 
            placeholder="ex. 'dresses'"
            type="text" 
            id="category" 
            name="category" 
            value={categoryName}
            onChange = {(e) => setCategoryName(e.target.value)}
          />
          <input className="submit" type="submit" value="Submit"/>
        </form>
    </div>
  )
}
