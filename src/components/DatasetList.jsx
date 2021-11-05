import React, { Component } from 'react';
import axios from 'axios';
import Dataset from './Dataset.jsx';

export default class DatasetList extends Component {

    constructor(props) {
        super(props);

        this.state = {datasets: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/datasets/')
            .then(response => {
                this.setState({ datasets: response.data })
            })
            .catch((error) => console.log(error));
    }

    datasetList() {
        return this.state.datasets.map(currentdataset => {
            return <Dataset dataset={currentdataset} />;
        })
    }

    render() {
        return (
            <div>
                { this.datasetList() }
                {/* <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Dataset Name</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Source</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table> */}
            </div>
        )
    }

}