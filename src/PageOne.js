import React, { useEffect, useState } from 'react'
import Item from './Item';
// page 1:
 
// Api url:
// https://jsonplaceholder.typicode.com/posts/
 
// Fetch data from a mock API endpoint
 
// Display the data in a React component with the following features:
// Fetch and display a list of items from the API.
// Allow the user to click on an item to view its details.
 
// Create a form component that takes user input for a new item / edit item/ delete the exiting item without making an additional API call.
 
const PageOne = () => {
  const [items,setItems]=useState([]);
  const [item,setItem]=useState({});

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(res=>res.json())
    .then(data=>setItems(data))
  },[])

    return (
    <div>
       {items.length>0 && items.map((item)=>{
        return(
        <>
            <Item item={item}/> 
        </>
        )
       })
       }
    </div>
  )
}

export default PageOne