import Axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function GetCategories({getCategoryChange}) {
    let [renderList, setRenderList] = useState(); 
    let dbResponse; 

    useEffect(()=>{
        let categories =[]; 
        Axios.post("http://localhost:3001/get-dropdown-categories", {
           dbResponse : dbResponse
        }
        ).then(resp =>{
            for(let i = 0; i < resp.data.length; i++){
                categories[i] = resp.data[i].category_name; 
                setRenderList(categories.map((category, index)=>
                    <option value={category} key={index}>{category}</option>
                ))
            }
        })

    }, [])

  return (
    <select onChange={(e) => {getCategoryChange(e.target.value)}}>
        <option></option>
       {renderList}
    </select>
  )
}
