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

/***INSERT FORMS QUERIES***/
app.post('/create-new-user', (req, res) => {
    const fname = req.body.fname; 
    const lname = req.body.lname;
    const email = req.body.email; 
    const uPassword = req.body.uPassword; 
    const billingAddress = req.body.billingAddress;

    let theQuery = 'INSERT INTO users(first_name, last_name, email, uPassword, billing_address, date_registered) VALUES (?,?,?,?,?,?)';
    let values = [fname, lname, email, uPassword, billingAddress, todaysDate]

    db.query(
        theQuery,
        values,
        (err, result) =>{
            if(err)
                res.send("Uh-oh, something went wrong.  " + err)
            else 
                res.send({ query:  theQuery, dbResponse: "Success! New user account created. 🎉"})
        }
    ); 

   
})


app.post('/create-new-order', (req,res) => {
    const itemID = req.body.itemID;
    const buyerID = req.body.buyerID; 
    const sellerID = req.body.sellerID; 
    const date = req.body.date; 
    const orderCost = req.body.orderCost; 

    let theQuery = 'INSERT INTO orders(item_id, buyer_id, seller_id, order_date, order_cost) VALUES (?,?,?,?,?)'; 
    let values = [itemID, buyerID, sellerID, date, orderCost]

    db.query(
        theQuery,
        values,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong." + err})
            else res.send({query:  theQuery, dbResponse: "Success! Created a new order invoice 🎉"})
        }
    )
})

app.post('/create-new-order-status', (req, res) =>{
    const orderStatus = req.body.orderStatus;
    const tracking = req.body.tracking; 
    const shippingProvider = req.body.shippingProvider; 
    const paymentStatus = req.body.paymentStatus;

    let theQuery = 'INSERT INTO orderstatus(tracking_id, paid_status, shipping_status, shipping_provider) VALUES (?,?,?,?)'
    let value = [tracking, paymentStatus, orderStatus, shippingProvider];
    db.query(
        theQuery,
        value,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Created a new order status 🎉"})
        }
    )
})

app.post('/create-new-product', (req,res) => {
    const productName = req.body.productName; 
    const productCategory = req.body.productCategory; 
    const productDescription = req.body.productDescription; 

    let theQuery = 'INSERT INTO Products(product_name, product_category, product_description) VALUES(?,?,?)';
    let value = [productName, productCategory, productDescription];

    db.query(
        theQuery,
        value,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Created a new product type🎉"})
        }
    )
})

app.post('/create-product-category', (req,res) => {
    const categoryName= req.body.categoryName; 

    let theQuery = 'INSERT INTO productCategories(category_name) VALUES(?)'
    let value = [categoryName]

    db.query(
        theQuery,
        value,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Created a new product category 🎉"})
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

    let theQuery = 'INSERT INTO itemlistings(uploader_id, product_id, item_image, upload_date, item_price, shipping_price, item_condition) VALUES (?,?,?,?,?,?,?)'
    let value = [sellerID, productID, item_image, todaysDate, itemPrice, shippingPrice, condition]; 
    db.query(
        theQuery,
        value,
        (err, result)=>{
            if(err) res.send("Uh-oh, something went wrong. " + err)
            else res.send({query:  theQuery, dbResponse: "Success! Created a new item listing. Let the sales begin 🎉"})
        })
})

app.post('/create-warehouse', (req,res) => {
    const city = req.body.city;
    const country = req.body.country; 
    const state = req.body.state; 

    theQuery = 'INSERT INTO warehouses(city, the_state, country) VALUES (?,?,?)';
    values = [city, state, country]; 
    
    db.query(
        theQuery,
        values,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Created a new warehouse location. 🎉"})
        }
    )
})

