import React, { useState } from 'react'


function Room(){

    const [lit, setLit] = useState(false)

    const updateLit = () =>{
        setLit(!lit)
    }

    return(
        <>
     
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 mx-auto mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main">
                                <div className="sub">
                                    <span className={`sub ${lit ? 'lit' : 'dark'} `} ></span>
                                    <div className="card-body">
                                        <button className="btn btn-primary toggle" onClick={updateLit}>Toggle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>












            {/* The Room is = 
            {isLit ? 
            
            <div className="on">Light ON</div> : 
            
            <div className="off">Light Off</div>} */}

        </>
    )
}

export default Room