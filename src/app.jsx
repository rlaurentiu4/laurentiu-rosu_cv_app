import React from 'react';
import laurentiu from './utilities/userMainInfo.js';

import Profile from './components/profile.jsx';
import Experience from './components/experience.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Profile userInfo={laurentiu} />
        </div>
        <div>
          <Experience />
        </div>
        <div className="bott_ctn center_flex">
          <div className="line"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
