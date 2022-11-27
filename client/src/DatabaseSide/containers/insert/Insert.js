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
  Link,
  Outlet
} from 'react-router-dom'

export default function Insert() {
  return (
    <div className='container__insert'>
      <h1 className='container__header'>CREATE:</h1>
      <div className='buttonContainer'>
          <Link className="link" to="user">User Account</Link>
          <Link className="link" to="order">Order Invoice</Link>
          <Link className="link" to="product-type">Product Type</Link>
          <Link className="link" to="product-category">Product Category</Link>
          <Link className="link" to="item-listing">Item Listing</Link>
          <Link className="link" to="warehouse">Warehouse</Link>
      </div>
      <Outlet/>
    </div>

  )
}