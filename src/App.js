import React from 'react';
import './styles/style.css';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import Contacts from './pages/Contacts'
import Genres from './pages/Genres'
import Marks from './pages/Marks'
import About from './pages/About'
import Home from './pages/Home'
import Details from './pages/Details';
import Profile from './pages/Profile';


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
            <Route path="/anime/:id" component={Details}/>
            {/* <Route path="/user/:id" component={Profile}/> */}
            <Route path='/profile'>
              <Profile/>
            </Route>
            <Redirect to='/home'/>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
