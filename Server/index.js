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

app.post('/get-dropdown-categories', (req,res) =>{
    db.query(
        'SELECT * FROM productcategories',
        (err, result) =>{
            if(err) res.send({dbResponse: "Uh-oh, something went wrong." + err})
            else res.send(result); 
        }
    )
})

app.post('/get-categories', (req,res)=>{
    let theQuery = 'SELECT * FROM productcategories'; 
    db.query(
        theQuery,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Fetched category information. 🎉"})
        }
    )
})

app.post('/get-product-types', (req, res)=>{
    const productName = req.body.productName; 
    const productCategory = req.body.productCategory; 
    let theQuery;
    let values; 

    if(productCategory.length > 0){
        theQuery = `SELECT * FROM products where product_name LIKE '${productName}%' AND product_category = '${productCategory}';`;
    } else{
        theQuery =  `SELECT * FROM products where product_name LIKE '${productName}%';` 
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
    const userID = req.body.userID; 
    const minCost = req.body.minCost; 
    const maxCost = req.body.maxCost; 

    let theQuery; 
    let values; 
  
    if(orderID.length > 0){
        theQuery = 'SELECT * FROM orders WHERE order_id=?';
        values = [orderID]; 
    } else if(minCost.length && maxCost.length > 0){
        theQuery = 'SELECT * FROM Orders WHERE order_cost > ? AND order_cost < ?;'
        values = [minCost, maxCost]
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

app.post('/item-search', (req,res) =>{
    const itemName = req.body.itemName; 
    console.log(itemName)
    let theQuery = `SELECT ItemListings.item_id, products.product_name FROM ItemListings JOIN products WHERE products.product_name LIKE '${itemName}%';`;
    db.query(
        theQuery,
        (err, result)=>{
            if(err) {
                console.log(err)
                res.send({ result : (err.sqlMessage), query:  theQuery, dbResponse: "Uh-oh, something went wrong." + err})
            } else {
                console.log("Trying to turn result into json: " + result)
                res.send({result : result, query:  theQuery, dbResponse: "Success! Fetching user data 🎉"})
            }
        }
    )
})

app.post('/order-search', (req,res)=>{
    const fname = req.body.fname; 
    const lname = req.body.lname; 
    console.log("USER-SEARCH ")
    let theQuery;
    let values; 
    if(fname.length > 0 && lname.length > 0){
        theQuery = `SELECT * FROM Orders JOIN users WHERE users.first_name = ? AND users.last_name = ?;`
        values = [fname, lname];
    } else if (fname.length > 0) {
        theQuery = `SELECT * FROM Orders JOIN users WHERE users.first_name ?; `
        values = [fname]; 
    } else if (lname.length > 0 ){
        theQuery = `SELECT * FROM Orders JOIN users WHERE users.last_name ?;`
        values = [lname]; 
    }

    db.query(
        theQuery,
        values,
        (err, result)=>{
            if(err) {
                console.log(err)
                res.send({ result : (err.sqlMessage), query:  theQuery, dbResponse: "Uh-oh, something went wrong." + err})
            } else {
                console.log("Trying to turn result into json: " + result)
                res.send({result : result, query:  theQuery, dbResponse: "Success! Fetching user data 🎉"})
            }
        }
    )
    
})

app.post('/user-search', (req,res)=>{
    const fname = req.body.fname; 
    const lname = req.body.lname; 
    console.log("USER-SEARCH ")
    let theQuery;
    let values; 
    if(fname.length > 0 && lname.length > 0){
        theQuery = `SELECT  user_id, first_name, last_name FROM users WHERE first_name = ? && last_name = ?`
        values = [fname, lname];
    } else if (fname.length > 0) {
        theQuery = `SELECT user_id, first_name, last_name FROM users WHERE first_name = ?`
        values = [fname]; 
    } else if (lname.length > 0 ){
        theQuery = `SELECT user_id, first_name, last_name FROM users WHERE last_name = ?`
        values = [lname]; 
    }

    db.query(
        theQuery,
        values,
        (err, result)=>{
            if(err) {
                console.log(err)
                res.send({ result : (err.sqlMessage), query:  theQuery, dbResponse: "Uh-oh, something went wrong." + err})
            } else {
                console.log("Trying to turn result into json: " + result)
                res.send({result : result, query:  theQuery, dbResponse: "Success! Fetching user data 🎉"})
            }
        }
    )
    
})

/** READ queries */
app.post('/get-user-account', (req, res)=>{
    const UID = req.body.UID; 
    const email = req.body.email; 
    const fname = req.body.fname; 
    const lname = req.body.lname; 
    const seller = req.body.seller; 
    const fInitial = (req.body.fInitial);
    const lInitial = (req.body.lInitial); 
    console.log(typeof fInitial);
    console.log(typeof lInitial);
    console.log(fname + lname)
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
        console.log("OPTION 4");
        theQuery = `SELECT * FROM users WHERE (first_name LIKE '${fInitial}%' AND last_name LIKE '${lInitial}%')`;
    }
    
    if((seller) && (fInitial.length > 0 && lInitial.length > 0)){
        console.log("OPTION 5")
        theQuery = `SELECT * FROM users JOIN sellers WHERE (users.first_name LIKE '${fInitial}%' AND users.last_name LIKE '${lInitial}%')`;

    }

    db.query(
        theQuery,
        values,
        (err, result)=>{
            if(err) {
                console.log(err)
                res.send({ result : (err.sqlMessage), query:  theQuery, dbResponse: "Uh-oh, something went wrong." + err})
            } else {
                console.log("Trying to turn result into json: " + result)
                res.send({result : result, query:  theQuery, dbResponse: "Success! Fetching user data 🎉"})
            }
        }
    )

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
    const showItems = req.body.showItems; 
    const city = req.body.city;
    console.log(showItems)
    let theQuery;
    let values; 

    if(showItems == false && city.length == 0){
        theQuery = 'SELECT * FROM warehouses WHERE warehouse_id = ?';
        values = [WID]
    } else if (showItems && city.length == 0){
        theQuery = 'select * FROM warehouses JOIN itemlistings where warehouses.warehouse_id = ?;' 
        values = [WID]
    } else if (showItems == false){
        theQuery = 'SELECT * FROM warehouses WHERE city = ?;'
        values = [city]
    } else {
        theQuery = 'SELECT * FROM warehouses JOIN itemlistings where warehouses.city = ?;'
        values=[city]
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



app.post('/delete-user', (req,res) => {
    let UID = req.body.UID; 
    let theQuery = 'DELETE FROM Users WHERE user_id = ?'
    let value = [UID]

    db.query(
        theQuery,
        value,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "DELETE query sent to the database 🎉"})
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
            else res.send({query:  theQuery, dbResponse: "Success! Deleted an item listing from the database 🎉"})
        }
    )
})

app.post('/delete-order-invoice', (req,res) => {
    let orderID = req.body.orderID; 
    let theQuery = 'DELETE FROM orders WHERE order_id = ?'
    let value = [orderID]

    db.query(
        theQuery,
        value,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Deleted an order invoice from the database 🎉"})
        }
    )
})
app.post('/delete-product-category', (req,res) => {
    let category= req.body.category; 
    let theQuery = 'DELETE FROM productcategories WHERE category_name = ?'
    let value = [category];

    db.query(
        theQuery,
        value,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Sent the DELETE query to the database 🎉"})
        }
    )
})

app.post('/delete-product-type', (req,res) => {
    let product= req.body.productID; 
    let theQuery = 'DELETE FROM products WHERE product_id = ?'
    let value = [product];

    db.query(
        theQuery,
        value,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Sent the DELETE query to the database 🎉"})
        }
    )
})

