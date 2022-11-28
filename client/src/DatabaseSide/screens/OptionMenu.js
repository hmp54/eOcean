import React, {useState, createContext, useContext} from 'react'
import {Link, Outlet} from "react-router-dom"; 
import DBMSResponse from './DBMSResponse';
import Footer from '../../OtherComponents/Footer'

export const DbmsContext = React.createContext();
//call usecontext here for DBMS messages. 
export default function OptionMenu() {
  const[dbResponse, setdbResponse] = useState("--"); 
  const[mysqlQuery, setMysqlQuery] = useState("--");  

  return (
        <div>
          <DbmsContext.Provider value={{dbResponse, mysqlQuery, setdbResponse, setMysqlQuery}}>
              <nav className = 'OptionsMenu__nav'>
                <Link className="link" to="/database/insert">Insert</Link>
                <Link className="link" to="/database/read">Read</Link>
                <Link className="link" to="/database/update">Update</Link>
                <Link className="link" to="/database/delete">Delete</Link>
                <Link className="link" to="/database/query">Query</Link>
              </nav>
              <Outlet/>
              <DBMSResponse/>
              <Footer/>
            </DbmsContext.Provider>
        </div>

  )
} 