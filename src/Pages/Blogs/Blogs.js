import React from 'react';
// import Topbanar from '../Shared/TopBanar/Topbanar';
import './Blogs.css'
const Blog = () => {
    return (
        <div>
            {/* <Topbanar></Topbanar> */}
            {/* Quiestion */}
            <div className='container'>
                <div className=' mt-5'>
                    <h1>Differences Between JavaScript vs Node JS</h1>
                    <div className='d-flex row'>
                        <ul className='col-md-6 qsn'>
                            <li><h5>JavaScript</h5></li>
                            <li>JavaScript is a programming language. It is running in any web browser with a proper browser engine.</li>
                            <li>Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</li>
                            <li>JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</li>

                        </ul>
                        <ul className='col-md-6 qsn'>
                            <li><h5>Node JS</h5></li>
                            <li>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</li>
                            <li>It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</li>
                            <li>Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-5'>
                    <h5>When should you use nodejs and when should you use mongodb?</h5>
                    <p> Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.

                        MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data. </p>

                </div>
                <div className=' mt-5'>
                    <h1>Differences between sql and nosql databases.</h1>
                    <div className='d-flex row'>
                        <ul className='col-md-6 qsn'>
                            <li><h5>sql</h5></li>
                            <li>SQL databases are relational</li>
                            <li>SQL databases use structured query language and have a predefined schema.</li>
                            <li>SQL databases are vertically scalable</li>

                        </ul>
                        <ul className='col-md-6 qsn'>
                            <li><h5>nosql</h5></li>
                            <li>NoSQL databases are non-relational</li>
                            <li>NoSQL databases have dynamic schemas for unstructured data.</li>
                            <li>NoSQL databases are horizontally scalable.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;