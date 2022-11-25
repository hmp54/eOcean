import React, {useState} from 'react'

export default function UpdateUserAccount() {
  const[UID, setUID] = useState(""); 
  const[fname, setfname] = useState("");
  const[lname, setlname] = useState("");
  const[email, setemail] = useState("");
  const[cardNum, setcardNum] = useState("");
  const[billingAddress, setbillingAddress] = useState("");
  const[shippingAddress, setshippingAddress] = useState("");
  const[isSeller, setIsSeller] = useState("");
  const submitted = (e) =>{
    e.preventDefault(); 
    console.log(UID); 
  }

  return (
    <div className='form-field'>
      <h3>Enter the UID of the user account you wish to edit: </h3>
      <form onSubmit={submitted}>
        <label htmlFor="UID">UID:</label>
        <input 
          type="text"
          placeholder="ex. 123456"
          value={UID}
          onChange={(e)=> setUID(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>


    <p className="testMsg">
      DEV NOTE (delete before submitting): 
      upon submission, the app will 
      attempt to search for a user account with this UID. If no user is found, the 
      console will tell the user that no user account with this UID was found. 
      If account is found, the form below will be presented for the user to fill out: 
    </p>

    <p className="testMsg">
      The same workflow applies to all sections under "UPDATE"
    </p>
    
    
    <form onSubmit={submitted}>
        <label htmlFor="fname" >First Name:</label>
        <input 
          placeholder="First name"
          type="text" 
          id="fname" 
          name="fname" 
          value={fname}
          onChange={(e) => setfname(e.target.value)}
        />
        <label htmlFor="lname">Last Name:</label>
        <input 
          placeholder="Last name"
          type="text" 
          id="lname" 
          name="lname" 
          value={lname}
          onChange = {(e) => setlname(e.target.value)}
        />
        <label htmlFor="email">email:</label>
        <input 
          placeholder="email"
          type="text" 
          id="email" 
          name="email" 
          value={email}
          onChange = {(e) => setemail(e.target.value)}
        />
        <label htmlFor="cardNum">Credit Card Number:</label>
        <input 
          placeholder="Credit Card Number"
          type="text" 
          id="cardNum" 
          name="cardNum" 
          value={cardNum}
          onChange = {(e) => setcardNum(e.target.value)}
        />
        <label htmlFor="billingAddress">Billing Address:</label>
        <input 
          placeholder="Billing Address"
          type="text" 
          id="billingAddress" 
          name="billingAddress" 
          value={billingAddress}
          onChange = {(e) => setbillingAddress(e.target.value)}
        />
        <label htmlFor="shippingAddress">Shipping Address:</label>
        <input 
          placeholder="Shipping Address"
          type="text" 
          id="shippingAddress" 
          name="shippingAddress" 
          value={shippingAddress}
          onChange = {(e) => setshippingAddress(e.target.value)}
        />
        <label htmlFor="isSeller">Seller status:</label>
        <select
          id="isSeller"
          value={isSeller}
          onChange={(e)=> setIsSeller(e.target.value)}
        >
          <option value="seller">Seller</option>
          <option value="notSeller">Not a seller</option>
        </select>
        <input className="submit" type="submit" value="Submit"/>
      </form>
  </div>
  )
}
