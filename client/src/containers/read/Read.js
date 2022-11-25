import React from 'react'
import ReadOrderInvoice from './ReadOrderInvoice'
import ReadItemListing from './ReadItemListing'
import ReadUserAccount from './ReadUserAccount'
import ReadWareHouseInfo from './ReadWareHouseInfo'
import ReadProductType from './ReadProductType'
import GeneralSearch from './GeneralSearch'

import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from 'react-router-dom'

export default function () {
  return (
    <BrowserRouter>
      <h1 className="container__header">READ: </h1>
      <div className='buttonContainer'>
          <Link className="link" to="/read/user-account">User Account</Link>
          <Link className="link" to="/read/order-invoice">Order Invoice</Link>
          <Link className="link" to="/read/product-type">Product Type</Link>
          <Link className="link" to="/read/item-listing">Item Listing</Link>
          <Link className="link" to="/read/warehouse-info">Warehouse Info</Link>
      </div>
      <Routes>
        <Route path="/read/user-account" element={<ReadUserAccount/>}/>
        <Route path="/read/order-invoice" element={<ReadOrderInvoice/>}/>
        <Route path="/read/product-type" element={<ReadProductType/>}/>
        <Route path="/read/item-listing" element={<ReadItemListing/>}/>
        <Route path="/read/warehouse-info" element={<ReadWareHouseInfo/>}/>
      </Routes>
    </BrowserRouter>
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