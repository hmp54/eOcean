import React, {useState} from 'react'

export default function DeleteUserAccount() {
  const[UID, setUID] = useState(""); 
  const submitted = (e) =>{
    e.preventDefault(); 
    console.log(UID); 
  }

  return (
    <div className="form-field">
      <h3>Enter the UID of the user account you wish to delete: </h3>
      <form onSubmit={submitted}>
        <label htmlFor="UID">UID:</label>
        <input 
          type="text"
          placeholder="ex. 123456"
          value={UID}
          onChange={(e)=> setUID(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>

      <form>
        <h3>Are you sure you want to delete this account?</h3>
        <p>This action cannot be undone!</p>
        <button>Yes</button>
        <button>No</button>
      </form>
    </div>
  )
}
