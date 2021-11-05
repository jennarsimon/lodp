import React, { Component } from 'react';
import axios from 'axios';

const Dataset = props => (
    <tr>
        <td>{props.dataset.name}</td>
        <td>{props.dataset.description}</td>
        <td>{props.dataset.date}</td>
        <td>{props.dataset.source}</td>
        <td>{props.dataset.category}</td>
    </tr>
)

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
            return <Dataset dataset={currentdataset} key={currentdataset.name} />;
        })
    }

    render() {
        return (
            <div>
                <h1>Datasets</h1>
                <table className="table">
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
                        { this.datasetList() }
                    </tbody>
                </table>
            </div>
        )
    }

}