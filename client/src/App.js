import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/homepage';
import Gallery from  './components/gallery';
import Image from './image'


function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/image" component={Image} />
        </switch>
      </Router>
      
    </div>
  );
}

export default App;
