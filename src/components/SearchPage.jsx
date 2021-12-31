import * as React from 'react';
import {    
    Container, 
    Row,
    Col,
    Accordion,
    Form,
    Button
} from 'react-bootstrap';
import DatasetList from './DatasetList.jsx';
import x from '../assets/images/x.png';
import "../index.css";

export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            filter: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const searchTerm = form.get("search");
        this.setState({ search: searchTerm });
    }

    handleFilter(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const categories = ["academics", "admissions", "athletics", "covid-19", "finances", "postGrad"];
        var newFilter = [];
        for(const c of categories) {
            if (form.get(c)) {
                newFilter.push(c);
            }
        }
        this.setState({ filter: newFilter });
        console.log(this.state.filter);
    }

    clearSearch(event) {
        event.preventDefault();
        document.getElementById('search-bar').value = '';
        this.setState({ search: '' });
    }

    clearFilter(event) {
        event.preventDefault();
        const id = event.target.parentNode.id;
        const newFilter = this.state.filter.flatMap(filter => {
            return filter === id ? [] : filter;
        })
        // const form = new FormData(document.getElementById("checkForm"));
        if (document.getElementById(id).checked) {
            document.getElementById(id).checked = false;
        }
        this.setState({ filter: newFilter });
    }

    render() {

        return (
            <Container fluid>
                <Row>
                    <Col>
                        <form className="searchBar" onSubmit={this.handleSubmit}>
                            <input type="text" id="search-bar" name="search" placeholder="Search by dataset name or description..."/>
                            <input type="submit" value="Search" className="dark-brown" id="submit" />
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Categories</Accordion.Header>
                                <Accordion.Body>
                                    <Form id="checkForm" onSubmit={this.handleFilter}>
                                        <Form.Check type='checkbox' name="academics" id={`academics`} label={`Academics`}/> 
                                        <Form.Check type='checkbox' name="admissions" id={`admissions`} label={`Admissions`}/>
                                        <Form.Check type='checkbox' name="athletics" id={`athletics`} label={`Athletics`}/>
                                        <Form.Check type='checkbox' name="covid-19" id={`covid-19`} label={`COVID-19`}/>
                                        <Form.Check type='checkbox' name="finances" id={`finances`} label={`Finances`}/>
                                        <Form.Check type='checkbox' name="postGrad" id={`postGrad`} label={`Post Grad`}/>
                                        <Button variant="primary" type="submit" className="dark-brown filter-submit">
                                            Filter
                                        </Button>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col xs={9}>
                        { this.state.search !== '' &&
                            <div id="searchResults">
                                <h4 id="searchDescription" className="brown-text">Showing results for search: {this.state.search}</h4>
                                <div id="clear" className="pale-brown brown-text" onClick={this.clearSearch}>
                                    <h4>Clear Search</h4>
                                </div>
                            </div>
                        }
                        { this.state.filter.length !== 0 &&
                            <div id="appliedFilters">
                                <h4 className="brown-text">Applied Filters: </h4>
                                <div id="filters">
                                    <ul>
                                        { this.state.filter.map(f => 
                                            <li className="brown-text">
                                                <div className="filterName pale-brown" id={f}>
                                                    <span>{f}</span>
                                                    <img id="delete" alt="delete" src={x} onClick={this.clearFilter} />
                                                </div>
                                            </li>) 
                                        }
                                    </ul>
                                </div>
                            </div>
                        }
                        <DatasetList search={this.state.search} filter={this.state.filter}/>
                    </Col>
                </Row>
            </Container>
        );
    }
};