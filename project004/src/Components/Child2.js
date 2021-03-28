import React, { useReducer } from 'react'
import NumberReducer from './NumberReducer'

function Child2(){

    let [state, dispatch] = useReducer(NumberReducer, 52)

    return(
        <>

            <h1>This is the Child2 Number: {state}</h1> 

            <br />
            <button onClick={() => {dispatch({type: "INC", val: 10})}}>INCREMENT</button>

            <button onClick={()=> {dispatch({type: "DEC", val: 10})} } >DECREMENT</button>
        </>
    )
}

export default Child2