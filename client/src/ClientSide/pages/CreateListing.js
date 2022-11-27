import React, {useState} from 'react'
import './auth.css'
export default function Login() {
  const[productType, setProductType] = useState(""); 
  const[condition, setCondition] = useState('');
  const[price, setPrice] = useState(0.00); 
  const[shipping, setShipping]= useState(0.00); 
  const[description, setDescription] = useState(""); 
  const[productName, setProductName] = useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
    console.log(condition); 
  }

  return (
    <div className='auth'>
      <div className='auth__content'>
        <h1>List a new item for sale: </h1>
        <form onSubmit={submitted}>
          <input className="auth__input" type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)}/>
          <input className="auth__input" type="text" placeholder="Description" value={description}  onChange={(e) => setDescription(e.target.value)}/>
          <div className="auth__flname">
            <label htmlFor="asking-cost">Asking price: </label>
            <div>
              <label htmlFor="asking-cost">$</label>
              <input 
                  id="asking-cost"
                  className="auth__input"
                  type="text"
                  placeholder="Asking price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <label htmlFor="shipping-cost">Shipping:</label>
            <div>
              <label htmlFor="shipping-cost">$</label>
              <input 
                id="shipping-cost"
                className="auth__input"
                type="text"
                placeholder="Shipping Cost"
                value={shipping}
                onChange={(e) => setShipping(e.target.value)}
              />
            </div>
            <label className="condition" htmlFor="condition">Condition:</label>
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
          </div>
          <input className="auth__submit" type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}
