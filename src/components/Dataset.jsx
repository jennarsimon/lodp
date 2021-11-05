import React, { Component } from 'react';
import { Card, Badge } from 'react-bootstrap';

export default class Dataset extends Component {

    render() {
        return (
            <Card style={{border:0}}>
                <Card.Body>
                    <Card.Title>{this.props.dataset.name}</Card.Title>
                    <Card.Text>{this.props.dataset.description}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">
                        Category: <Badge bg="dark">{this.props.dataset.category}</Badge> |
                        Date: <Badge bg="secondary">{this.props.dataset.date}</Badge>
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        );
    }

}