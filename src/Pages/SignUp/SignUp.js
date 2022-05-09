import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firabase.init';
import './SignUp.css';
import signUpImage from '../../images/signup-image.jpg';
import { faUser, faEnvelope, faUnlockKeyhole, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firabase.init';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error1, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log((e.target.value))
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        console.log((e.target.value))
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError('Please Enter a Email!!!!!');
            return;
        }
        else if (!password) {
            setError('Please Enter a password!!!!!!');
            return;
        }
        else if (password.length < 6) {
            setError('Password at Least 6 Character!!!!!!');
            return;
        }
        else if (password !== confirmPassword) {
            setError('Password Does not match!');
            return;
        }
        else {
            setError('');
            createUserWithEmailAndPassword(email, password);
        }

    }
    return (
        <div className="main">

            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form ">
                            <h2 className="form-title">Sign up</h2>
                            <p className='text-danger'>{error1 ? error1 : ''}</p>
                            <p className='text-danger'>{error ? error.message : ''}</p>
                            <form onSubmit={handleFormSubmit} method="POST" className="register-form g-3" id="register-form">
                                <div className="form-group d-flex align-items-center">
                                    <label htmlFor="name"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" />
                                </div>
                                <div className="form-group d-flex align-items-center">
                                    <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /></label>
                                    <input onBlur={handleEmail} type="email" name="email" id="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group d-flex align-items-center">
                                    <label htmlFor="pass"><FontAwesomeIcon icon={faUnlockKeyhole}></FontAwesomeIcon></label>
                                    <input onBlur={handlePassword} type="password" name="pass" id="pass" placeholder="Password" />
                                </div>
                                <div className="form-group d-flex align-items-center">
                                    <label htmlFor="re-pass"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></label>
                                    <input onBlur={handleConfirmPassword} type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term p-3" />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={signUpImage} alt="sing up image" /></figure>
                            <a href="#" className="signup-image-link"><Link to='/login'>I am already member</Link></a>
                        </div>
                    </div>
                </div>
            </section>



        </div>

        // <div className=''>
        //     <h1 className='mb-5'>Sign Up</h1>

        //     <div className=' d-flex justify-content-center'>

        //         <form onSubmit={handleFormSubmit} className='w-50'>
        //             <div className="form-group">
        //                 <label className="d-flex justify-content-start" htmlhtmlFor="exampleInputEmail1">Email address</label>
        //                 <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
        //                 <div className="invalid-feedback">
        //                     Please provide a valid city.
        //                 </div>
        //                 <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

        //             </div>
        //             {/* <p className='text-danger'>Please a valid Email</p> */}
        //             <div className="form-group ">
        //                 <label className="d-flex justify-content-start" htmlhtmlFor="exampleInputPassword1">Password</label>
        //                 <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
        //             </div>
        //             <div className="form-check">
        //                 <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        //                 <label className="d-flex justify-content-start" htmlhtmlFor="exampleCheck1">Check me out</label>
        //             </div>
        //             <button type="submit" className="btn btn-primary">Submit</button>
        //         </form>

        //     </div>
        // </div>





    );
};

export default SignUp;