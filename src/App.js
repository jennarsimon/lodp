import React, { Component } from 'react';
import './index.css';

import { NavBar } from './components/NavBar.jsx';
import { HomePage } from './components/HomePage.jsx';
import { DatasetInfo } from './components/DatasetInfo.jsx';
import { AddDataset } from './components/AddDataset.jsx';
import { AboutUs } from './components/AboutUs.jsx';
import { Footer } from './components/Footer.jsx';
import { NotFound } from './components/NotFound.jsx';

class App extends Component {

  render() {

    const url = window.location.href;
    const urlDirect = url.substring(url.lastIndexOf("/"));
    var currentPage = '';

    switch (urlDirect) {
      case '/':
        currentPage = <HomePage />;
        break;
      case '/aboutus':
        currentPage = <AboutUs />;
        break;
      case '/datasetInfo':
        currentPage = <DatasetInfo />;
        break;
      case '/contribute':
        currentPage = <AddDataset />;
        break;
      default:
        currentPage = <NotFound />;
    }

    return (
      <div className="wrapper">
        {urlDirect === '/' && 
        <img className='banner_img' alt='LODP Banner' src={process.env.PUBLIC_URL + '/banner.jpg'} />}
        <div className="container">
          <NavBar />
          <div className="content">
            {currentPage}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;