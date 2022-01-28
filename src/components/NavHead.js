import { Component } from 'react';
import { Navbar, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class NavHead extends Component {
    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.closeNav = this.closeNav.bind(this);

        this.state = {
            isNavOpen: false
        }
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    closeNav() {
        if (this.state.isNavOpen) {
            this.setState({
                isNavOpen: false
            });
        }
    }
    
    render () {
        return (
            <Navbar dark className="navbar navbar-expand-lg d-flex justify-content-center sticky-top text-light myNav" >
                <div className="container container-fluid d-flex justify-content-end">
                    <NavbarToggler onClick={this.toggleNav} className="border-0 btnToggler" >
                        <i className="fa fa-bars text-primary nv-icon "/> 
                    </NavbarToggler>
                    
                    <Collapse isOpen={this.state.isNavOpen} navbar className=" justify-content-center"  >
                        <Nav navbar className="ml-auto text-center">
                            <NavItem className="nav-item">
                                <NavLink onClick={this.closeNav} className="nav-link active text-info"  to="/" > Home</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink onClick={this.closeNav} className="nav-link text-primary" to="/About" > About</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink onClick={this.closeNav} className="nav-link text-danger" to="/Projects" > Projects</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink onClick={this.closeNav} className="nav-link text-warning" to="/Contact" > Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default NavHead
