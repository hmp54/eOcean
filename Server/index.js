const express = require('express'); 
const app = express(); //this is used to create routes through which our queries are sent
const cors = require('cors'); 
const mysql = require('mysql2'); 

app.use(cors());
app.use(express.json()); 

//creates connection to an existing database 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '', //insert password to database here once it's created 
    database: 'eOcean' 
})

//example of how to send a query to the database
app.post('/create', (req, res) => { 
    const email = req.body.email; 
    const username = req.body.username; 
    const password = req.body.password;
    const phoneNumber = req.body.phoneNumber; 

    console.log("Inserting new user into database: " + email + " "  + username + " " + password + " " + phoneNumber); 

    db.query(
        'INSERT INTO Accounts (uEmail, uName, uPassword, uPhone_Num) VALUES (?,?,?,?)', 
        [email, username, password, phoneNumber], 
        (err ,result) => {
            if(err){
                res.send(err + " " + req.body)
                console.log(req.body)
                console.log(err)
            } else{
                res.send(result);
            }
        }
    )
})