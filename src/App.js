import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import DatasetList from './components/DatasetList.jsx';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={DatasetList} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
