import React, {useState} from 'react'

export default function ItemListing() {
  const [sellerID, setSellerID] = useState("");
  const [productID, setProductID] = useState("");
  const [condition, setCondition] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [shippingPrice, setShippingPrice] = useState("");
  const [itemID, setItemID] = useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log("Created item listing:" + sellerID + productID + condition)
  }

  return (
    <div className="form-field item-listing">
      <form onSubmit={submitted}>
        <h2>Enter ID for existing item listing: </h2>
        <label htmlFor="itemID">Order ID: </label>
        <input 
          id="itemID" 
          placeholder="ex. 123456"
          value={itemID}
          onChange={(e) => setItemID(e.target.value)}/>
        <input className="submit" type="submit" value="Submit"/>
      </form>

      <h2>Edit existing item listing: </h2>
      <form onSubmit={submitted}>
        <label htmlFor="sellerID">Seller ID: </label>
        <input
          placeholder='ex: 123456789'
          type='text'
          id='sellerID'
          name='sellerID'
          value={sellerID}
          onChange={(e) => setSellerID(e.target.value)}
        />
        <label htmlFor="productID">Product ID: </label>
        <input
          placeholder='ex: 123456789'
          type='text'
          id='productID'
          name='productID'
          value={productID}
          onChange={(e) => setProductID(e.target.value)}
        />
        <label htmlFor="condition">Item condition: </label>
        <select
          id="condition"
          value={condition}
          onChange={(e)=>setCondition(e.target.value)}
        >
          <option value="Brand New">Brand New</option>
          <option value="Used - Excellent">Used - Excellent</option>
          <option value="Used - Good">Used - Good</option>
          <option value="Used - Fair">Used - Fair</option>
        </select>
        <label htmlFor="warehouseLocation">Warehouse: </label>
        <select
            id="warehouse"
            value={warehouse}
            onChange={(e)=> setWarehouse(e.target.value)}
        >
            <option value="Washington DC - 1">Washington DC - 1</option>
            <option value="Portland - 4">Portland - 4</option>
            <option value="Philadelphia - 2">Philadelphia - 2</option>
        </select>
        <label htmlFor="itemPrice">Item Asking Price: </label>
        <input
          placeholder='ex: $10.99'
          type='text'
          id='itemPrice'
          name='itemPrice'
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <label htmlFor="shippingPrice">Shipping Price: </label>
        <input
          placeholder='ex: $4.99'
          type='text'
          id='shippingPrice'
          name='shippingPrice'
          value={shippingPrice}
          onChange={(e) => setShippingPrice(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

/*
item id
product id 
condition 
warehouse id
item price
shipping price

        <input
          placeholder=''
          type='text'
          id=''
          name=''
          value={}
          onChange={(e) => (e.target.value)}
        />
*/