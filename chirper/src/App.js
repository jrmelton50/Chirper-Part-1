import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import IndividualPost from "./IndividualPost";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/:post" component={IndividualPost}/>
        </Switch>
      </Router>
    );
  }
}