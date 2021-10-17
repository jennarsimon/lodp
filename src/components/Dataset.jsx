import * as React from 'react';
import {    
    Card,
    Badge,
    ListGroup
} from 'react-bootstrap';

function DatasetCard(){
    return(
        <Card style={{border:0}}>
            <Card.Body>
                <Card.Title>Dataset Card</Card.Title>
                <Card.Text>This is some text within a card body.</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                    Category: <Badge bg="dark">Category</Badge>{' '} |
                    Filetype: <Badge bg="secondary">Filetype</Badge>
                </Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

//Temporary Formatter
function DatasetList(){
    return(
        <ListGroup variant="flush">
            {Array.from({ length: 10 }).map((_, idx) => (
                <ListGroup.Item><DatasetCard/></ListGroup.Item>
            ))}
        </ListGroup>
    ); 
}

export default DatasetList;