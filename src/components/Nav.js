import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top  text-light  myNav">
            <div className="container-fluid mx-0 w-100">
                <a className="navbar-brand" href="/">Pia Torain</a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="">
                        <FontAwesomeIcon icon={faBars} className="text-primary nv-icon"/> 
                    </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarColor01">
                    <ul className="navbar-nav mr-auto text-center ">
                        <li className="nav-item">
                            <Link className="nav-link text-info" to="/"> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/About"> About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to="/Projects"> Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/Contact"> Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
