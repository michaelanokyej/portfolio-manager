import React, { Component } from "react";
import Nav from "../nav/NavBar";

class AddBlogForm extends Component {
  render() {
    return (
      <div className="wrapper">
        <Nav />
        <div className="contact-form">
          <div className="input-felds">
            <input type="text" className="input" placeholder="Title" />
            <input type="text" className="input" placeholder="Blog Photo" />
            <input type="text" className="input" placeholder="Link to App" />
            <input type="text" className="input" placeholder="Video Demo" />
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

export default AddBlogForm;
