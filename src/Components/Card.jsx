import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div class="card mt-3" style={{ "width": "18rem", "maxheight": "360px" }}>
                    <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">T!his is some description about menu</p>
                        <div className="container w-100">
                            <select className="m-2 h-100 w- bg-warning rounded" >
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>);
                                })}
                            </select>
                            <select className="m-2 h-100  bg-warning  rounded" >
                                <option>Half</option>
                                <option>Full</option>
                            </select>
                            <div className='d-inline h-100 fs-5 '>
                                Total Price
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
