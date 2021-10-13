import React from 'react';
import SearchPage from './Search.jsx';

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