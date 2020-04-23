import React from "react";
import "./App.css";
import Home from './pages/Home'
import Blog from './pages/Blog'
import SingleBlog from './pages/SingleBlog'
import Error from './pages/Error'
import About from './pages/About'

import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Blogs' component={Blog}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Blogs/:specific' component={SingleBlog}/>
        <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
