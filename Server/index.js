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
    console.log("Running server on port 3001.");
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
            res.send("Uh-oh, something went wrong.  " + err)
        else {
            res.send("Success! New user account created. 🎉")
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


    db.query(
        'INSERT INTO orders(item_id, buyer_id, seller_id, order_date, order_cost) VALUES (?,?,?,?,?)',
        [itemID, buyerID, sellerID, date, orderCost],
        (err, result) => {
            if(err) res.send("Uh-oh, something went wrong. " + err)
            else res.send("Success! Created a new order invoice 🎉")
        }
    )
})

app.post('/create-new-order-status', (req, res) =>{
    const orderStatus = req.body.orderStatus;
    const tracking = req.body.tracking; 
    const shippingProvider = req.body.shippingProvider; 
    const paymentStatus = req.body.paymentStatus;
    console.log("attempting to create new tracking info: ")
    db.query(
        'INSERT INTO orderstatus(tracking_id, paid_status, shipping_status, shipping_provider) VALUES (?,?,?,?)',
        [tracking, paymentStatus, orderStatus, shippingProvider],
        (err, result) => {
            if(err) res.send("Uh-oh, something went wrong. " + err)
            else res.send("Success! Created a new order status 🎉")
        }
    )
})

app.post('/create-new-product', (req,res) => {
    const productName = req.body.productName; 
    const productCategory = req.body.productCategory; 
    const productDescription = req.body.productDescription; 

    db.query(
        'INSERT INTO Products(product_name, product_category, product_description) VALUES(?,?,?)',
        [productName, productCategory, productDescription],
        (err, result) => {
            if(err) res.send("Uh-oh, something went wrong. " + err)
            else res.send("Success! Created a new product type🎉")
        }
    )
})

app.post('/create-product-category', (req,res) => {
    const categoryName= req.body.categoryName; 
    db.query(
        'INSERT INTO productCategories(category_name) VALUES(?)',
        [categoryName],
        (err, result) => {
            if(err) res.send("Uh-oh, something went wrong. " + err)
            else res.send("Success! Created a new product category 🎉")
        }
    )
})

app.post('/create-item-listing', (req,res) => {
    const sellerID = req.body.sellerID;
    const productID = req.body.productID; 
    const condition = req.body.condition; 
    const warehouse = req.body.warehouse; 
    const itemPrice = req.body.itemPrice; 
    const shippingPrice = req.body.shippingPrice; 
    const item_image = "0101010101"; 

    db.query(
        'INSERT INTO itemlistings(uploader_id, product_id, item_image, upload_date, item_price, shipping_price, item_condition) VALUES (?,?,?,?,?,?,?)',
        [sellerID, productID, item_image, todaysDate, itemPrice, shippingPrice, condition],
        (err, result)=>{
            if(err) res.send("Uh-oh, something went wrong. " + err)
            else res.send("Success! Created a new item listing. Let the sales begin 🎉")
        })
})

app.post('/create-warehouse', (req,res) => {
    const city = req.body.city;
    const country = req.body.country; 
    const state = req.body.state; 
    db.query(
        'INSERT INTO warehouses(city, the_state, country) VALUES (?,?,?)',
        [city, state, country],
        (err, result) => {
            if(err) res.send("Uh-oh, something went wrong. " + err)
            else res.send("Success! Created a new warehouse location. 🎉")
        }
    )
})

app.get('/get-categories', (req,res)=>{
    db.query(
        'SELECT * FROM productcategories',
        (err, result) => {
            if(err) res.send("Uh-oh, something went wrong.  " + err)
            else res.send(result)
        }
    )
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