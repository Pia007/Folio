import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import myLogo from '../images/ptlogo.svg'
import menu from '../images/menu.svg';


export const Header = () => {
    const [navigation, setNavigation] = useState(false);
    const toggleNav = () => setNavigation(!navigation);
    
    return (
        <React.Fragment>
            <Navbar className="navbar navbar-expand-lg d-flex justify-content-end sticky-top text-light mynav" style={{zIndex: '5'}}>
                <div className="container justify-content-between">
                        <div className='d-flex'>
                            <NavLink tag='link' to="/" 
                                onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))}>
                                    <img src={myLogo}  alt="logo" className="text-primary mt-1" />
                            </NavLink>
                        </div>
                    <NavbarToggler onClick={toggleNav} className="align-self-center justify-content-end">
                        <img src={menu}  alt='menu' className="text-success"/> 
                    </NavbarToggler>
                    <Collapse isOpen={navigation} navbar className="justify-content-end">
                        <Nav navbar className="ms-auto text-center text-light ">
                            <NavItem>
                                <NavLink tag='link' onClick={() => (navigation ? setNavigation(!navigation) : setNavigation(navigation))} className="nav-link" to="/"> 
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag='link' onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="nav-link" to="/about"> 
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag='link' onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="nav-link" to="/portfolio"> 
                                    Portfolio
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag='link' onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="nav-link"  to="contact"> 
                                    Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;