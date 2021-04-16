import React, { useState } from 'react'

function CourseList() {

    const [search, setSearch] = useState('');

    
    let courses = [
        {
            id: 101,
            category: 'Computer Science',
            course: 'HTML',
            duration: '2 Month',
            cost: 20,
            description: 'Basic to advanced level of project based learning'
        },

        {
            id: 102,
            category: 'Computer Science',
            course: 'CSS',
            duration: '2 Month',
            cost: 25,
            description: 'Basic to advanced level of project based learning'
        },

        {
            id: 103,
            category: 'Computer Science',
            course: 'JavaScript',
            duration: '3 Month',
            cost: 40,
            description: 'Basic to advanced level of project based learning'
        },

        {
            id: 104,
            category: 'Computer Science',
            course: 'Bootstrap 4.0',
            duration: '1 Month',
            cost: 10,
            description: 'Basic to advanced level of project based learning'
        },


    ]

    const filteredCourses = courses.filter(data => {
        return data.course.toLowerCase().includes(search.toLowerCase())
        
    })


    return (
        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 myDatabase">
                        <h1>Computer Science Program Database</h1>


                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search....."
                            onChange={e => setSearch(e.target.value)}
                        />


                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Course Id</th>
                                    <th>Category</th>
                                    <th>Course</th>
                                    <th>Length</th>
                                    <th>Cost</th>
                                    <th>Description</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredCourses.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.category}</td>
                                        <td>{item.course}</td>
                                        <td>{item.duration}</td>
                                        <td>${item.cost}.00</td>
                                        <td>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}


export default CourseList