import React, {useState} from 'react'

export default function ProductType() {
  const[productName, setName] = useState("");
  const[productCategory, setCategory] = useState(""); //want to be able to fetch available categories from the database and display them
  const[productDescription, setDescription] = useState(""); 

  return (
    <div className="form-field">
      <h2>Create a New Product Type:</h2>
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
        <p>*if a product category you need is not listed here, you can create a new one under "product category" tab</p>

        <select
          value={productCategory}
          onChange={(e)=> setCategory(e.target.value)}
        >
          <option value="shoes">Shoes</option>
          <option value="hat">Hat</option>
        </select>
        <label htmlFor='productDescription'>Product Description:</label>
        <input
          placeholder='for example: white low-top tennis shoes.'
          type='text'
          id='productDescription'
          value={productDescription}
          onChange = {(e) => setDescription(e.target.value)}
        />
        
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

/*
product ID (auto)
product name
product category
product description 
*/
