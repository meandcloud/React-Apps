import React, { useState } from 'react'

function AgeWithArrow(){

    const [age, setAge] = useState(10)

    const updateAge = ()=>{
        setAge(11)
    }

    const [status, setStatus] = useState('offline')

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <h1>I'm Using Arrow Function</h1>
                        <h3 className="mt-5 mb-5">Creating Age and Status Program</h3>

                        <h4>My name is Sana Sajjad and my age is {age} </h4>
                        <button className="btn btn-primary" onClick={updateAge}>Update Age</button>

                        <h5 className="mt-5">My Status: {status}</h5>
                        <button className="btn btn-dark" onClick={() => setStatus('Online')}>Log in</button>
                    </div>
                </div>
            </div>
       
        </>
    )
}

export default AgeWithArrow