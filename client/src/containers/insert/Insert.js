import React from 'react'
import User from './User'; 
import Order from './Order'
import ProductType from './ProductType'
import ProductCategory from './ProductCategory'
import ItemListing from './ItemListing'
import Warehouse from './Warehouse'
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from 'react-router-dom'

export default function Insert() {

  return (
    <BrowserRouter className='container__insert'>
      <h1 className='container__header'>CREATE:</h1>
      <div className='buttonContainer'>
          <Link className="link" to="/insert/user">User Account</Link>
          <Link className="link" to="/insert/order">Order Invoice</Link>
          <Link className="link" to="/insert/product-type">Product Type</Link>
          <Link className="link" to="/insert/product-category">Product Category</Link>
          <Link className="link" to="/insert/item-listing">Item Listing</Link>
          <Link className="link" to="/insert/warehouse">Warehouse</Link>
      </div>

      <Routes>
        <Route path="/insert/user" element={<User/>}/>
        <Route path="/insert/order" element={<Order/>}/>
        <Route path="/insert/product-type" element={<ProductType/>}/>
        <Route path="/insert/product-category" element={<ProductCategory/>}/>
        <Route path="/insert/item-listing" element={<ItemListing/>}/>
        <Route path="/insert/warehouse" element={<Warehouse/>}/>
      </Routes>
    </BrowserRouter>

  )
}