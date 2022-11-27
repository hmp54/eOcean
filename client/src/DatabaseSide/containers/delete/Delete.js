import React from 'react';

import {
  Link,
  Outlet
} from 'react-router-dom';


export default function Delete() {
  return (
    <div>
      <h1 className="container__header">DELETE:</h1>
      <div>
        <Link className="link" to="user-account">User Account</Link>
        <Link className="link" to="item-listing">Item Listing</Link>
        <Link className="link" to="order-invoice">Order invoice</Link>
        <Link className="link" to="product-category">Product Category</Link>
        <Link className="link" to="product-type">Product Type</Link>
        <Link className="link" to="warehouse">Warehouse</Link>
      </div>
      <Outlet/>
    </div>
  )
}