import React, { Component } from 'react';
import logo from '../assets/images/bw_logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../stylesheets/navbar.css';

export default class Navbar extends Component {

    render() {

        return (
            <div id="nav">
                <div className='navbar'>
                    <div>
                        <a href="/">
                            <img className="logo" alt='LOPD' src={logo} />
                        </a>
                    </div>
                    <ul>
                        <li id="link"><a className="brown-text" href="/aboutus">About Us</a></li>
                        <li id="link"><a className="brown-text" href="/contribute">Contribute a Dataset</a></li>
                        <li>
                        <NavDropdown id="link" className="brown-text" title="Related Links">
                                <NavDropdown.Item id="dropdown" className="brown-text" href="https://opendatacampus.com/" target="_blank">Open Data Handbook</NavDropdown.Item>
                        </NavDropdown>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}
