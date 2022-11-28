import React, {useContext} from 'react'
import {DbmsContext} from '../screens/OptionMenu'

export default function DBMSResponse() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);


  return (
    <div className="container__response">
        <h2>Console:</h2>
        <h3>SQL Query Sent to database:</h3>
        <p>{mysqlQuery}</p>
        <h3>Database Response: </h3>
        <p>{dbResponse}</p>
        <button onClick = {()=>{   
          setdbResponse("--"); 
          setMysqlQuery("--"); 
        }}>reset</button>
    </div>
  )
}
