import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import Contact from './Contact';
import About from './About';
import Work from './Work';
import Navbar from './Navbar';

import './reset.css';
import './App.css';
import './Navbar.css';
import './Contact.css';
import './About.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path="/" exact={true} component={About}/>
            <Route path="/About" exact={true} component={About}/>
            <Route path="/Work" exact={true} component={Work}/>
            <Route path="/Contact" exact={true} component={Contact}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;