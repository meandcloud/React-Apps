import React, { useContext } from 'react'
import ValueContext from '../ValueContext'

function Child(){
    let val1 = useContext(ValueContext)
    let updateValue = val1[1]
    return(
        <>
            <h1>This is the Child Number: {val1[0]} </h1>

            <button onClick={() => {updateValue (++val1[0])} }>Increase Child Number</button>

            
        </>
    )
}

export default Child