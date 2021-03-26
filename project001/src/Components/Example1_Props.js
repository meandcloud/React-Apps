import React from 'react'

function Example1_Props(props){

    let user = {lname: "Shabbir", age: 36}

    return(
        <>
            {/* <h3>My Name is {props.fname}</h3>
            <h3>My age is {props.age - 5}</h3> */}

            <h4>My last name is {user.lname} and my age is {user.age}</h4>

        </>
    )
}

export default Example1_Props