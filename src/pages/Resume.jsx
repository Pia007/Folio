import { SEO } from '../components/SEO';
import PageTitle from '../components/PageTitle';
import resume from '../shared/resumeDL.pdf';
import PDFPage from '../components/PDFPage';

const Resume = () => {
    return(
        <div className='container container-fluid my-2'>
            <SEO title='Resume | Pia Torain' description='description' content='Resume of Pia Torain, Fullstack Web Developer'/>
            <PageTitle regText='RESUME'/>
            <div className='mx-1'>
                <div className='p-2 text-center'>
                    <a href='resume.pdf' download='resume.pdf' alt='download resume' className='btn btn-outline-primary text-decoration-none resBtn'>
                        Download
                    </a>
                </div>
            </div>
            <PDFPage renderMode='none' pdf={resume}/>
        </div>
    )
}

export default Resume;