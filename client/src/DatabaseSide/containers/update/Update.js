import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
  useMatch,
  Link,
  Outlet
} from 'react-router-dom'

export default function () {
  return (
    <div>
        <h1 className="container__header">UPDATE: </h1>
        <div>
          <Link className="link" to="user">User Account</Link>
          <Link className="link" to="order">Order Invoice</Link>
          <Link className="link" to="product">Product</Link>
          <Link className="link" to="item-listing">Item Listing</Link>
          <Link className="link" to="warehouse">Warehouse Info</Link>
        </div>
        <Outlet/>
    </div>
  )
}

/**
 * user account information
 * find warehouse by address
 */