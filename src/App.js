import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import banner from './assets/images/banner.jpg';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import SearchPage from './components/SearchPage.jsx';
import AboutUs from './components/AboutUs.jsx';
import AddDataset from './components/AddDataset.jsx';

function App() {
  return (
    <Router>
      <div className="container">
        { window.location.pathname === '/' && <img className='banner_img' alt='linderman rotunda' src={banner} /> }
        <Navbar />
        <Route path="/" exact component={SearchPage} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/contribute" exact component={AddDataset} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
