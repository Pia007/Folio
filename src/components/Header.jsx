import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import myLogo from '../images/ptlogo.svg'
import menu from '../images/menu.svg';


export const Header = () => {
    const [navigation, setNavigation] = useState(false);
    const openNav = () => setNavigation(!navigation);
    const togNav = () => {
        (navigation ? setNavigation(!navigation) : setNavigation(navigation))
    }

    return (
        <React.Fragment>
            <Navbar className="navbar navbar-expand-lg p-1 d-flex justify-content-between sticky-top text-light myNav" style={{zIndex: '5'}}>
                {/* <div className="container justify-content-between w-100"> */}
                        <div className='d-flex'>
                            <NavLink tag='link' to="/" 
                                onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))}>
                                    <img src={myLogo}  alt="logo" className="text-primary mt-1" />
                            </NavLink>
                        </div>
                    <NavbarToggler onClick={openNav} className="align-self-center justify-content-end px-0">
                        <img src={menu}  alt='menu' className="text-success"/> 
                    </NavbarToggler>
                    <Collapse isOpen={navigation} navbar className="justify-content-end">
                        <Nav navbar className="ms-auto text-center text-light ">
                            <NavItem>
                                <NavLink tag='link' onClick={togNav} className="nav-link" to="/"> 
                                    <span className='text-primary'>H</span>
                                    ome
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag='link' onClick={togNav} className="nav-link" to="/about"> 
                                    <span className='text-primary'>A</span>
                                    bout
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag='link' onClick={togNav} className="nav-link" to="/projects"> 
                                    <span className='text-primary'>P</span>
                                    rojects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag='link' onClick={togNav} className="nav-link"  to="/contact"> 
                                    <span className='text-primary'>C</span>
                                    ontact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                {/* </div> */}
            </Navbar>
        </React.Fragment>
    );
}

export default Header;