import React, { useState }  from 'react'

export default function Seller() {
    const[uid, setUID] = useState("");
    const[email, setEmail] = useState(""); 

    const submitted = (e) =>{
        e.preventDefault(); 
        console.log(uid + email); 
    }

  return (
    <div className="insert__option">
        <h2>Register new seller</h2>
        <form onSubmit={submitted}>
            <p>*Seller must already have an existing user account first. To create one, go to Insert > New User.</p>
            <label htmlFor="uid">User ID:</label>
            <input 
                type="text" 
                id="uid"
                value={uid}
                onChange={(e) => setUID(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input 
                type="text" 
                id="email" 
                name="email"
                value ={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                className="submit"
                type="submit" 
                value="Submit"
            />
        </form>
    </div>

  )
}
