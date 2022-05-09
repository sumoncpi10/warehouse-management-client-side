import React from 'react';
import facebookImg from '../../images/facebook.jpg';
import googleImg from '../../images/google.png';
import githubImg from '../../images/gitgub.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24">
                            {/* <use xlink:href="#bootstrap" /> */}
                        </svg>
                    </a>
                    <span class="text-muted">&copy; {year} TakePic Photography of Bangladesh </span>
                </div>

                <ul className="socials">
                    <li ><Link to="/login"><i className="display-flex-center zmdi zmdi-google"><img src={googleImg} alt="" /></i></Link></li>
                    <li><Link to="/login"><i className="display-flex-center zmdi zmdi-facebook" alt="" ><img src={facebookImg} alt="" /></i></Link></li>
                    <li><Link to="/login"><i className="display-flex-center zmdi zmdi-twitter"><img src={githubImg} alt="" /></i></Link></li>
                </ul>

            </footer>
        </div>
    );
};

export default Footer;