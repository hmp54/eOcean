import React, {useState} from 'react'

export default function DeleteUserAccount() {
  const[productID, setID] = useState(""); 
  const submitted = (e) =>{
    e.preventDefault(); 
    console.log(productID); 
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

      <form>
        <h3>Are you sure you want to delete this product type?</h3>
        <p>This action cannot be undone!</p>
        <button>Yes</button>
        <button>No</button>
      </form>
    </div>
  )
}
