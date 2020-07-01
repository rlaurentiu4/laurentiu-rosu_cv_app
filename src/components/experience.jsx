import React from 'react';

//components
import IndKnowledge from './indKnowledge.jsx';
import ToolsAndTech from './toolsAndTech.jsx';
import Education from './education.jsx';

import InfoExp from './infoExp.jsx';
import BigInfo from './bigCtnInfo.jsx';
import Projects from './projects.jsx';
import Web from './web.jsx';

//data
import inKnLaur from '../utilities/industryKnowledge.js';
import laurTools from '../utilities/toolsAndTech.js';
import eduLaur from '../utilities/eduData.js';
import expData from '../utilities/expData.js';
import DescriptionBig from '../utilities/big_description.js';
import dataProjects from '../utilities/projects.js';
import webData from '../utilities/webData.js';

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <section className="first_section_wrap anim_fade-in">
          <div className="ind_tools_ctn">
            <IndKnowledge userInfo={inKnLaur} />
            <ToolsAndTech userInfo={laurTools} />
            <Education userInfo={eduLaur} />
          </div>
          <div className="exp_ctn">
            <InfoExp userInfo={expData} />
          </div>
        </section>
        <section className="big_info_ctn big_mg">
          <BigInfo userInfo={DescriptionBig} />
          <h1>Projects Description:</h1>
          <Projects userInfo={dataProjects} />
          <h1>Websites:</h1>
          <Web userInfo={webData} />
        </section>
      </React.Fragment>
    );
  }
}

export default Experience;
