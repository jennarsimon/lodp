import React, { Component } from 'react';
import logo from '../assets/images/lodp.png';
import banner from '../assets/images/banner.jpg';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../index.css';

export default class Navbar extends Component {

    render() {

        return (
            <div id="nav">
                { window.location.pathname === '/' && <img className='banner_img' alt='linderman rotunda' src={banner} /> }
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
