import React, {useState} from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useMatch,
  Link
} from 'react-router-dom';

export default function Query() {
  const [customQuery, setCustomQuery] = useState("");

  const submitted = (e) =>{
    e.preventDefault(); 
  }

  return (
    <div className='form-field'>
      <h1 className="container__header">Query</h1>
      <form onSubmit={submitted}>
        <label htmlFor='category'>Enter a custom MySQL query here: </label>
        <input 
            placeholder="ex. 'SELECT * FROM users;'"
            type="text" 
            id="category" 
            name="category" 
            value={customQuery}
            onChange = {(e) => setCustomQuery(e.target.value)}
          />
          <input className="submit" type="submit" value="Submit"/>      
      </form>
    </div>
  )
}
