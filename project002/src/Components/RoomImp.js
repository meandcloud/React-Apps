import React, { useState } from 'react';

function RoomImp(){
    let [lit, setLit] = useState(false)

    function updateLit(){
        setLit(!lit)
    }

    return(
        <>

            <div className={`box ${lit? "lit": "dark"}`}>
                <h1>The room is {lit ? "Lit"  : "Dark"}</h1>
                
            </div>
            <button className="btn" onClick={updateLit}>Toggle Light</button>

        </>

    )
}

export default RoomImp