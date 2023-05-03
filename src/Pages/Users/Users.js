import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    let [users, setUsers] = useState([]);
    // let [quantity, setQuantity] = useState(1);
    useEffect(() => {
        fetch(`https://manufacturer-website-s670.onrender.com/user`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data);
            })
    }, []);
    return (
        <div className='d-flex flex-column align-items-center m-5'>
            <Link to='/user/addUser' className="btn btn-primary ">Add Users</Link>
            <h1 className='m-5'>Users Detail</h1>
            {
                users.map(user => <div class="card m-3" style={{ width: '28rem' }}>
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted">User ID: {user._id}</h6>
                        <h5 class="card-title">Email:{user?.email}</h5>
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a> */}
                    </div>
                </div>)
            }

        </div >
    );
};

export default Users;