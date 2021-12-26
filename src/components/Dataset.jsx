import React, { Component } from 'react';
import { Card, Badge } from 'react-bootstrap';
import "../index.css";

export default class Dataset extends Component {

    render() {
        return (
            <Card style={{border:0}}>
                <Card.Body>
                    <Card.Title className="brown-text">{this.props.dataset.name}</Card.Title>
                    <Card.Text>{this.props.dataset.description}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">
                        Category: <Badge bg="dark">{this.props.dataset.category}</Badge> |
                        Updated: <Badge bg="dark">{this.props.dataset.date.substring(0, 10)}</Badge>
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        );
    }

}