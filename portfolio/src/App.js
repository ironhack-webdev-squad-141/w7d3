import React from "react";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import About from "./containers/About";
import Projects from "./containers/Projects";
import ProjectDetails from "./containers/ProjectDetails";
import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:projectId" component={ProjectDetails} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
