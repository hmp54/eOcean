import React, {useState} from 'react'

export default function ItemListing() {
  const [itemID, setItemID] = useState("");
  const [productID, setProductID] = useState("");
  const [condition, setCondition] = useState("");
  const [warehouseID, setWarehouseID] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [shippingPrice, setShippingPrice] = useState("");

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log("Created item listing:" + itemID + productID + condition)
  }

  return (
    <div className="form-field item-listing">
      <h2>Create new item listing: </h2>
      <form onSubmit={submitted}>
        <label htmlFor="itemID">Item ID: </label>
        <input
          placeholder='ex: 123456789'
          type='text'
          id='itemID'
          name='itemID'
          value={itemID}
          onChange={(e) => setItemID(e.target.value)}
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
        <label htmlFor="warehouseID">Warehouse ID: </label>
        <input
          placeholder='ex: 123456789'
          type='text'
          id='warehouseID'
          name='warehouseID'
          value={warehouseID}
          onChange={(e) => setWarehouseID(e.target.value)}
        />
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