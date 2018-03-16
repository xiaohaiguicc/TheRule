import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class ProjectsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllProjects();
  }

  render() {
    return (
      <Link to={"/projects/102"}>
        <div className="container">
          <form className="makeit-searchform" >
            <span className="title">Let's Make</span>
            <div id="makeit-searchfield">
              <div className="dummy-input">
                <p className="animation">KNIFE</p>
              </div>
            </div>
            <button><li className="fas fa-search"></li></button>
          </form>
        </div>
      </Link>
    );
  }
}

export default withRouter(ProjectsIndex);
