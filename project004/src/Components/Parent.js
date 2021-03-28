import React from 'react'
import Child from './Child'
import Child2 from './Child2'

function Parent(){
    return(
        <>

            <h1>This is the Parent</h1>
            <br />

            <Child/>

            <br />

            <Child2 />

        </>
    )
}

export default Parent