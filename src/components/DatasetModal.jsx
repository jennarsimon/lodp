import React, { Component } from 'react';
import x from "../assets/images/x.png";
import moment from "moment";
import "../stylesheets/modal.css";

export default class DatasetModel extends Component {

    constructor(props) {
        super(props);
        this.downloadDataset = this.downloadDataset.bind(this);
    }

    downloadDataset() {
        console.log(this.props.dataset.data[0]);
    }

    render() {
        return (
            <div className="modal-wrapper">
                <div className="modal-content">
                    <h1 id="title" className="brown-text pale-brown">{this.props.dataset.name}</h1>
                    <img id="close" className="pale-brown" alt="close" src={x} onClick={this.props.changeState}/>
                    <p id="description-header" className="brown-text">Description:</p>
                    <p id="description">{this.props.dataset.description}</p>
                    <p id="category-header" className="brown-text">Category:</p>
                    <p id="category">{this.props.dataset.category}</p>
                    <p id="date-header" className="brown-text">Last Updated:</p>
                    <p id="date">{moment(this.props.dataset.date).format("YYYY-MM-DD")}</p>
                    <p id="fields-header" className="brown-text">Fields:</p>
                    <p id="fields">{Object.keys(this.props.dataset.data[0][1]).join(", ")}</p>
                    <h2 id="download"><span onClick={this.downloadDataset} className="dark-brown white-text">Download Dataset</span></h2>
                </div>
            </div>
        );
    }
}