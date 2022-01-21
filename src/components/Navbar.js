import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    
    return (
        
        <nav className="navbar is-primary navbar-expand-lg navbar-dark sticky-top  text-light  myNav" >
            <div className="container-fluid d-flex justify-content-end">
                <button 
                    
                    className="navbar-toggler border-0" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarColor01" 
                    aria-controls="navbarColor01" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    
                > 
                    <FontAwesomeIcon icon={faBars} className="text-primary nv-icon"/> 
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarColor01">
                    <ul className="navbar-nav ml-auto text-center">
                        <li className="nav-item">
                            <a className="nav-link text-info"  href="/" exact="true"> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="/About"> About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger" href="/Projects"> Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning" href="/Contact"> Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
