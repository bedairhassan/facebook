
// tools 
import React from "react"
import { BrowserRouter as Router } from 'react-router-dom';

// css 
import './App.css';

// components
import SideBar from './components/App/SideBar'
import Routing from './components/App/Routing'
import NavBar from './components/App/NavBar'
import isSignedIn from './tools/isSignedIn'

// Before Monday meeting. // just staged `before disaster` before any edits

function App() {
  return (
    <React.Fragment>
      <Router>
        <SideBar isSignedIn={isSignedIn()} />
        <NavBar isSignedIn={isSignedIn()} />
        <Routing />
      </Router>
    </React.Fragment>
  );
}



export default App;
