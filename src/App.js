import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.js";
import Character from "./Pages/Character.js";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Character" exact component={Character} />
      </Switch>
    </Router>
  );
}

export default App;
