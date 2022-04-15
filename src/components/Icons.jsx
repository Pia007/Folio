import React from 'react';

function Skills(props) {
    return (
        <div className='p-2 d-flex justify-content-center'>
            <i className="fa fa-react text-success" style={{width: '50px', height: '50px', fill: 'green'}}/>
            <i className="fa fa-node-js" style={{width: '50px', height: '50px', fill: 'green'}}/>
            <i className="fa-brands fa-react"></i>
            <i className="fa fa-bootstrap px-2" style={{width: '50px', height: '50px', fill: 'green'}}/>
            <i className="fa fa-css-alt" style={{width: '50px', height: '50px', fontColor: 'green'}}/>
            <i className="fas fas-css3-alt" style={{width: '50px', height: '50px', fill: 'green'}}/>
        </div>
    );
}

export default Skills;