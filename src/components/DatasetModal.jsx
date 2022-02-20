import React, { Component } from 'react';
import x from "../assets/images/x.png";
import moment from "moment";
import "../stylesheets/modal.css";
import * as XLSX from 'xlsx';

export default class DatasetModel extends Component {

    constructor(props) {
        super(props);
        this.downloadDataset = this.downloadDataset.bind(this);
    }

    downloadDataset() {
		const filename = this.props.dataset.name + ".xlsx";
		
		var newArrayDataOfOjbect = Object.values(this.props.dataset.data[0]);
		const ws = XLSX.utils.json_to_sheet(newArrayDataOfOjbect);
		console.log(newArrayDataOfOjbect);
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "tester");
		console.log(this.props.dataset.data);
		XLSX.writeFile(wb, filename);

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
                    <p id="source-header" className="brown-text">Source:</p>
                    { this.props.dataset.sourceLink ?  
                        <p id="source"><a className="brown-text" href={this.props.dataset.sourceLink} target="_blank" rel="noreferrer">{this.props.dataset.source}</a></p>
                        :
                        <p id="source">{this.props.dataset.source}</p>
                    }
                    <h2 id="download">
						<button className="dark-brown white-text download-button" onClick={() => this.downloadDataset()}>Download Data</button>
					</h2>
                </div>
            </div>
        );
    }
}