import React from 'react';
import '../index.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavBar extends React.Component {

    render() {

        return (
            <div id="nav">
                <div className='navbar'>
                <div>
                    <a href="/">
                        <img alt='LOPD' src={process.env.PUBLIC_URL + '/Logo.png'} />
                    </a>
                </div>
                <ul>
                    <li id="link"><a className="brown-text" href="/about-us">About Us</a></li>
                    <li id="link"><a className="brown-text" href="/contribute">Contribute a Dataset</a></li>
                    <li>
                    <NavDropdown id="link" className="brown-text" title="Related Links ▼">
                            <NavDropdown.Item id="dropdown" className="brown-text" href="https://opendatacampus.com/" target="_blank">Open Data Handbook</NavDropdown.Item>
                    </NavDropdown>
                    </li>
                </ul>
                </div>
                {/* <div className='line dark-brown'></div> */}
            </div>
        );
    }
}