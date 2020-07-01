import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  renderProjects() {
    let data = this.props.userInfo;
    const listItems = data.map((data) => (
      <div key={data.id} className="mg_bott">
        <ul>
          <div class="disp_flex">
            <h2>{data.id}.</h2>
            <h2>{data.name_project}</h2>
          </div>
          <li>
            <p>{data.description_project}</p>
            <strong>
              <h3>Things I learned and contributed in this project:</h3>
            </strong>
            <p>-{data.learnings_project}</p>
          </li>
        </ul>
      </div>
    ));
    return listItems;
  }
  render() {
    let projects = this.renderProjects();
    return (
      <div>
        <div>{projects}</div>
      </div>
    );
  }
}

export default Projects;
