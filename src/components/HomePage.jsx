import React from 'react';
import SearchPage from './Search.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; //This changes Nav.jsx formatting for some reason

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <SearchPage/>
            </div>
        );
    }
}