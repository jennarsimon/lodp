import React, { Component } from 'react';
import x from "../assets/images/x.png";

export default class DatasetModel extends Component {

    render() {
        return (
            <div className="modal-wrapper">
                <div className="modal-content">
                    <h1>{this.props.dataset.name}</h1>
                    <img alt="close" src={x} onClick={this.props.changeState}/>
                </div>
            </div>
        );
    }
}