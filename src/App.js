import React, {useState} from 'react';
import './styles/style.css';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import Contacts from './pages/Contacts'
import Genres from './pages/Genres'
import Marks from './pages/Marks'
import About from './pages/About'
import Home from './pages/Home'
function App() {

  return (
    <> 
      <div className='container'>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path='/genres'>
              <Genres/>
            </Route>
            <Route path='/home'>
              <Home/>
            </Route>
            <Route path='/marks'>
              <Marks/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/contacts'>
              <Contacts/>
            </Route>
            <Redirect to='/home'/>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
