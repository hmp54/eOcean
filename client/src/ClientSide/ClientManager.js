import React from 'react'
import {
  Outlet,
  Link
} from "react-router-dom"; 
import "./ClientManager.css"
import search from '../assets/search.png'
import go from '../assets/right-arrow.png'

export default function ClientManager() {
  return (
    <div className="client">
      <div className="client__nav">
        <div className="client__nav-left">
          <Link className="client__nav-link" to="sell">Sell</Link>
        </div>
        <div className="client__nav-middle">
          <img className="search" src={search} alt="search icon"/>
          <form className="client__searchbar-form">
            <input type="text" placeholder="Search for an item: ex. 'nike AF1's'"></input>
            <img className="client__search-submit" value="Submit" src={go}/>
          </form>
        </div>
        <div className="client__nav-right">
          <Link className="client__nav-link" to="login">Login</Link>
          <Link className="client__nav-link register" to="register">Sign Up</Link>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}
