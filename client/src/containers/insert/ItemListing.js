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
        <input
          placeholder='ex. "good"'
          type='text'
          id='condition'
          name='condition'
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
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
        <label htmlFor="shippingPrice">Shipping Price: </label>
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