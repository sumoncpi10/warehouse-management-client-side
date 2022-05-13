import React from 'react';
// import Topbanar from '../Shared/TopBanar/Topbanar';

const About = () => {
    return (
        <div>
            {/* <Topbanar></Topbanar> */}
            <div className='m-3'>
                <h6>Developed By </h6>
                <img width={300} src="https://scontent.fcgp6-1.fna.fbcdn.net/v/t31.18172-8/20689687_1705627633079847_8101248375365087887_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=05gvW6N6l5EAX9gEYUh&_nc_ht=scontent.fcgp6-1.fna&oh=00_AT81bsh_E63d0cTtHs1ycmij8K9qsnpjUYHcCPxnJ9izXA&oe=628201E3" alt="" />
                <h2 className='p-2'>Md. Dawdujjaman Sumon</h2>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-5'>
                        <h1 className=''>This A Warehouse Management System For Mobile or Any Types of Items</h1>
                    </div>
                    <div className='col-md-7'>
                        <p>This is a warehouse website. Here an organization can do all their work including stock management, updates.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;