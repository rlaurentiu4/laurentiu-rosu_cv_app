import React from 'react';

class Education extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.userInfo;
    return (
      <React.Fragment>
        <div className="big_mg pad_bott">
          <h1>Education</h1>
          <div>
            <h2>{data.getProfEdu()}</h2>
            <h3>{data.getYear()}</h3>
            <h2>{data.getEduName()}</h2>
            <h3>{data.getLocation()}</h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Education;
