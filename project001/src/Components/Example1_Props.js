import React from 'react'

function Example1_Props(props){

    //let user = {lname: "Shabbir", age: 36}

    let course = {id: '001', course: 'HTML', duration: 'Three Months', cost: 20}
                   


    return(
        <>
           <div className="container">
               <div className="row">
                   <div className="col-md-10 mx-auto mt-5">
                       <h1 className="text-center mb-5">My Personal Data</h1>
                       <table className="table">
                           <thead>
                               <tr>
                                   <th>Roll_Number</th>
                                   <th>First Name</th>
                                   <th>Last Name</th>
                                   <th>Course</th>
                                   <th>Email</th>
                                   <th>Age</th>
                               </tr>
                           </thead>
                           <tbody>
                               <tr>
                                   <td>{props.roll}</td>
                                   <td>{props.fname}</td>
                                   <td>{props.lname}</td>
                                   <td>{props.course}</td>
                                   <td>{props.email}</td>
                                   <td>{props.age}</td>
                               </tr>
                           </tbody>
                       </table> 
                   </div>
               </div>
           </div>


           <div className="container mt-5">
               <div className="row">
                   <div className="col-md-10 mx-auto">
                       <h1 className="text-center mb-5">Programs Offer</h1>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Course Id</th>
                                    <th>Course</th>
                                    <th>Length</th>
                                    <th>Cost</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>{course.id}</td>
                                    <td>{course.course}</td>
                                    <td>{course.duration}</td>
                                    <td>${course.cost}</td>
                                </tr>
                            </tbody>
                        </table>

                   </div>
               </div>
           </div>

         

            

        </>
    )
}

export default Example1_Props