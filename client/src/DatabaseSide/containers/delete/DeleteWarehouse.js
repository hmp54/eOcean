import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 

export default function DeleteWarehouse() {
    const [WID, setWID] = useState(""); 
    const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
    
    const submitted = (e) =>{
        e.preventDefault(); 
        console.log("Sending request to http://localhost:3001/delete-warehouse")
        Axios.post("http://localhost:3001/delete-warehouse",{
          WID : WID
        }).then(resp =>{
          setMysqlQuery(resp.data.query);
          setdbResponse(resp.data.dbResponse); 
        })
      }

    return (
    <div className="form-field">
        <h3>enter ID of the warehouse you want to delete: </h3>
        <form onSubmit={submitted}>
            <label htmlFor="WID">Warehouse ID: </label>
            <input 
            placeholder="ex. 123456"
            type="text"
            id="WID"
            value={WID}
            onChange={(e) => setWID(e.target.value)}
            />
             <input className="submit" type="submit" value="Submit"/>
        </form>
       
    </div>
    )
}
