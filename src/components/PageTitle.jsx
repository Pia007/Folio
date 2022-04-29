import React from 'react';
import { Row } from "reactstrap";

function PageTitle({ regText, colorText }) {
    return (
        <Row className="" >
            <h1 className="title text-center py-4">{regText}<span className="text-primary"> {colorText}</span></h1>
        </Row>
    );
}

export default PageTitle;