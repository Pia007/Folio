import React from 'react';
import htmlLogo from '../images/h5.svg';
import cssLogo from '../images/css3.svg';
import jsLogo from '../images/javascript.png';
import bootstrapLogo from '../images/bootstrap.svg';
import reactLogo from '../images/react.png';
import nodeLogo from '../images/node.png';
import reduxLogo from '../images/red.svg';

import mongoLogo from '../images/mongodb.svg';
import expressLogo from '../images/express2.png';

function Skills(props) {
    return (
        <div className='p-2 d-flex justify-content-center'>
            <div>
                <img src={htmlLogo} alt='html-5' className='img-fluid mx-1' style={{ width: '50px', height: '49px'}}/>
            </div>
            <div>
                <img src={cssLogo} alt='css-3' className='img-fluid mx-1' style={{ width: '50px', height: '50px'}}/>
            </div>
            <div>
                <img src={jsLogo} alt='javascipt' className='img-fluid mx-1' style={{ width: '50px', height: '50px'}}/>
            </div>
            <div>
                <img src={bootstrapLogo} alt='bootstrap' className='img-fluid mx-1' style={{ width: '50px', height: '50px'}}/>
            </div>
            <div>
                <img src={reactLogo} alt='react' className='img-fluid mx-1' style={{ width: '50px', height: '50px'}}/>
            </div>
            <div>
                <img src={reduxLogo} alt='redux' className='img-fluid mx-1' style={{ width: '50px', height: '50px'}}/>
            </div>
            <div>
                <img src={nodeLogo} alt='node' className='img-fluid mx-1' style={{ width: '50px', height: '50px'}}/>
            </div>
            <div>
                <img src={expressLogo} alt='express' className='img-fluid mx-1' style={{ width: '50px', height: '50px'}}/>
            </div>
            <div>
                <img src={mongoLogo} alt='mongodb' className='img-fluid mx-1' style={{ width: '50px', height: '50px'}}/>
            </div>
            
        </div>
    );
}

export default Skills;