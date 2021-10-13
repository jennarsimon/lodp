import * as React from 'react';
import {    
    Container, 
    Row,
    Col,
    Form,
    FloatingLabel
} from 'react-bootstrap';
import "../styles/Search.css";

export class Search extends React.Component {
    render() {
        return (
            <form action="/" method="get">
                <input 
                    id="search-bar" 
                    name="search-input" 
                    type="text" 
                    placeholder="Search by dataset name or category..."
                />
            </form>
        );
    }
}

function SearchFilter(){
    return(
        <FloatingLabel controlId="floatingSelect" label="Filter">
            <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </FloatingLabel> 
    );
}

const SearchPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Search/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SearchFilter/>
                </Col>
                <Col xs={9}>Data</Col>
            </Row>
        </Container>
    );
};

export default SearchPage;