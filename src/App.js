import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Statuses from "./components/Statuses/Statuses";
import AddStatus from "./components/Statuses/AddStatus";

import ServiceIncidents from "./components/Incidents/ServiceIncidents";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header title="New Games Assignment" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Statuses} />
                <Route path="/incidents" component={ServiceIncidents} />
                <Route exact path="/status/add" component={AddStatus} />
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
