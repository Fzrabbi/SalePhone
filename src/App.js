import React from 'react';
import './App.css';
import Home from './container/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './container/Contact';
import Post from './container/Post';
import Products from './container/Products';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Hero/>
        <Route path="/" exact component={Home}/>
        <Route path="/contact-us" component={Contact}/>
        <Route path="/post/:postId" component={Post}/>
        <Route path="/products" component={Products}/>
    </div>
    </Router>
  );
}

export default App;
