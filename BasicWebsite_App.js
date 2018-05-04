import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/home";
import About from "./components/about";
import Navbar from './components/customNav';

//TODO: Add blog section
//TODO: Design website
class App extends Component {

  render() {
    return (
      <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
