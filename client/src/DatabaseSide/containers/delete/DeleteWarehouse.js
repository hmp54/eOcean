import React, {useState} from 'react'

export default function DeleteWarehouse() {
    const [WID, setWID] = useState(""); 
    
    const submitted = (e) =>{
        e.preventDefault(); 
    }

    return (
    <div className="form-field">
        <h3>enter ID of the warehouse you want to delete: </h3>
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

        <form>
            <h3>Are you sure you want to delete this product type?</h3>
            <p>This action cannot be undone!</p>
            <button>Yes</button>
            <button>No</button>
        </form>
    </div>
    )
}
