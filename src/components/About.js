import { Link } from "react-router-dom";
import { Button } from "reactstrap";

// Testing this just to do a commiit

const About = () => {
    return (
        <section id="aboutMe">
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
                        <Button className="btn btn-primary">
                            <Link to="/Contact">Contact</Link>
                        </Button>
                        <Button className="btn btn-primary">
                            <Link to="/Projects">Portfolio</Link>
                        </Button>
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
                <Button className="col-2 btn btn-primary">
                        Download CV
                </Button>
            </div>
            
        </section>
    )
}

export default About
