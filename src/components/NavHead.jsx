import { Component } from 'react';
import { Navbar, Nav, NavItem, Collapse, NavbarToggler} from 'reactstrap';
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
            <Navbar className="navbar navbar-expand-lg d-flex justify-content-center sticky-top text-light myNav" >
                <div className="container container-fluid d-flex justify-content-end">
                    <NavbarToggler onClick={this.toggleNav} className="border-0 btnToggler">
                        <i className="fa fa-bars text-primary nv-icon "/> 
                    </NavbarToggler>
                    
                    <Collapse isOpen={this.state.isNavOpen} navbar className=" justify-content-center"  >
                        <Nav navbar className="ml-auto text-center text-light nbar">
                            <NavItem className="nav-item n-item">
                                <NavLink onClick={this.closeNav} className="nav-link n-link"  to="/" > Home
                                {/* <span class="visually-hidden">(current)</span> */}
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav-item n-item">
                                <NavLink onClick={this.closeNav} className="nav-link n-link" to="/About" > About</NavLink>
                            </NavItem>
                            <NavItem className="nav-item n-item">
                                <NavLink onClick={this.closeNav} className="nav-link n-link" to="/Projects" > Projects</NavLink>
                            </NavItem>
                            <NavItem className="nav-item n-item">
                                <NavLink onClick={this.closeNav} className="nav-link n-link" to="/Contact" > Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default NavHead
