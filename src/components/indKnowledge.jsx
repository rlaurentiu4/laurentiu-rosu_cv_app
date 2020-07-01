import React from 'react';

class IndKnowledge extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.userInfo;
    return (
      <React.Fragment>
        <div className="big_mg pad_bott anim_fade-in">
          <h1>Industry Knowledge</h1>
          <div>
            <h2>{data.getFirstSkill()}</h2>
            <h2>{data.getSskill()}</h2>
            <h2>{data.getTskill()}</h2>
            <h2>{data.getFskill()}</h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IndKnowledge;
