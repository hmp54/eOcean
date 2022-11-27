import React, {useState} from 'react'

export default function DeleteUserAccount() {
  const[itemID, setID] = useState(""); 
  const submitted = (e) =>{
    e.preventDefault(); 
    console.log(itemID); 
  }

  return (
    <div className="form-field">
      <h3>Enter the ID of the item you wish to delete: </h3>
      <form onSubmit={submitted}>
        <label htmlFor="itemID">Item ID: </label>
        <input 
          type="text"
          placeholder="ex. 123456"
          value={itemID}
          onChange={(e)=> setID(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>

      <form>
        <h3>Are you sure you want to delete this listing?</h3>
        <p>This action cannot be undone!</p>
        <button>Yes</button>
        <button>No</button>
      </form>
    </div>
  )
}
