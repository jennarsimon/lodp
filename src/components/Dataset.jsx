import * as React from 'react';
import {    
    Card,
    Badge
} from 'react-bootstrap';

function DatasetList(){
    return(
        <Card>
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

export default DatasetList;