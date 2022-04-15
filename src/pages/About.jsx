import { useNavigate } from "react-router-dom";
import { SEO } from "../components/SEO";
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
        <section id="aboutMe">
            <SEO title='About | Pia Torain' description='description' content='About Pia Torain, Fullstack Web Developer' />
            <div className="container">
                <div className="row">
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
                <div className="row">
                    <div className="col-md-6">
                        <h3>About Me</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ul className="">
                            <li className="list-item">
                                <span className="">Name: </span>
                                <span className="">Pia Torain</span>   
                            </li>
                            <li className="list-item">
                                <span className="">Language: </span>  
                                <span className="">English</span> 
                            </li>
                            <li className="list-item">
                                <span className="">Availability: </span>  
                                <span className="">For Hire</span> 
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="">
                            <li className="list-item">
                                <span className="">Location: </span>
                                <span className="">Las Vegas, NV</span>   
                            </li>
                            <li className="list-item">
                                <span className="">Phone: </span>  
                                <span className="">(908) 400-5335</span> 
                            </li>
                            <li className="list-item">
                                <span className="">Email: </span>  
                                <span className="">PiaTorain@yahoo.com</span> 
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <button className="col-2 btn btn-primary">
                        Download CV
                </button>
            </div>
            
        </section>
    )
}

export default About
