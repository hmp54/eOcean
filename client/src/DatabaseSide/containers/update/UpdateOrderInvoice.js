import React, { useState, useContext }  from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 
import OrderSearch from '../fetch-components/OrderSearch';


export default function Order() {
    const[orderID, setOrderID] = useState(""); 
    const[orderStatus, setOrderStatus] = useState(""); 
    const[tracking, setTracking] = useState("");
    const[shippingProvider, setShippingProvider]  = useState(""); 
    const[paymentStatus, setPaymentStatus] = useState(""); 
    
    const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);

    const submitted = (e) =>{
      e.preventDefault(); 
      Axios.post("http://localhost:3001/update-order",{
        orderID : orderID,
        orderStatus : orderStatus,
        tracking : tracking, 
        shippingProvider : shippingProvider, 
        paymentStatus : paymentStatus
      }).then(resp =>{
        setMysqlQuery(resp.data.query);
        setdbResponse(resp.data.dbResponse); 
      })
    }

    return (
    <div className="form-field">    
        <form onSubmit={submitted}>
        <h3>First, enter order invoice ID that you want to update: </h3>
          <label htmlFor="orderID">Order ID: </label>
          <input 
            id="orderID" 
            placeholder="ex. 123456"
            value={orderID}
            onChange={(e) => setOrderID(e.target.value)}/>
        <h3>What do you want to change?</h3>
            <label htmlFor="shippingProvider">Shipping Provider</label>
            <select
                id="shippingProvider"
                value={shippingProvider}
                onChange={(e)=> setShippingProvider(e.target.value)}
            >
                <option></option>
                <option value="Fedex">Fedex</option>
                <option value="USPS">USPS</option>
                <option value="UPS">UPS</option>
            </select>
            <label htmlFor="tracking">Tracking Number: </label>
            <input
                placeholder= "ex. 123456789-98"
                type="text"
                id="tracking"
                name=""
                value={tracking}
                onChange={(e) => setTracking(e.target.value)}
            />
            <label htmlFor="orderStatus">Shipping Status: </label>
                <select
                    id="orderStatus"
                    value={orderStatus}
                    onChange={(e)=> setOrderStatus(e.target.value)}
                >
                    <option></option>
                    <option value="OrderRecieved">Order Recieved</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                </select>
            <label htmlFor="paymentStatus">Payment Status: </label>
                <select
                    id="paymentStatus"
                    value={paymentStatus}
                    onChange={(e)=> setPaymentStatus(e.target.value)}
                >
                    <option></option>
                    <option value="Pending">Pending</option>
                    <option value="Declined">Declined</option>
                    <option value="Paid">Paid</option>
                </select>
            <input className="submit" type="submit" value="Submit"/>
        </form>
        <OrderSearch/>
    </div>
    )
}

/*
order id //generated by the back end 
item id 
buyer id 
seller id 
order date
order cost 

        <select
          value={productCategory}
          onChange={(e)=> setCategory(e.target.value)}
        >
          <option value="shoes">Shoes</option>
          <option value="hat">Hat</option>
        </select>
*/