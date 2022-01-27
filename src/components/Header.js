import { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Navbar className="navbar is-primary navbar-expand-lg navbar-dark sticky-top  text-light  myNav" >
                <div className="container-fluid ">
                    <button 
                        
                        className="navbar-toggler border-0" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarColor01" 
                        aria-controls="navbarColor01" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        onClick={this.toggleNav}
                        
                    > 
                        <i className="fa fa-bars text-primary nv-icon"/> 
                    </button>
                    <Collapse className="collapse navbar-collapse justify-content-center" id="navbarColor01" isOpen={this.state.isNavOpen}>
                        <Nav className="navbar-nav ml-auto text-center">
                            <NavItem className="nav-item">
                                <NavLink className="nav-link text-info"  to="/" > Home</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="nav-link text-primary" to="/About"> About</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="nav-link text-danger" to="/Projects"> Projects</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="nav-link text-warning" to="/Contact"> Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;