import React, {useState, useContext} from 'react'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu'; 


export default function Order() {
    const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
    const [itemID, setItemID] = useState(""); 
    const [buyerID, setBuyerID] = useState("");
    const [sellerID, setSellerID] = useState("");
    const [orderCost, setOrderCost] = useState("");
    const[date, setDate] = useState(""); 
    const[orderStatus, setOrderStatus] = useState(""); 
    const[tracking, setTracking] = useState("");
    const[shippingProvider, setShippingProvider]  = useState(""); 
    const[paymentStatus, setPaymentStatus] = useState(""); 


    //creates a new entry in order and order status
    const submitted = (e) =>{
        e.preventDefault(); 
        console.log("Attempting to post to localhost:3001/create-new-order");
        Axios.post("http://localhost:3001/create-new-order",{
            itemID : itemID,
            buyerID : buyerID, 
            sellerID : sellerID, 
            date : date, 
            orderCost : orderCost
        }).then(resp =>{
            console.log(resp.data);
            setMysqlQuery(resp.data.query)
            setdbResponse(resp.data.dbResponse); 
          })

        Axios.post("http://localhost:3001/create-new-order-status",{
            orderStatus : orderStatus, 
            tracking : tracking,
            shippingProvider : shippingProvider, 
            paymentStatus : paymentStatus
        }).then(resp=>{
            console.log(resp.data)
        })
    }

    return (
    <div className="form-field">
        <h2>Create New Order</h2>
        <form onSubmit={submitted}>
            <label htmlFor="itemID">Item ID: </label>
            <input
                placeholder="Item ID"
                type="text"
                id="itemID"
                name=""
                value={itemID}
                onChange={(e) => setItemID(e.target.value)}
            />
            <label htmlFor="buyerID">Buyer ID: </label>            
            <input
                placeholder="Buyer ID"
                type="text"
                id="buyerID"
                name=""
                value={buyerID}
                onChange={(e) => setBuyerID(e.target.value)}
            />
            <label htmlFor="sellerID">Seller ID: </label>
            <input
                placeholder="Seller ID"
                type="text"
                id=""
                name=""
                value={sellerID}
                onChange={(e) => setSellerID(e.target.value)}
            />
            <label htmlFor="orderCost">Order Cost (USD): </label>
            <input
                placeholder= "Order Cost (USD)"
                type="text"
                id=""
                name=""
                value={orderCost}
                onChange={(e) => setOrderCost(e.target.value)}
            />
            <label htmlFor="orderCost">Order Date (MM/DD/YYYY): </label>
            <input
                placeholder= "01/25/1999"
                type="text"
                id=""
                name=""
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="shippingProvider">Shipping Provider</label>
            <select
                id="shippingProvider"
                value={shippingProvider}
                onChange={(e)=> setShippingProvider(e.target.value)}
            >
                <option></option>
                <option>Fedex</option>
                <option>USPS</option>
                <option>UPS</option>
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
                    <option>Order Recieved</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                </select>
            <label htmlFor="paymentStatus">Order paid?</label>
                <select
                    id="paymentStatus"
                    value={paymentStatus}
                    onChange={(e)=> setPaymentStatus(e.target.value)}
                >
                    <option></option>
                    <option value= "true">Paid</option>
                    <option value= "false" >Not paid</option>
                    
                </select>
            <input className="submit" type="submit" value="Submit"/>
        </form>
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