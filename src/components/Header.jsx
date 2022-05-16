import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import myLogo from '../images/ptlogo.svg'
import menu from '../images/menu.svg';
import { Fade, Zoom } from 'react-reveal';


export const Header = () => {
    const [navigation, setNavigation] = useState(false);
    const openNav = () => setNavigation(!navigation);
    const togNav = () => {
        (navigation ? setNavigation(!navigation) : setNavigation(navigation))
    }

    const MenuItem = ({ to, firstLetter, linkEnd }) => {
        return (
            <NavItem>
                <NavLink tag='link' onClick={togNav} className='nav-link' to={to}> 
                    <span className='text-primary'>{firstLetter}</span>
                    <span>{linkEnd}</span>
                </NavLink>
            </NavItem>
        )
    }

    return (
        <React.Fragment>
            <Navbar className='navbar navbar-expand-lg p-1 d-flex justify-content-between sticky-top text-light myNav' style={{zIndex: '5'}}>
                {/* LOGO */}
                <div className='d-flex'>
                    <Zoom>
                        <NavLink tag='link' to='/' 
                            onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))}>
                                <img src={myLogo}  alt='logo' className='text-primary mt-1' />
                        </NavLink>
                    </Zoom>
                </div>
                {/* MENU  */}
                <Zoom>
                    <NavbarToggler onClick={openNav} className='align-self-center justify-content-end px-0'>
                        <img src={menu}  alt='menu' className='text-success'/> 
                    </NavbarToggler>
                </Zoom>
                {/* NAVIGATION */}
                <Collapse isOpen={navigation} navbar className='justify-content-end'>
                    <Nav navbar className='ml-auto text-center text-light '>
                        <Fade  >
                            <MenuItem 
                                to='/'
                                firstLetter='H'
                                linkEnd='ome'
                            />
                        </Fade>
                        <Fade delay={300}>
                            <MenuItem 
                                to='/about'
                                firstLetter='A' 
                                linkEnd='bout'
                            />
                        </Fade>
                        <Fade  delay={600}>
                            <MenuItem 
                                to='/projects'
                                firstLetter='P'
                                linkEnd='rojects'
                            />
                        </Fade>
                        <Fade  delay={900}>
                            <MenuItem 
                                to='/contact'
                                firstLetter='C'
                                linkEnd='ontact'
                            />
                        </Fade>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;