app.post('/delete-warehouse', (req,res) => {
    let warehouse= req.body.WID; 
    let theQuery = 'DELETE FROM warehouses WHERE warehouse_id = ?'
    let value = [warehouse];

    db.query(
        theQuery,
        value,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Deleted an warehouse from the database 🎉"})
        }
    )
})


app.post('/update-user', (req,res) => {
    const UID = req.body.UID;
    const fname = req.body.fname; 
    const lname = req.body.lname; 
    const email = req.body.email; 
    const billingAddress = req.body.billingAddress;

    let theQuery;
    let values;

    if(fname.length > 0){
        theQuery = "UPDATE users SET first_name= ? WHERE user_id = ?;";
        values = [fname, UID]
        console.log("UID: " + UID + typeof UID)
        console.log("Fname: " + fname)
    }
    else if(lname.length > 0){
        theQuery = 'UPDATE users SET last_name = ? WHERE user_id = ?;';
        values = [lname, UID]
    }
    else if(email.length > 0){
        theQuery = 'UPDATE users SET email = ? WHERE user_id = ?;';
        values = [email, UID]
    }
    else if (billingAddress.length > 0){
        theQuery = 'UPDATE users SET billing_address = ? WHERE user_id = ?;';
        values = [billingAddress, UID]
    }

    db.query(
        theQuery,
        values,
        (err, result) => {
            if(err) {
                console.log(err); 
                res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            }
            else res.send({query:  theQuery, dbResponse: "Success! Sent the DELETE query to the database 🎉"})
        }
    )
})

