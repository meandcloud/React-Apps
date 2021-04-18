import React, { useState } from 'react'

function Age(){
    

    const album = [
        {
            id: 1,
            title: 'Puma',
            photo:[
                "./img/shoe1_black.jpg",
                "./img/shoe1_blue.jpg",
                "./img/shoe1_grey.jpg"
            ]
        },

        {
            id: 2,
            title: 'Reebok',
            photo:[
                "./img/shoe2_black.jpg",
                "./img/shoe2_blue.jpg",
                "./img/shoe2_grey.jpg"
            ]
        },

        {
            id: 3,
            title: 'Nike',
            photo:[
                "./img/shoe3_black.jpg",
                "./img/shoe3_navy.jpg",
                "./img/shoe3_red.jpg"
            ]
        },


    ]



    const [age, setAge] = useState(26)

    function updateAge(){
        setAge(36)
    }

    const [skill, setSkill] = useState('JavaScript')

    function updateSkill(){
        setSkill('React JS')
    }


    return(
        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10 mx-auto mb-5">
                        <h1>Age Update Program</h1>

                        <h3 className="mt-5">Please Click Me, I'm {skill}</h3>
                        <button className="btn btn-info" onClick={updateSkill}>Update Me</button>

                        <h3 className="mt-5">This is my age: {age}</h3>
                        <button className="btn btn-dark" onClick={updateAge}>Update Age</button>
                    </div>
                </div>
            </div>
      

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                        {album.map((item)=>(
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={item.photo[0]} />
                                </div>
                                <div className="card-body">
                                    {item.title}
                                </div>

                                <div className="row">
                                    
                                    <div className="col-md-4">
                                        <img src={item.photo[2]} className="myphoto" />
                                    </div>
                                
                                </div>


                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Age