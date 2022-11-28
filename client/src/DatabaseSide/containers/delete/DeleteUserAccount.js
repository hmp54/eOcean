import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 

export default function DeleteUserAccount() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const[UID, setUID] = useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/delete-user",{
      UID : UID
    }).then(resp =>{
      setMysqlQuery(resp.data.query);
      setdbResponse(resp.data.dbResponse); 
    })
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
