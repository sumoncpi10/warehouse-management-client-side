import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import logo from '../../images/Logo.svg';

// import CustomLink from '../CustomLink/CustomLink';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firabase.init';

import auth from '../../firabase.init';
import { useAuthState } from 'react-firebase-hooks/auth';



const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user?.email)

    const handleGoogleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='' >

            <nav class="navbar navbar-expand-lg  navbar-dark bg-primary px-5">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link class="navbar-brand" to='/'>XCN Warehouse</Link>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <Link to='/' class="nav-link" href="#">Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/products'>Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/inventory'>Inventory</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/blogs'>Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/about' class="nav-link " href="#">About</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">

                        {/* <Link to='/user/addUser' className="btn btn-primary">Add Users</Link> */}
                        <div className="col-md-3 text-end">
                            {
                                user?.email ?
                                    <div className='d-flex'>
                                        <Link to='/myitems' className="btn btn-primary">My Items</Link>
                                        <Link to='/product/addProduct' className="btn btn-primary">Add Items</Link>
                                        <Link to='/inventory' className="btn btn-primary">Manage Inventories</Link>
                                        <Link to='/users' className="btn btn-primary">Manage Users</Link>

                                        <button onClick={handleGoogleSignOut} className="btn btn-primary" href="#">Sign out</button>

                                        {/* <div className="dropdown text-end">

                                            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                                            </a>
                                            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                                <li className=''><a className="dropdown-item" href="#">{user.displayName}</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                                <li><a className="dropdown-item" href="#">Profile</a></li>

                                                <li><button onClick={handleGoogleSignOut} className="dropdown-item" href="#">Sign out</button></li>
                                            </ul>
                                        </div> */}
                                    </div> :
                                    <div className='d-flex'>
                                        {/* <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline-primary me-2">Login</button> */}
                                        <Link to='/login' className="btn btn-primary me-2">Login</Link>
                                        <Link to='/signup' className="btn btn-primary">Sign-up</Link>
                                    </div>
                            }

                        </div>

                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;




// import React, { useState } from 'react';
// import './Header.css';
// // import logo from '../../images/Logo.svg';

// // import CustomLink from '../CustomLink/CustomLink';
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import app from '../../firabase.init';
// import { Link } from 'react-router-dom';
// import auth from '../../firabase.init';
// import { useAuthState } from 'react-firebase-hooks/auth';


// const Header = () => {

//     const [user] = useAuthState(auth);


//     const handleGoogleSignOut = () => {
//         signOut(auth);
//     }

//     return (
//         <div>

//             <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" >
//                 <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
//                     {/* <img className="bi me-2" width="100" height="42" role="img" aria-label="Bootstrap" src={logo} alt="" /> */}
//                 </Link>

//                 <ul className="nav nav-pills">
//                     <li className="nav-item"><Link to="/shop" className="nav-link " aria-current="page">Shop</Link></li>
//                     <li className="nav-item"><Link to="/orders" className="nav-link">Orders</Link></li>
//                     <li className="nav-item"><Link to="/inventory" className="nav-link">Inventory</Link></li>
//                     <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
//                 </ul>

//                 <div className="col-md-3 text-end">
//                     {
//                         user?.email ?
//                             <div className="dropdown text-end">
//                                 <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
//                                     <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
//                                 </a>
//                                 <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
//                                     <li className=''><a className="dropdown-item" href="#">{user.displayName}</a></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><a className="dropdown-item" href="#">Settings</a></li>
//                                     <li><a className="dropdown-item" href="#">Profile</a></li>

//                                     <li><button onClick={handleGoogleSignOut} className="dropdown-item" href="#">Sign out</button></li>
//                                 </ul>
//                             </div> :
//                             <div>
//                                 {/* <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline-primary me-2">Login</button> */}
//                                 <Link to='/login' className="btn btn-outline-primary me-2">Login</Link>
//                                 <Link to='/signup' className="btn btn-primary">Sign-up</Link>
//                             </div>
//                     }

//                 </div>
//             </header>


//         </div >

//     );
// };

// export default Header;