import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../index.css';
import logo from '../assets/images/Logo.png';

export class NavBar extends React.Component {

    render() {

        return (
            <div id="nav">
                <Navbar className='navbar'>
                <Navbar.Brand href="/">
                    <img alt='LOPD' src={logo} />
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                    <Nav.Link id="link" className="brown-text" href="/aboutus">About Us</Nav.Link>
                    <Nav.Link id="link" className="brown-text" href="/contribute">Contribute a Dataset</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                {/* <div className='line dark-brown'></div> */}
            </div>
        );
    }
}