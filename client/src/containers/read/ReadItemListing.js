import React, { useState }  from 'react'

export default function ReadProductListing() {
  const[itemID, setItemID] = useState(""); 
  const[min, setMin] = useState("");
  const [max, setMax] = useState("");
  const[productCategory, setProductCategory] = useState("");
  const[sellerID, setSellerID] = useState(""); 
  const submitted = (e) =>{
    e.preventDefault(); 
  }

  return (
    <div className="form-field">
      <form onSubmit={submitted}>
        <h3>Search for a specific item ID: </h3>
        <label htmlFor="item-id">Item ID:</label>
        <input 
          placeholder="ex. 123456"
          type="text"
          id="item-id"
          value={itemID}
          onChange={(e) => setItemID(e.target.value)}
        />

        <h3>By Seller ID: </h3>
        <input 
          placeholder="ex. 123456"
          type="text"
          id="sellerID"
          value={sellerID}
          onChange={(e) => setSellerID(e.target.value)}
        />

        <h3>OR do a general search: </h3>
        <label htmlFor="item-id">Min cost ($USD):</label>
        <input 
          placeholder="0"
          type="text"
          id="item-id"
          value={itemID}
          onChange={(e) => setItemID(e.target.value)}
        />
        <label htmlFor="item-id">Max cost ($USD):</label>
        <input 
          placeholder="99999"
          type="text"
          id="item-id"
          value={itemID}
          onChange={(e) => setItemID(e.target.value)}
        />
                <label htmlFor="item-id">Product Category:</label>
        <input 
          placeholder="ex. sneakers"
          type="text"
          id="item-id"
          value={itemID}
          onChange={(e) => setItemID(e.target.value)}
        />

        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

/**
 * 
 * import React, { useState }  from 'react'


  const submitted = (e) =>{
    e.preventDefault(); 
  }

  return (
    <div className="form-field">
      <form onSubmit={submitted}>
        <label htmlFor=""></label>
        <input 
          placeholder=""
          type="text"
          id=""
          value={}
          onChange={(e) => setfname(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
 */