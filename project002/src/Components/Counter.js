import React, { useState } from 'react'

function Counter(){

    let [count, setCount] = useState(0)

    const increaseMe = () =>{
        setCount(++count)
    }

    const decreaseMe = () =>{
        setCount(--count)
        
    }
    

    return(
        <>

        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <h1>My Counter App</h1>
                    <p>Starting: {count}</p>
                    <button className="btn btn-warning d-flex mb-3" onClick={increaseMe}>Increase Me</button>
                    <button className="btn btn-warning" onClick={decreaseMe}>Decrease Me</button>
                </div>
            </div>
        </div>


        </>
    )
}

export default Counter