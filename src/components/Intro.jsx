import { useNavigate } from "react-router-dom";
import Skills from '../components/Icons';

export const Intro = () => {
    let navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/contact");
    }
    
    return (
        <div className='d-flex justify-content-center align-content-center' style={{maxWidth: '95%', height: '80vh', margin: 'auto'}}>
            <div className='border-0 align-self-center'>
                <h1 className='sub-text text-center font-weight-bold'>
                    Hi! I'm Pia Torain.
                </h1>
                <h2 className='sub-text text-center font-weight-bold mb-3 p-1'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas, quasi, molestias inventore omnis labore dignissimos quod illum culpa, nemo enim in provident sint ratione laboriosam cumque nesciunt. Atque dicta, sit mollitia consequuntur ut molestias nulla nostrum tenetur magni corporis et ad repudiandae dolor eos quas? Officiis magnam dolore neque?
                </h2>
                <button onClick={() => handleContactClick()} className='text-center btn btn-lg btn-outline-success'> Contact Me </button> 
                <Skills />
            </div>
        </div>
    );
}

