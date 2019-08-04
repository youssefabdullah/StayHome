import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Switch ,Link, Redirect, NavLink } from 'react-router-dom';



import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import PropertySingle from './components/Property_Single'
import Property from './components/Properties'
import Element from './components/Element'
import Home from './components/Home'
function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />

        <Switch>
        
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Home" component={Home} />
        </Switch>
        <Footer />

      </div>
    </BrowserRouter>

  );
}

export default App;
{/* <Router> 

 
   <Route  path="/"   Render = {() =><Home/>} />
  <Route path="/SignIn"  Render = {() =><SignIn/>} />
  <Route  path="/SignUp"  Render = {() =><SignUp/>} />

 
</Router>  */}