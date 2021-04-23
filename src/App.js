import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Character from "./Pages/Character.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Character/:id" component={Character} exact />
        <Route path="*" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
