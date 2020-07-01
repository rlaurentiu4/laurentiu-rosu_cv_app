import React from 'react';

class ToolsAndTech extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="big_mg pad_bott">
          <h1>Tools & Technologies</h1>
          <div>
            <h2>{this.props.userInfo.getfTool()}</h2>
            <h2>{this.props.userInfo.getsTool()}</h2>
            <h2>{this.props.userInfo.gethTool()}</h2>
            <h2>{this.props.userInfo.getforthTool()}</h2>
            <h2>{this.props.userInfo.getfifTool()}</h2>
            <h2>{this.props.userInfo.getsixTool()}</h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ToolsAndTech;
