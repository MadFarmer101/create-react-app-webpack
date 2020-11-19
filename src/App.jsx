import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Users from "../src/components/containers/Users";
import AsyncComponent from "../src/components/hoc/AsyncComponent";

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
          <Route path="/" component={Users} /> 
          <Route path="/pizza" component={asyncPizza} /> 
        </div>
      </div>
    );
  }
}

export default App;
