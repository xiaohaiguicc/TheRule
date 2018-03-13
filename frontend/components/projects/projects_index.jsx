import React from 'react';
import { Link } from 'react-router-dom';

class ProjectsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllProjects();
  }

  render() {
    return (
      <div className="projects-index">
        <div className="container">
          <form className="makeit-searchform" >
            <span className="title">Let's Make</span>
            <div className="makeit-searchfield"></div>
            <button><li className="fas fa-search"></li></button>
          </form>
        </div>

      </div>
    );
  }
}

export default ProjectsIndex;
