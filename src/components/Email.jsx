import React from 'react';
import { Col } from 'reactstrap';

const SideEmail = () => {
    return ( 
        <div className='d-none d-md-block w-15% d-flex align-content-end position-fixed' style={{ width:'10%', bottom: '0', right: '0', transform: 'rotate(90deg) '}}>
            <Col className="p-0 mb-0 d-flex justify-content-end align-content-end sticky-bottom">
                <Col className="d-flex d-inline-flex flex-column justify-content-end list-unstyled py-5 pt-3 px-5 shadow-none social-ul">
                    <p>piatorain@gmail.com</p>
                </Col>
            </Col>
        </div>
    )
}

export default SideEmail