import { useNavigate } from "react-router-dom";
import { SEO } from '../components/SEO';
import PageTitle from '../components/PageTitle';
import Info from '../components/Info';
// import { Button } from "reactstrap";

// Testing this just to do a commiit

const About = () => {
    let navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/contact");
    }
    const handlePortfolioClick = () => {
        navigate("/portfolio");
    }

    return (
        <div className='container'>
            <SEO title='About | Pia Torain' description='description' content='About Pia Torain, Fullstack Web Developer' />
            <PageTitle regText="ABOUT" colorText="ME"/>
            <div className="container">
                <div className="row">
                    <Info />
                    <h1 className=""><span>About</span>Me
                        <br className="" /> Lorem ipsum dolor sit amet.
                    </h1>
                    <p className="">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Soluta accusamus expedita similique maiores vitae molestias 
                        voluptatem? Totam quos fuga illum ipsum mollitia voluptas 
                        consequatur aspernatur!
                    </p>
                    <div className="">
                        <button className="btn btn-primary" onClick={()=> handleContactClick()}>
                            Contact
                        </button>
                        <button className="btn btn-primary" onClick={()=> handlePortfolioClick()}>
                            Portfolio
                        </button>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-6">
                        <h3>About Me</h3>
                    </div>
                </div> */}
                
                <button className="col-2 btn btn-primary">
                        Download CV
                </button>
            </div>
            
        </div>
    )
}

export default About
