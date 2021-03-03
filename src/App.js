import { Route,  BrowserRouter as Router,Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/person">
          <Person/>
          </Route>

          <Route exact path="/people">
          <People/>
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

function People() {
  return (
    <h1>People</h1>
  )
}

function Person() {
  return (
    <h1>Person</h1>
  )
}

export default App;
