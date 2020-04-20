import React, { Component } from "react";
import Nav from "../nav/NavBar";

class AddBlogForm extends Component {
  state = {
    title: "",
    blogPhoto: "",
    linkToApp: "",
    videoDemo: "",
    description: "",
  };

  handleAddBlog = blogInfo => {
    // https://pacific-sands-75155.herokuapp.com/api/blogs 
    fetch(`http://localhost:8000/api/blogs`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(blogInfo)
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(e => Promise.reject(e));
      }
      this.setState({
        title: "",
        blogPhoto: "",
        linkToApp: "",
        videoDemo: "",
        description: "",
      })
      window.alert("Your blog was successfully been added!")
    })
    .catch(err => {
      console.error({ err });
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Nav />
        <div className="contact-form">
          <div className="input-felds">
            <input
              type="text"
              className="input"
              placeholder="Title"
              onChange={(e) => this.setState({ title: e.target.value })}
            />
            <input
              type="text"
              className="input"
              placeholder="Blog Photo"
              onChange={(e) => this.setState({ blogPhoto: e.target.value })}
            />
            <input
              type="text"
              className="input"
              placeholder="Link to App"
              onChange={(e) => this.setState({ linkToApp: e.target.value })}
            />
            <input
              type="text"
              className="input"
              placeholder="Video Demo"
              onChange={(e) => this.setState({ videoDemo: e.target.value })}
            />
          </div>
          <div className="msg">
            <textarea
              placeholder="Description"
              onChange={(e) => this.setState({ description: e.target.value })}
            />
            <div className="btn" onClick={(e) => {
              e.preventDefault();
              const blogInfo = {
                title: this.state.title,
                blogphoto: this.state.blogPhoto,
                linktoapp: this.state.linkToApp,
                videodemo: this.state.videoDemo,
                description: this.state.description
              }
              this.handleAddBlog(blogInfo);
            }}>
              Send<div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBlogForm;
