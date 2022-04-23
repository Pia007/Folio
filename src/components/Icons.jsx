import React from 'react';
import htmlImg from '../images/html.png';
import cssImg from '../images/css.png';
import reactImg from '../images/react.png';
import nodeImg from '../images/node.png';
import reduxImg from '../images/redux.svg';
import jsImg from '../images/jScript.png';

function Skills(props) {
    return (
        <div className='p-2 d-flex justify-content-center'>
            <img src={htmlImg} alt='html-5' className='img-fluid mx-1' style={{ width: '50px', height: '49px'}}/>
            <img src={cssImg} alt='css-3' className='img-fluid mx-1' style={{ width: '50px', height: '50px'}}/>
            <img src={reactImg} alt='react' className='img-fluid mx-1' style={{ width: '50px', height: '50px'}}/>
            <img src={nodeImg} alt='node' className='img-fluid mx-1' style={{ width: '50px', height: '50px'}}/>
            <img src={reduxImg} alt='redux' className='img-fluid mx-1' style={{ width: '50px', height: '50px'}}/>
            <img src={jsImg} alt='javascipt' className='img-fluid mx-1' style={{ width: '50px', height: '50px'}}/>
        </div>
    );
}

export default Skills;