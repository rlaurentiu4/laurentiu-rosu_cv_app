import React from 'react';

class InfoExp extends React.Component {
  constructor(props) {
    super(props);
  }

  generateExp() {
    let data = this.props.userInfo;
    const listItems = data.map((data) => (
      <div key={data.id} className="big_mg pad_bott">
        <ul>
          <li key={data.id} value={data}>
            <h2>{data.company}</h2>
            <p>{data.position}</p>
            <p>{data.date}</p>
            <p>{data.exp_description}</p>
          </li>
        </ul>
        <ul>
          <p>{data.smallData}</p>
        </ul>
      </div>
    ));
    return listItems;
  }

  render() {
    let expData = this.generateExp();
    return (
      <React.Fragment>
        <div className="big_mg">
          <h1>Experience</h1>
          <div>{expData}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default InfoExp;
