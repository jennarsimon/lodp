import React, { Component } from 'react';
import './index.css';
/**
 * Each search result component should have a :
 * Category 
 * Title
 * File type 
 * Description
 * Dataset creation date
 * Data source
 */

import ReactDOM from 'react-dom';

//import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

//export const result = props =>{ //Exporting the search result component

//}

class searchResult extends React.Component{
    render(){
        return (
            <div className="wrapper">
                <h1>Title: {this.props.title}</h1>
                <h3>File Type: {this.props.fileType}</h3>
                <p>Description: {this.props.description}</p>
                <p>Created on: {this.props.date}</p>
                <h4>Data Source: {this.props.dataSource}</h4>

            </div>
       

        );
        
    }
}

