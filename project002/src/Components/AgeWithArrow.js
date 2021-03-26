import React, { useState } from 'react'

function AgeWithArrow(){

    let [age, setAge] = useState(11)

    // const updateAge = () =>{
    //     setAge(++age)
    // }

    return(
        <>

            <h1>My name is Sana and my age is {age} years</h1>
            {/* <button onClick={updateAge}>Click</button> */}

            <button onClick={()=>{
                console.log("increase")
                setAge(++age)
            }}>Increase</button>
        </>
    )
}

export default AgeWithArrow