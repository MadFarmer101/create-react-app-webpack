import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Users from "./components/containers/Users";
import AsyncComponent from "./components/hoc/AsyncComponent/AsyncComponent";

const asyncPizza = AsyncComponent(() => {
  return import('./components/containers/Pizza')
})

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link>
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} /> 
          <Route path="/pizza" component={asyncPizza} /> 
        </div>
      </div>
    );
  }
}

export default App;
