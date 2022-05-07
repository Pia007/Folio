import resume from '../shared/resumeDL.pdf';
import SinglePage from './SinglePage';
import download from '../images/download.svg';

const Resume = () => {
    return(
        <div className='container container-fluid my-2 ' >
            <div className='mx-1'>
                <div className='p-2 text-center'>
                    <button className="btn btn-outline-primary p-1 resBtn">
                        <a href='resume.pdf' download='resume.pdf' alt='download resume' className='text-decoration-none'>
                            <span>DownLoad </span> <img src={download} alt='download-resume'/>
                        </a>
                    </button>
                </div>
            </div>
            <SinglePage renderMode='none' pdf={resume}/>
        </div>
    )
}

export default Resume;