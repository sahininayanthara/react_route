import React from 'react';
import './App.css';
import Admin from './Admin';
import User from './User';
import Button from './Button';
import pic from "./pic.jpg"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <img src={pic} alt="mypic" />
    <Router>
    <div>
      <Switch>
    <Route path="/" exact component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/user" component={User} />
      
      </Switch>
      
    </div>
    </Router>
    </div>
  );
}
const Home = () =>(
  <div>
    <Button/>
  </div>
);

export default App;
