import "./index.css"

import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/HomePage.jsx";
import AboutUs from "./components/AboutUs.jsx";
import AddDataset from "./components/AddDataset.jsx";

const App = () => {
  const url = window.location.href;
  const urlDirect = url.substring(url.lastIndexOf("/"));
  return (
    <div>
      {urlDirect === '/' && 
        <img className='banner_img' alt='LODP Banner' src={process.env.PUBLIC_URL + '/banner.jpg'} />}
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/contribute" component={AddDataset} />
      <Footer />
    </div>
  );
};

export default App;