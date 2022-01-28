import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const NavHead= () => {
    
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
                    <i className="fa fa-bars  text-primary nv-icon"/> 
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarColor01">
                    <Nav className="navbar-nav ml-auto text-center">
                        <NavItem nav-item >
                            <NavLink className="nav-link text-info active"  to="/"> Home</NavLink>
                        </NavItem>
                        <NavItem nav-item>
                            <NavLink className="nav-link text-primary" to="/About"> About</NavLink>
                        </NavItem>
                        <NavItem nav-item>
                            <NavLink className="nav-link text-danger" to="/Projects"> Projects</NavLink>
                        </NavItem>
                        <NavItem nav-item>
                            <NavLink className="nav-link text-warning" to="/Contact"> Contact</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        </nav>
    )
}

export default NavHead
