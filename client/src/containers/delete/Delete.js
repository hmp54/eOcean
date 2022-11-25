import React from 'react';
import DeleteItemListing from './DeleteItemListing'
import DeleteOrder from './DeleteOrder'
import DeleteProductCategory from './DeleteProductCategory'
import DeleteProductType from './DeleteProductType'
import DeleteUserAccount from './DeleteUserAccount'
import DeleteWarehouse from './DeleteWarehouse'

import {
  BrowserRouter,
  Route,
  Routes,
  useMatch,
  Link
} from 'react-router-dom';


export default function Delete() {
  return (
    <BrowserRouter>
      <h1 className="container__header">DELETE:</h1>
        <Link className="link" to="delete/user-account">User Account</Link>
        <Link className="link" to="delete/item-listing">Item Listing</Link>
        <Link className="link" to="delete/order-invoice">Order invoice</Link>
        <Link className="link" to="delete/product-category">Product Category</Link>
        <Link className="link" to="delete/product-type">Product Type</Link>
        <Link className="link" to="delete/warehouse">Warehouse</Link>
      <Routes>
        <Route path="delete/user-account" element={<DeleteUserAccount/>}/>
        <Route path="delete/item-listing" element={<DeleteItemListing/>}/>
        <Route path="delete/order-invoice" element={<DeleteOrder/>}/>
        <Route path="delete/product-category" element={<DeleteProductCategory/>}/>
        <Route path="delete/product-type" element={<DeleteProductType/>}/>
        <Route path="delete/warehouse" element={<DeleteWarehouse/>}/>
      </Routes>
    </BrowserRouter>
  )
}