import React from 'react';
import { Row } from "reactstrap";

function PageTitle({ regText, colorText }) {
    return (
        <Row className="" >
            <h1 className=" text-center py-4"><span className='title'>{regText}</span><span className="text-primary"> {colorText}</span></h1>
        </Row>
    );
}

export default PageTitle;