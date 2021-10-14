import * as React from 'react';
import {    
    Container, 
    Row,
    Col,
    Accordion,
    Form,
    FloatingLabel
} from 'react-bootstrap';
import "../styles/Search.css";

export class Search extends React.Component {
    render() {
        return (
            <form>
                <input type="text" name="search" id="search-bar" placeholder="Search.."/>
            </form>
        );
    }
}

function SearchFilter(){
    return(
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Categories</Accordion.Header>
                <Accordion.Body>
                    <Form.Check type='checkbox' id={`Cat1`} label={`Category 1`} />
                    <Form.Check type='checkbox' id={`Cat2`} label={`Category 2`} />
                    <Form.Check type='checkbox' id={`Cat3`} label={`Category 3`} />
                    {/* <form>
                        <label>
                            <input type="checkbox"/> 
                        Category 1
                        </label>
                
                        <label>
                            <input type="checkbox"/> 
                        Category 2
                        </label>
                    </form> */}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>File Types</Accordion.Header>
                <Accordion.Body>
                    Body 2
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
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