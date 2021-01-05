import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MapPage from './pages/MapPage.js';
import ResortPage from './pages/ResortPage.js';
import HomePage from './pages/HomePage.js';
export default function App(){

  return ( 
    <div className ='app'>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/resorts/:resortName" component={ResortPage} />
      </Router>
    </div>
  );
}