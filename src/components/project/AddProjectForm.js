import React, { Component } from "react";
import Nav from "../nav/NavBar";

class AddProjectForm extends Component {
  state = {
    name: "",
    appImg: "",
    features: "",
    description: "",
    linkToApp: "",
  };
  render() {
    return (
      <div className="wrapper">
        <Nav />
        <div className="contact-form">
          <div className="input-felds">
            <input
              type="text"
              className="input"
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <input
              type="text"
              className="input"
              placeholder="App Img"
              onChange={(e) => this.setState({ appImg: e.target.value })}
            />
            <input
              type="text"
              className="input"
              placeholder="Features"
              onChange={(e) => this.setState({ features: e.target.value })}
            />
            <input
              type="text"
              className="input"
              placeholder="Link to App"
              onChange={(e) => this.setState({ linkToApp: e.target.value })}
            />
          </div>
          <div className="msg">
            <textarea
              placeholder="Description"
              onChange={(e) => this.setState({ description: e.target.value })}
            />
            <div
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                console.log("state:", this.state);
              }}
            >
              Send<div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProjectForm;
