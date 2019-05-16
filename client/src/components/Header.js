import React, { Component } from 'react';
//import {NavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar  color="light" light expand="md">
         <NavbarBrand href="/">Home</NavbarBrand>
         <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="mr-auto" navbar>
             <NavItem className="ml-2" >
               <NavLink href="/explore">Explore</NavLink>
             </NavItem>
             <NavItem className="ml-2">
               <NavLink href="/community">Community</NavLink>
             </NavItem>
             <NavItem className="ml-2">
               <NavLink href="/submit">Submit</NavLink>
             </NavItem>

             </Nav>
              <Nav className="ml-auto" navbar>
             <NavItem className="ml-2">
               <NavLink href="/login">Login</NavLink>
             </NavItem>
             </Nav>
            </Collapse>

          </Navbar>
    );
  }

}

export default Header;
