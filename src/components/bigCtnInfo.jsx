import React from 'react';

class BigInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  generateExp() {
    let data = this.props.userInfo;
    const listItems = data.map((data) => (
      <div key={data.id} className="pad_bott">
        <ul>
          <li>
            <h2>{data.company}</h2>
            <p>{data.date}</p>
            <p>{data.position}</p>
            <p>{data.exp_description}</p>
            <strong>
              <p>Key Learning Point</p>
            </strong>
            <i>
              <p>{data.learning_point}</p>
            </i>
          </li>
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
          <h1>Experience Description</h1>
          <div>{expData}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default BigInfo;
