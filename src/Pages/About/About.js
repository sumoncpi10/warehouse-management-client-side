import React from 'react';
// import Topbanar from '../Shared/TopBanar/Topbanar';

const About = () => {
    return (
        <div>
            {/* <Topbanar></Topbanar> */}
            <div className='m-3'>
                <img width={300} src="https://scontent.fcgp6-1.fna.fbcdn.net/v/t31.18172-8/20689687_1705627633079847_8101248375365087887_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=05gvW6N6l5EAX9gEYUh&_nc_ht=scontent.fcgp6-1.fna&oh=00_AT81bsh_E63d0cTtHs1ycmij8K9qsnpjUYHcCPxnJ9izXA&oe=628201E3" alt="" />
                <h2 className='p-2'>Md. Dawdujjaman Sumon</h2>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-5'>
                        <h1 className=''>With my camera, I capture daily life</h1>
                    </div>
                    <div className='col-md-7'>
                        <p>CAPTURING THE BEAUTY OF EVERYDAY life — of the “mundane” — is, to me, travel photography. Your life is full of stories that are travel to someone else, no matter where you live. You don’t need a fancy camera or plane ticket to photograph your surroundings with purpose and emotion. You can open understanding and break down cross-cultural boundaries by providing a photographic window from your own backyard.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;