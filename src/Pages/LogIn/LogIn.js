import React, { useState } from 'react';
import './LogIn.css';
import signInImage from '../../images/signin-image.jpg';
import facebookImg from '../../images/facebook.jpg';
import googleImg from '../../images/google.png';
import githubImg from '../../images/gitgub.png';
import { faEnvelope, faUnlockKeyhole, fagoog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firabase.init';
import Loading from '../Loading/Loading';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [error1, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, userGoogle, loadingGoogle] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const handleEmail = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log((e.target.value))
    }
    if (loading || loadingGoogle) {
        return <Loading></Loading>
    }
    if (user || userGoogle) {
        navigate(from, { replace: true });
        // console.log(user);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);

    }
    const handleGoogleSignin = () => {
        signInWithGoogle();

    }

    const resetPassword = async () => {

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password Reset Email Sent Successfully!!!!');
        }
        else {
            toast('Enter Your Email Correctly');
        }
    }
    return (
        <div className="main">

            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src={signInImage} alt="sing up image" /></figure>
                            <a href="#" className="signup-image-link"><Link to='/signup'>Create an account</Link></a>
                        </div>
                        <ToastContainer />
                        <div className="signin-form">
                            <h2 className="form-title">Sign In</h2>
                            <p className='text-danger'>{error ? error.message : ''}</p>
                            <form onSubmit={handleFormSubmit} method="POST" className="register-form" id="login-form">
                                <div className="form-group d-flex align-items-center">
                                    <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /></label>
                                    <input onBlur={handleEmail} type="text" name="email" id="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group d-flex align-items-center pt-3">
                                    <label htmlFor="pass"><FontAwesomeIcon icon={faUnlockKeyhole}></FontAwesomeIcon></label>
                                    <input onBlur={handlePassword} type="password" name="pass" id="pass" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                    <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                                </div>

                            </form>
                            <button className='btn btn-link mt-2' onClick={resetPassword}>Reset Password</button>
                            <div className="social-login">
                                <span className="social-label">Or login with</span>
                                <ul className="socials">
                                    <li onClick={handleGoogleSignin}> <a href="#"><i className="display-flex-center zmdi zmdi-google"><img src={googleImg} alt="" /></i></a></li>
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook" alt="" ><img src={facebookImg} alt="" /></i></a></li>
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"><img src={githubImg} alt="" /></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default LogIn;