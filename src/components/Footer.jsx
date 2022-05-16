import Zoom from 'react-reveal/Zoom';


export const DesignColumn = () => {
    
    return ( 
        <div className='d-none d-md-block d-flex align-content-end position-fixed' style={{ width:'3%', height: 'auto', bottom: '10px', right: '0'}}>
            <div className='p-0 mb-0 d-flex justify-content-around align-content-end sticky-bottom'>
                <Zoom delay={2100}>
                    <p className='text-center footer-text' style={{writingMode: 'vertical-lr'}}>Designed and Built by Pia Torain</p>
                </Zoom>
            </div>
        </div>
    )
}

const Footer = () => {
    const today = new Date();
    return (
        <div className='w-100 d-md-none' style={{ position: 'fixed', bottom: '0', fontSize:'.875em'}}>
            <Zoom delay={2500}>
                <p className='text-center footer-text'>Copyright &copy; {today.getFullYear()} Designed and Built by Pia Torain</p>
            </Zoom>
        </div>
    )
}

export default Footer;

