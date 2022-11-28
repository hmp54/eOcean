import React, { useState }  from 'react'

export default function ReadProductListing() {
  const[itemID, setItemID] = useState(""); 
  const[min, setMin] = useState("");
  const [max, setMax] = useState("");
  const[productCategory, setProductCategory] = useState("");
  const[sellerID, setSellerID] = useState(""); 
  const[showSeller, setShowSeller] = useState(""); 
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
        <label htmlFor="min">Min cost ($USD):</label>
        <input 
          placeholder="0"
          type="text"
          id="min"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <label htmlFor="max">Max cost ($USD):</label>
        <input 
          placeholder="99999"
          type="text"
          id="max"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
        <label htmlFor="productCategory">Product Category:</label>
        <input 
          placeholder="ex. sneakers"
          type="text"
          id="productCategory"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        />
        <label htmlFor="showSeller">Show seller information</label>
        <select
          id="showSeller"
          value={showSeller}
          onChange={(e)=> setShowSeller(e.target.value)}
        >
          <option></option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
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