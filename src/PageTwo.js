import React, { useEffect } from 'react'
// page 2
// Create a simple React component that represents a counter. The counter should have the following functionalities:
 
// Display the current count.
// Buttons to increment and decrement the count.
// A reset button to set the count back to zero.
// Ensure that the count cannot go below zero. Use React state for managing the count
 
// Implement React Router to navigate between the counter page and the item list from page 2.
const PageTwo = () => {

    const[count,setCount]=useState[0];
   
   

       const handleCount=(type)=>{
           if(type==="inc")
               setCount=count+1;
           if(type==="dec")
               setCount=count-1;
           if(type==="inc")
               setCount=0;
       }


  return (
    <div>
        {count}
        <button onClick={handleCount}>increment</button>
        <button onClick={handleCount}>decrement</button>
        <button onClick={handleCount}>reset</button>
    
    </div>
  )
}

export default PageTwo