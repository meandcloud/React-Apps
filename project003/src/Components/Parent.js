import React from 'react'
import Child from './Child'

function Parent(props){

    return(
        <>

            Parent
            <br />

            <Child num={props.num}/>    

        </>
    )
}

export default Parent