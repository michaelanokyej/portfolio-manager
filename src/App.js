import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home"
import AddBlogForm from "./components/blog/AddBlogForm";
import AddProjectForm from "./components/project/AddProjectForm";


import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-blog" component={AddBlogForm} />
          <Route exact path="/add-project" component={AddProjectForm} />
        </Switch>
      </main>
    );
  }
}

export default App;
