/**
 * COMMANDS: 
 * .post() - inserts into the database
 */

const express = require('express'); 
const app = express(); //this is used to create routes through which our queries are sent
const cors = require('cors'); 
const mysql = require('mysql2'); 
const todaysDate = (new Date()).toLocaleString().slice(0,10); 

app.listen(3001, ()=>{
    console.log("Success! Running server on port 3001.");
}); 

app.use(cors());
app.use(express.json()); 

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost', 
    password: 'cosc280!',
    database: 'eocean'
});

//FORM: INSERT > User Account
app.post('/create-new-user', (req, res) => {
    const fname = req.body.fname; 
    const lname = req.body.lname;
    const email = req.body.email; 
    const uPassword = req.body.uPassword; 
    const billingAddress = req.body.billingAddress;

   db.query(
    'INSERT INTO users(first_name, last_name, email, uPassword, billing_address, date_registered) VALUES (?,?,?,?,?,?)',
    [fname, lname, email, uPassword, billingAddress, todaysDate],
    (err, result) =>{
        if(err)
            console.log(err)
        else {
            res.send("Values successfully inserted in TABLE USERS: ")
        }
    }
   ); 
})


app.post('/create-new-order', (req,res) => {
    const itemID = req.body.itemID;
    const buyerID = req.body.buyerID; 
    const sellerID = req.body.sellerID; 
    const date = req.body.date; 
    const orderCost = req.body.orderCost; 
    const orderStatus = req.body.orderStatus;
    const tracking = req.body.tracking; 
    const shippingProvider = req.body.shippingProvider; 
    const paymentStatus = req.body.paymentStatus;

    db.query(
        'INSERT INTO orders(item_id, buyer_id, seller_id, order_date, order_cost) VALUES (?,?,?,?,?)',
        [itemID, buyerID, sellerID, date, orderCost],
        (err, result) => {
            if(err) console.log(err)
            else res.send("Successfully created new entry in TABLE: ")
        }
    )
})

app.post('/create-product-type', (req,res) => {
    const productName = req.body.productName; 
    const productCategory = req.body.productCategory; 
    const productDescription = req.body.productDescription; 
})

app.post('/create-product-category', (req,res) => {
    const categoryName= req.body.categoryName; 
})

app.post('/create-item-listing', (req,res) => {
    const sellerID = req.body.sellerID;
    const productId = req.body.productID; 
    const condition = req.body.condition; 
    const warehouse = req.body.warehouse; 
    const itemPrice = req.body.itemPrice; 
    const shippingPrice = req.body.shippingPrice; 
})

app.post('/create-warehouse', (req,res) => {
    const city = req.body.city;
    const country = req.body.country; 
    const state = req.body.state; 
})


/*

    db.query(
        '',
        [],
        (err, result) => {
            if(err) console.log(err)
            else res.send("Successfully created new entry in TABLE: ")
        }
    )
*/