import React from 'react';

class Web extends React.Component {
  constructor(props) {
    super(props);
  }

  generateWeb() {
    let data = this.props.userInfo;
    const listWeb = data.map((data) => (
      <div key={data.id} class="anim_fade-in">
        <a href={data.site} target="_blank" rel="noreferrer">
          <img src={data.logo} alt="logo" className="web_icon" />
        </a>
      </div>
    ));
    return listWeb;
  }

  render() {
    let webData = this.generateWeb();
    return (
      <React.Fragment>
        <div className="web_ctn">{webData}</div>
      </React.Fragment>
    );
  }
}

export default Web;