app.post('/update-order', (req,res) => {
    let orderID = req.body.orderID; 
    let orderStatus = req.body.orderStatus; 
    let tracking = req.body.tracking; 
    let shippingProvider = req.body.shippingProvider; 
    let paymentStatus = req.body.paymentStatus; UPDATE

    let theQuery;
    let values;

    if(orderStatus.length > 0){
        theQuery = "UPDATE orderstatus SET shipping_status= ? WHERE order_id = ?;"
        values = [orderStatus, orderID]
    }
    else if(tracking.length > 0){
        theQuery = "UPDATE orderstatus SET tracking_id= ? WHERE order_id = ?;"
        values = [tracking, orderID]
    }
    else if(shippingProvider.length > 0){
        theQuery = "UPDATE orderstatus SET shipping_provider= ? WHERE order_id = ?;"
        values = [shippingProvider, orderID]
    }
    else if(paymentStatus.length > 0){
        theQuery = "UPDATE orderstatus SET paid_status= ? WHERE order_id = ?;"
        values = [paymentStatus, orderID]
    }

    db.query(
        theQuery,
        values,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Updated order invoice. 🎉"})
        }
    )
})

app.post('/delete-warehouse', (req,res) => {
    let warehouse= req.body.WID; 
    let theQuery = 'DELETE FROM warehouses WHERE warehouse_id = ?'
    let value = [warehouse];

    db.query(
        theQuery,
        value,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Deleted an warehouse from the database 🎉"})
        }
    )
})

app.post('/update-product', (req, res) =>{
     const productName = req.body.productName; 
     const productCategory = req.body.productCategory;
     const productDescription = req.body.productDescription; 
     const prodID = req.body.prodID; 

     let theQuery;
     let values;

     if(productName.length > 0){
        theQuery = "UPDATE products SET product_name= ? WHERE product_ID = ?;"
        values = [productName, prodID]
    }
    else if(productDescription.length > 0){
        theQuery = "UPDATE products SET product_description= ? WHERE product_ID = ?;"
        values = [productDescription, prodID]
    }
    else if(productCategory.length > 0){
        theQuery = "UPDATE products SET product_category= ? WHERE product_ID = ?;"
        values = [productCategory, prodID]
    }

    db.query(
        theQuery,
        values,
        (err, result) => {
            if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
            else res.send({query:  theQuery, dbResponse: "Success! Updated the product information! 🎉"})
        }
    )
})

app.post('/update-listings', (req, res) =>{
    const condition = req.body.condition; 
    const itemPrice = req.body.itemPrice;
    const shippingPrice = req.body.shippingPrice; 
    const itemID = req.body.itemID; 

    let theQuery;
    let values;

    if(condition.length > 0){
       theQuery = "UPDATE itemlistings SET item_condition= ? WHERE item_id = ?;"
       values = [condition, itemID]
   }
   else if(itemPrice.length > 0){
       theQuery = "UPDATE itemlistings SET item_price= ? WHERE item_id = ?;"
       values = [itemPrice, itemID]
   }
   else if(shippingPrice.length > 0){
       theQuery = "UPDATE itemlistings SET shipping_price= ? WHERE item_id = ?;"
       values = [shippingPrice, itemID]
   }

   db.query(
       theQuery,
       values,
       (err, result) => {
           if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
           else res.send({query:  theQuery, dbResponse: "Success! Updated the product information! 🎉"})
       }
   )
})

app.post('/update-warehouse', (req,res) => {
    let warehouse= req.body.WID; 
    let city = req.body.city; 
    let state = req.body.state;
    let country = req.body.country; 


    if((city.length < 1) || (state.length < 1) || (country.length < 1))
        res.send({query : "no query sent, not enough data.", dbResponse: "Please enter all required fields first."})
    else{
        let theQuery = "UPDATE warehouses SET city= ?, the_state=?, country=? WHERE warehouse_id = ?;";
        let values = [city, state, country, warehouse];
        db.query(
            theQuery,
            values,
            (err, result) => {
                if(err) res.send({query:  theQuery, dbResponse: "Uh-oh, something went wrong. " + err})
                else res.send({query:  theQuery, dbResponse: "Success! Edited a warehouse location 🎉"})
            }
        )
    }
})