import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="homeBox">
        <div className="homeHeader">
          <h2>Hello Michael, what do you want to update?</h2>
        </div>

        <div className="homeUpdateOptions">
          <div className="updateOption">
            <Link to={`/add-blog`}>
              <img src="blogsIcon.png" alt="blog" className="addLinkImage" />
              <p>Blogs</p>
            </Link>
          </div>
          <div className="updateOption">
            <Link to={`/add-project`}>
              <img
                src="projectsIcon.png"
                alt="project"
                className="addLinkImage"
              />
              <p>Projects</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
