import React, { useState } from 'react'

function Age(){
    
    const [age, setAge] = useState(26)

    function updateAge(){
        setAge(36);
    }

    return(
        <>

            <h1>My Age is: {age} years</h1>

            <button onClick={updateAge}>Click</button>


        </>
    )
}

export default Age