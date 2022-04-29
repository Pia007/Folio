import { useState } from 'react';
import { Navbar, Nav, NavItem, Collapse, NavbarToggler} from 'reactstrap';
import { NavLink } from 'react-router-dom';


const NavHead = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        (nav ? setNav(!nav): setNav(nav));
    };
    
    return (
        <Navbar className="navbar navbar-expand-lg d-flex justify-content-center sticky-top text-light myNav" >
            <div className="container container-fluid d-flex justify-content-end">
                    <div className='d-flex'>
                        <NavLink tag='link' to='/home' className='nav-link text-light'
                                onClick={toggleNav}> PT
                                {/* <img src={newLogo}  alt='logo' className='text-lg nav-logo mt-1' /> */}
                        </NavLink>
                    </div>
                <NavbarToggler onClick={toggleNav} className="border-0 ml-auto" style={{ height:'38px'}}>
                    <i className="fa fa-bars text-primary nv-icon "/> 
                </NavbarToggler>
                
                <Collapse isOpen={nav} navbar className=" justify-content-center">
                    <Nav navbar className="ml-auto text-center text-light nbar">
                        <NavItem className="nav-item n-item">
                            <NavLink onClick={toggleNav} className="nav-link n-link"  to="/" > Home
                            {/* <span class="visually-hidden">(current)</span> */}
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-item n-item">
                            <NavLink onClick={toggleNav} className="nav-link n-link" to="/About" > About</NavLink>
                        </NavItem>
                        <NavItem className="nav-item n-item">
                            <NavLink onClick={toggleNav} className="nav-link n-link" to="/Projects" > Projects</NavLink>
                        </NavItem>
                        <NavItem className="nav-item n-item">
                            <NavLink onClick={toggleNav} className="nav-link n-link" to="/Contact" > Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
}

export default NavHead
