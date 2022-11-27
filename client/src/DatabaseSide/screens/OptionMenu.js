import React from 'react'
import {Link, Outlet} from "react-router-dom"; 
import DBMSResponse from './DBMSResponse';

export default function OptionMenu() {
  return (
      <div>
          <nav className = 'OptionsMenu__nav'>
            <Link className="link" to="/database/insert">Insert</Link>
            <Link className="link" to="/database/read">Read</Link>
            <Link className="link" to="/database/update">Update</Link>
            <Link className="link" to="/database/delete">Delete</Link>
            <Link className="link" to="/database/query">Query</Link>
          </nav>
          <Outlet/>
          <DBMSResponse/>
      </div>
  )
} 