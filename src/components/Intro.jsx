import { useNavigate } from "react-router-dom";
import Skills from '../components/Icons';

export const Intro = () => {
    let navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/contact");
    }
    
    return (
        <div className='d-flex justify-content-center align-content-center' style={{maxWidth: '95%', height: '100%', margin: 'auto'}}>
            <div className='border-0 align-self-center p-auto vertical-align-middle'>
                <h1 className='sub-text text-center font-weight-bold' style={{fontSize:'86px'}}>
                    Pia Torain
                </h1>
                <div className='sub-text text-center font-weight-bold mb-3 p-1'>
                    <Skills />
                </div>
                <button onClick={() => handleContactClick()} className='text-center btn btn-lg btn-outline-success'> Contact Me </button> 
            </div>
        </div>
    );
}

