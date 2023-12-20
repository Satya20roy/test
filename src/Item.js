import React, { useState } from 'react'

const Item = ({item}) => {

    const[flag,setFlag]=useState(false);

    const buttonToggle=()=>{
        setFlag(!flag);
    }

    const handleAddItems=(e)=>{
      
    }

return (
    <>
    <div>{item.userId}</div>
        <button onClick={buttonToggle}>Click to view Details</button>
        <button onclick={buttonToggle}>Add Item</button>
        <button onclick={buttonToggle}>Edit Item</button>
        <button onclick={buttonToggle}>Delete Item</button>
        
        {flag && <div>
            <div>{item.title}</div>
            <div>{item.body}</div>
        </div>
        } 
        {flag &&
        <form onSubmit={handleAddItems}>
            <label>Enter User Id </label>
            <input type="text"/>
            <label>Enter Id </label>
            <input type="text"/>
            <label>Enter Title </label>
            <input type="text"/>
            <label>Enter Body</label>
            <input type="text"/>
            <button type='submit'>add</button>
        </form>
        }
    </>
  )
}

export default Item