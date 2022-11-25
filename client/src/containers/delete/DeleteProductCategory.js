import React, {useState} from 'react'

export default function DeleteUserAccount() {
  const[category, setCategory] = useState(""); 
  const submitted = (e) =>{
    e.preventDefault(); 
    console.log(category); 
  }

  return (
    <div className="form-field">
      <h3>Which category do you want to delete? </h3>
      <form onSubmit={submitted}>
        <label htmlFor="orderID">Item ID: </label> 
        <label htmlFor='category'>Product Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e)=> setCategory(e.target.value)}
        >
          <option value="shoes">Shoes</option>
          <option value="hat">Hat</option>
        </select>
        <input className="submit" type="submit" value="Submit"/>
      </form>

      <form>
        <h3>Are you sure you want to delete this order?</h3>
        <p>NOTE: this action also deletes all products and product listings under this category. </p>
        <p>This action cannot be undone!</p>
        <button>Yes</button>
        <button>No</button>
      </form>
    </div>
  )
}
