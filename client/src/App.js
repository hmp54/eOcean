import React from 'react'
import ClientManager from './ClientSide/ClientManager'; 
import Home from './Home'
import OptionMenu from './DatabaseSide/screens/OptionMenu';
import Update from './DatabaseSide/containers/update/Update';
import UpdateOrderInvoice from './DatabaseSide/containers/update/UpdateOrderInvoice'
import UpdateProductListing from './DatabaseSide/containers/update/UpdateProductListing'
import UpdateUserAccount from './DatabaseSide/containers/update/UpdateUserAccount'
import UpdateWareHouseInfo from './DatabaseSide/containers/update/UpdateWareHouseInfo'
import UpdateItemListing from './DatabaseSide/containers/update/UpdateItemListing'
import Query from './DatabaseSide/containers/query/Query'
import Insert from './DatabaseSide/containers/insert/Insert'
import User from './DatabaseSide/containers/insert/User';
import Order from './DatabaseSide/containers/insert/Order'
import ProductType from './DatabaseSide/containers/insert/ProductType'
import ProductCategory from './DatabaseSide/containers/insert/ProductCategory'
import ItemListing from './DatabaseSide/containers/insert/ItemListing'
import Warehouse from './DatabaseSide/containers/insert/Warehouse'
import Read from './DatabaseSide/containers/read/Read'
import ReadOrderInvoice from './DatabaseSide/containers/read/ReadOrderInvoice'
import ReadItemListing from './DatabaseSide/containers/read/ReadItemListing'
import ReadUserAccount from './DatabaseSide/containers/read/ReadUserAccount'
import ReadWareHouseInfo from './DatabaseSide/containers/read/ReadWareHouseInfo'
import ReadProductType from './DatabaseSide/containers/read/ReadProductType'
import Delete from './DatabaseSide/containers/delete/Delete'
import DeleteItemListing from './DatabaseSide/containers/delete/DeleteItemListing'
import DeleteOrder from './DatabaseSide/containers/delete/DeleteOrder'
import DeleteProductCategory from './DatabaseSide/containers/delete/DeleteProductCategory'
import DeleteProductType from './DatabaseSide/containers/delete/DeleteProductType'
import DeleteUserAccount from './DatabaseSide/containers/delete/DeleteUserAccount'
import DeleteWarehouse from './DatabaseSide/containers/delete/DeleteWarehouse'
import DBMSResponse from './DatabaseSide/screens/DBMSResponse'
import Login from './ClientSide/pages/Login'
import Register from './ClientSide/pages/Register'
import CreateListing from './ClientSide/pages/CreateListing'
import {
  Link,
  Routes,
  Route,
  Outlet
} from "react-router-dom"; 

function App() {
  return (
    <div className="main">
      <nav className = "main__nav-bar">
        <a href="/"><h1 href="/">eOcean</h1></a>
        <ul>
          <li><Link to="/client" className="main__link">CLIENT</Link></li>
          <li><Link to="/database" className="main__link">DATABASE MANAGER</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/client" element={<ClientManager/>}>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="sell" element={<CreateListing/>}/>
        </Route>


        <Route path="/database" element={<OptionMenu/>}>
          <Route index element={<Home/>}/>
          <Route path="insert" element={<Insert/>}>
            <Route index element={<Home/>}/>
            <Route path="user" element={<User/>}/>
            <Route path="order" element={<Order/>}/>
            <Route path="product-type" element={<ProductType/>}/>
            <Route path="product-category" element={<ProductCategory/>}/>
            <Route path="item-listing" element={<ItemListing/>}/>
            <Route path="warehouse" element={<Warehouse/>}/>
          </Route>
          <Route path="read" element = {<Read/>}>
            <Route index element={<Home/>}/>
            <Route path="user-account" element={<ReadUserAccount/>}/>
            <Route path="order-invoice" element={<ReadOrderInvoice/>}/>
            <Route path="product-type" element={<ReadProductType/>}/>
            <Route path="item-listing" element={<ReadItemListing/>}/>
            <Route path="warehouse-info" element={<ReadWareHouseInfo/>}/>
          </Route>
          <Route path="update" element = {<Update/>}>
            <Route index element={<Home/>}/>
            <Route path="user" element={<UpdateUserAccount/>}/>
            <Route path="order" element={<UpdateOrderInvoice/>}/>
            <Route path="product" element={<UpdateProductListing/>}/>
            <Route path="item-listing" element={<UpdateItemListing/>}/>
            <Route path="warehouse" element={<UpdateWareHouseInfo/>}/>
          </Route>
          <Route path="delete" element = {<Delete/>}>
            <Route index element={<Home/>}/>
            <Route path="user-account" element={<DeleteUserAccount/>}/>
            <Route path="item-listing" element={<DeleteItemListing/>}/>
            <Route path="order-invoice" element={<DeleteOrder/>}/>
            <Route path="product-category" element={<DeleteProductCategory/>}/>
            <Route path="product-type" element={<DeleteProductType/>}/>
            <Route path="warehouse" element={<DeleteWarehouse/>}/>
          </Route>
          <Route path="query" element = {<Query/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;


//do main client/database navigation here

{
  /** 
  

  
   * INSERT
  <Routes>
    <Route path="database/insert/user" element={<User/>}/>
    <Route path="database/insert/order" element={<Order/>}/>
    <Route path="database/insert/product-type" element={<ProductType/>}/>
    <Route path="database/insert/product-category" element={<ProductCategory/>}/>
    <Route path="database/insert/item-listing" element={<ItemListing/>}/>
    <Route path="database/insert/warehouse" element={<Warehouse/>}/>
  </Routes>

  READ
  <Routes>
    <Route path="/read/user-account" element={<ReadUserAccount/>}/>
    <Route path="/read/order-invoice" element={<ReadOrderInvoice/>}/>
    <Route path="/read/product-type" element={<ReadProductType/>}/>
    <Route path="/read/item-listing" element={<ReadItemListing/>}/>
    <Route path="/read/warehouse-info" element={<ReadWareHouseInfo/>}/>
  </Routes>

  UPDATE

  DELETE

  <Routes>
    <Route path="delete/user-account" element={<DeleteUserAccount/>}/>
    <Route path="delete/item-listing" element={<DeleteItemListing/>}/>
    <Route path="delete/order-invoice" element={<DeleteOrder/>}/>
    <Route path="delete/product-category" element={<DeleteProductCategory/>}/>
    <Route path="delete/product-type" element={<DeleteProductType/>}/>
    <Route path="delete/warehouse" element={<DeleteWarehouse/>}/>
</Routes>

  UPDATE:
          <Routes>
          <Route path="/update/user" element={<UpdateUserAccount/>}/>
          <Route path="/update/order" element={<UpdateOrderInvoice/>}/>
          <Route path="/update/product" element={<UpdateProductListing/>}/>
          <Route path="/update/item-listing" element={<UpdateItemListing/>}/>
          <Route path="/update/warehouse" element={<UpdateWareHouseInfo/>}/>
        </Routes>
*/
}


