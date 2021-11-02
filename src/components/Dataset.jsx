import * as React from 'react';
import {    
    Card,
    Badge,
    ListGroup
} from 'react-bootstrap';
import data from '../testData/datasets.json';

function DatasetCard(){
    return(
        data.map((dataset, idx) => (
        <Card style={{border:0}}>  
            <Card.Body>
                <Card.Title>{dataset.title}</Card.Title>
                <Card.Text>{dataset.desc}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                    Category: <Badge bg="dark">{dataset.category}</Badge>{' '} |
                    Filetype: <Badge bg="secondary">{dataset.filetype}</Badge>
                </Card.Subtitle>
            </Card.Body>
        </Card>
        ))
    );
}

// const DatasetCard = data.map ((dataset) =>{
//         return(
//             <Card style={{border:0}}>
//                 <Card.Body>
//                     <Card.Title>{dataset.name}</Card.Title>
//                     <Card.Text>{dataset.description}</Card.Text>
//                     <Card.Subtitle className="mb-2 text-muted">
//                         Category: <Badge bg="dark">{dataset.category}</Badge>{' '} |
//                         Filetype: <Badge bg="secondary">{dataset.filetype}</Badge>
//                     </Card.Subtitle>
//                 </Card.Body>
//             </Card>
//         );
//     }
// )

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