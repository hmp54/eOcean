import React, {useState} from 'react'

export default function Warehouse() {
  const [city, setCity] = useState(""); 
  const [state, setState] = useState(""); 
  const [country, setCountry] = useState(""); 
  const [WID, setWID] = useState(""); 
  const submitted = (e) =>{
    e.preventDefault(); 
    console.log("Created item listing:" + city + state + country)
  }

  return (
    <div className="form-field warehouse">
      <h3>Which warehouse do you want to edit? </h3>
        <form onSubmit={submitted}>
          <label htmlFor="WID">Warehouse ID: </label>
          <input 
            placeholder="ex. 123456"
            type="text"
            id="WID"
            value={WID}
            onChange={(e) => setWID(e.target.value)}
          />
        </form>
      
      <h3>What do you want to edit?</h3>
      <form onSubmit={submitted}>
        <label htmlFor='city'>City:</label>
        <input
          placeholder='city'
          type='text'
          id='city'
          name='city'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label htmlFor='state'>State:</label>
        <input
          placeholder='state'
          type='text'
          id='state'
          name='state'
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <label htmlFor='country'>Country:</label>
        <input
          placeholder='country'
          type='text'
          id='country'
          name='country'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input className="submit" type="submit" value="Submit"/>
      </form>
      
    </div>
  )
}