app.post('/custom-query', (req,res) =>{
    //const theQuery = req.body.theQuery; 
    const theQuery = req.body.theQuery; 

    db.query(
        theQuery,
        (err, result) => {
            if(err) res.send({result: result, query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({result: result, query:  theQuery, dbResponse: "Successfully sent a custom query 🎉"})

            console.log(result)
        }
    )
})

app.post('/get-categories', (req,res)=>{
    db.query(
        'SELECT * FROM productcategories',
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Created a new warehouse location. 🎉"})
        }
    )
})

app.post('/get-product-types', (req, res)=>{
    const productName = req.body.productName; 
    const productCategory = req.body.productCategory; 
    let theQuery;
    let values; 

    if(productCategory.length > 0){
        theQuery = "SELECT * FROM products where product_name = ? AND product_category = ?;"
        values = [productName, productCategory]
    } else{
        theQuery =  "SELECT * FROM products where product_name = ?"; 
        values = [productName];
    }


    db.query(
        theQuery,
        values,
        (err, result)=>{
            if(err) {
                console.log(err)
                res.send({ result : (err.sqlMessage), query:  theQuery, dbResponse: "Uh-oh, something went wrong." + err})
            } else res.send({result : result, query:  theQuery, dbResponse: "Success! Fetching user data 🎉"})
        }
    )
})


app.post('/get-order-invoice', (req, res)=>{
    const orderID = req.body.orderID; 

    let theQuery = 'SELECT * FROM orders WHERE order_id=?';
    let values = [orderID]; 

    if(!(typeof theQuery == 'undefined')){
        db.query(
            theQuery,
            values,
            (err, result)=>{
                if(err) {
                    console.log(err)
                    res.send({ result : (err.sqlMessage), query:  theQuery, dbResponse: "Uh-oh, something went wrong." + err})
                } else res.send({result : result, query:  theQuery, dbResponse: "Success! Fetching user data 🎉"})
            }
        )
    } else{
        res.send({result : "❓", query : theQuery, dbResponse: "Unable to create query. Please double-check the forms and try again!"})
    }
})

/** READ queries */
app.post('/get-user-account', (req, res)=>{
    const UID = req.body.UID; 
    const email = req.body.email; 
    const fname = req.body.fname; 
    const lname = req.body.lname; 
    const seller = req.body.seller; 
    const fInitial = req.body.fInitial;
    const lInitial = req.body.lInitial; 

    let theQuery;
    let values; 
    console.log("INITIALS: " + fInitial + lInitial)
    if ((seller) && UID.length > 0){
        console.log("OPTION 0")
        theQuery = 'SELECT * FROM users JOIN sellers ON users.user_id = sellers.seller_id WHERE users.user_id=?'
        values = [UID,UID];
    }
    
    if((!seller) && UID.length > 0){
        console.log("OPTION 1")
        theQuery = 'SELECT * FROM users WHERE users.user_id=?';
        values = [UID]
    } 
    
    if((!seller) && (fname.length > 0 &&  lname.length > 0)){
        console.log("OPTION 2")
        theQuery = "SELECT * FROM users WHERE (first_name = ? AND last_name= ?)"
        values = [fname, lname]
    } 
    
    if((seller) && (fname.length > 0 && lname.length > 0)){
        console.log("OPTION 3")
        theQuery = "SELECT * FROM users JOIN sellers WHERE (users.first_name = ? AND users.last_name= ?);"
        values = [fname, lname]
    } 


    if((!seller) && (fInitial.length > 0 && lInitial.length > 0)){
        console.log("OPTION 4")
        theQuery = "SELECT * FROM users WHERE (users.first_name LIKE ?% AND users.last_name LIKE ?%)";
        values = [fInitial, lInitial]
    }
    
    if((seller) && (fInitial.length > 0 && lInitial.length > 0)){
        console.log("OPTION 5")
        theQuery = "SELECT * FROM users JOIN sellers WHERE (users.first_name LIKE ?% AND users.last_name LIKE ?%)";
        values = [fInitial, lInitial]
    }

    if(!(typeof theQuery == 'undefined')){
        db.query(
            theQuery,
            values,
            (err, result)=>{
                if(err) {
                    console.log(err)
                    res.send({ result : (err.sqlMessage), query:  theQuery, dbResponse: "Uh-oh, something went wrong." + err})
                } else res.send({result : result, query:  theQuery, dbResponse: "Success! Fetching user data 🎉"})
            }
        )
    } else{
        res.send({result : "❓", query : theQuery, dbResponse: "Unable to create query. Please double-check the forms and try again!"})
    }
})


app.post('/get-item-listing', (req, res) =>{
    const itemID = req.body.itemID; 

    let theQuery = 'SELECT * FROM itemlistings WHERE item_id = ?'
    let values = [itemID]
    db.query(
        theQuery,
        values,
        (err, result)=>{
            if(err) {
                console.log(err)
                res.send({ result : (err.sqlMessage), query:  theQuery, dbResponse: "Uh-oh, something went wrong." + err})
            } else res.send({result : result, query:  theQuery, dbResponse: "Success! Fetching user data 🎉"})
        }
    )
})

app.post('/get-warehouse', (req, res) =>{
    const WID = req.body.WID; 
    let theQuery = 'SELECT * FROM warehouses WHERE warehouse_id = ?'
    let values = [WID]
    db.query(
        theQuery,
        values,
        (err, result)=>{
            if(err) {
                console.log(err)
                res.send({ result : (err.sqlMessage), query:  theQuery, dbResponse: "Uh-oh, something went wrong." + err})
            } else res.send({result : result, query:  theQuery, dbResponse: "Success! Fetching user data 🎉"})
        }
    )
})



app.post('/delete-user', (req,res) => {
    let UID = req.body.UID; 
    let theQuery = 'DELETE FROM Users WHERE user_id = ?'
    let value = [UID]

    db.query(
        theQuery,
        value,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Created a new product category 🎉"})
        }
    )
})

app.post('/delete-listing', (req,res) => {
    let itemID = req.body.itemID; 
    let theQuery = 'DELETE FROM itemlistings WHERE item_id = ?'
    let value = [itemID]

    db.query(
        theQuery,
        value,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Created a new product category 🎉"})
        }
    )
})

app.post('/delete-order-invoice', (req,res) => {
    
})
app.post('/delete-product-category', (req,res) => {
    
})

app.post('/delete-product', (req,res) => {
    
})

app.post('/delete-warehouse', (req,res) => {
    
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