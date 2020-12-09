import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/homepage';
import Gallery from  './components/gallery';
import Admin from './components/admin';
import ShareRotaryStory from './components/shareRotaryStory';
import Image from './image'


function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/admin" component={Admin} />
          <Route path="/story" component={ShareRotaryStory} />
          <Route path="/image" component={Image} />
        </switch>
      </Router>
      
    </div>
  );
}

export default App;
