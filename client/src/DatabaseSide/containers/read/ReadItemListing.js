import React, { useState, useContext }  from 'react'
import {mapJSON} from '../../../OtherComponents/JSONFunctions'
import Axios from 'axios'; 
import {DbmsContext} from '../../screens/OptionMenu';
import GetItem from '../fetch-components/GetItem';

export default function ReadProductListing() {
  const {dbResponse, mysqlQuery, setdbResponse, setMysqlQuery} = useContext(DbmsContext);
  const[itemID, setItemID] = useState(""); 
  const[min, setMin] = useState("");
  const [max, setMax] = useState("");
  const[productCategory, setProductCategory] = useState("");
  const[sellerID, setSellerID] = useState(""); 
  const[showSeller, setShowSeller] = useState(""); 

  const submitted = (e) =>{
    e.preventDefault(); 
    Axios.post("http://localhost:3001/get-item-listing",{
      itemID : itemID
    }).then(resp =>{
      setMysqlQuery(String(resp.data.query));
      setdbResponse(mapJSON(resp.data.result)); 
    })
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

       
        <input className="submit" type="submit" value="Submit"/>
      </form>
      <GetItem/>
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