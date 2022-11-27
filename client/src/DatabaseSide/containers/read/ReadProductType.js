import React, {useState} from 'react'

export default function ProductType() {
  const[productName, setName] = useState("");
  const[productCategory, setCategory] = useState(""); //want to be able to fetch available categories from the database and display them

  return (
    <div className="form-field">
      <h2>Search for a Product Type:</h2>
      <form>
        <label htmlFor='productName'>Product Name:</label>
        <input
          placeholder='for example: Nike AF1 Shoes'
          type='text'
          id='productName'
          value={productName}
          onChange = {(e) => setName(e.target.value)}
        />
        <label htmlFor='productCategory'>Product Category:</label>
        <p>*leave blank if you want to search across all product categories</p>
        <select
          value={productCategory}
          onChange={(e)=> setCategory(e.target.value)}
        >
          <option value=""></option>
          <option value="shoes">Shoes</option>
          <option value="hat">Hat</option>
        </select>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}