import React, { Component } from 'react';
import { Card, Badge } from 'react-bootstrap';
import DatasetModal from "./DatasetModal.jsx";

export default class Dataset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.switchModalState = this.switchModalState.bind(this);
    }

    switchModalState() {
        this.state.showModal ? this.setState({ showModal: false }) : this.setState({ showModal: true });
    }

    render() {
        return (
            <>
                { this.state.showModal && <DatasetModal dataset={this.props.dataset} changeState={this.switchModalState}/> }
                <Card style={{border:0}}>
                    <Card.Body>
                        <Card.Title className="brown-text dataset-title" onClick={this.switchModalState}>{this.props.dataset.name}</Card.Title>
                        <Card.Text>{this.props.dataset.description}</Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">
                            Category: <Badge bg="dark">{this.props.dataset.category}</Badge> |
                            Updated: <Badge bg="dark">{this.props.dataset.date.substring(0, 10)}</Badge>
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </>
        );
    }

}