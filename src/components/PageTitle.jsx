import { Row } from 'reactstrap';
import Zoom from 'react-reveal/Zoom';

function PageTitle({ regText, colorText }) {
    return (
        <Row>
            <Zoom delay={500}>
                <h1 className='text-center my-0 mt-1 py-2'><span className='title'>{regText}</span><span className='text-primary title'> {colorText}</span></h1>
            </Zoom>
        </Row>
    );
}

export default PageTitle;