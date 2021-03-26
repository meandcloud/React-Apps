import React, { useState } from 'react'


function Room(){

   const [isLit, setLit] = useState(false);

   function updateLit(){
       console.log("Button Click")
       setLit(!isLit)
   }
    

    return(
        <>
            The room is = {isLit ? "LIT" : "DARK"}

            <br />

            <button onClick={updateLit}>Toggle</button>












            {/* The Room is = 
            {isLit ? 
            
            <div className="on">Light ON</div> : 
            
            <div className="off">Light Off</div>} */}

        </>
    )
}

export default Room