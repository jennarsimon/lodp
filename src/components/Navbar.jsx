import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navgar-expand-lg">
                <Link to="/" className="navbar-brand">Dataset List</Link>
            </nav>
        );
    }

}