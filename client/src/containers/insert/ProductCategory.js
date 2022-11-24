import React, {useState} from 'react'

export default function ProductCategory() {
  const [categoryName, setCategoryName] = useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log("Created category:" + categoryName)
  }
  
  return (
    <div className="insert__option">
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
