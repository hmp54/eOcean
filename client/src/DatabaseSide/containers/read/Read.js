import React from 'react'

import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Outlet
} from 'react-router-dom'

export default function () {
  return (
    <div>
      <h1 className="container__header">READ: </h1>
      <div className='buttonContainer'>
          <Link className="link" to="user-account">User Account</Link>
          <Link className="link" to="order-invoice">Order Invoice</Link>
          <Link className="link" to="product-type">Product Type</Link>
          <Link className="link" to="item-listing">Item Listing</Link>
          <Link className="link" to="warehouse-info">Warehouse Info</Link>
      </div>
      <Outlet/>
    </div>
  )
}

/**
 * 
 * ua
 * sa
 * order invoice
 * 
 * product type
 * product categories
 * 
 * item listings
 * warehouses
 * 
 */