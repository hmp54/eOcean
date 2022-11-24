import React from 'react';
import UpdateOrderInvoice from './UpdateOrderInvoice'
import UpdateProductListing from './UpdateProductListing'
import UpdateUserAccount from './UpdateUserAccount'
import UpdateWareHouseInfo from './UpdateWareHouseInfo'
import UpdateItemListing from './UpdateItemListing'
import {
  BrowserRouter,
  Route,
  Routes,
  useMatch,
  Link
} from 'react-router-dom'

export default function () {
  return (
    <BrowserRouter>
        <h1 className="container__header">UPDATE: </h1>
        <div>
          <Link className="link" to="/update/user">User Account</Link>
          <Link className="link" to="/update/order">Order Invoice</Link>
          <Link className="link" to="/update/product">Product</Link>
          <Link className="link" to="/update/item-listing">Item Listing</Link>
          <Link className="link" to="/update/warehouse">Warehouse Info</Link>
        </div>
        <Routes>
          <Route path="/update/user" element={<UpdateUserAccount/>}/>
          <Route path="/update/order" element={<UpdateOrderInvoice/>}/>
          <Route path="/update/product" element={<UpdateProductListing/>}/>
          <Route path="/update/item-listing" element={<UpdateItemListing/>}/>
          <Route path="/update/warehouse" element={<UpdateWareHouseInfo/>}/>
        </Routes>
    </BrowserRouter>
  )
}

/**
 * user account information
 * find warehouse by address
 */