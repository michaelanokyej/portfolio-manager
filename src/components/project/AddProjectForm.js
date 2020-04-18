import React, { Component } from "react";
import Nav from "../nav/NavBar";

class AddProjectForm extends Component {
  render() {
    return (
      <div className="wrapper">
        <Nav />
        <div className="contact-form">
          <div className="input-felds">
            <input type="text" className="input" placeholder="Name" />
            <input type="text" className="input" placeholder="App Img" />
            <input type="text" className="input" placeholder="Features" />
            <input type="text" className="input" placeholder="Link to App" />
          </div>
          <div className="msg">
            <textarea placeholder="Description" />
            <div className="btn">
              Send<div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProjectForm;
