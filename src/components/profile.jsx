import React from 'react';

import phIcon from '../assets/images/phone.svg';
import mailIcon from '../assets/images/mail.svg';
import dateIcon from '../assets/images/date.svg';
import pinIcon from '../assets/images/pin.svg';
import linkeDin from '../assets/images/in.svg';
import behance from '../assets/images/behance.svg';
import dribbble from '../assets/images/dribbble.svg';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.userInfo;
    return (
      <React.Fragment>
        <div className="big_mg name_ctn">
          <p>{data.getfName()}</p>
          <p class="grad_text">{data.getsName()}</p>
        </div>
        <div>
          <div className="info_ctn">
            <div className="pos_wrap">
              <h3>{data.getPosition()}</h3>
            </div>
            <div>
              <div className="disp_flex">
                <img src={phIcon} className="icon" />
                <a href={data.getPhoneNumber()}>
                  <h4>{data.getPhoneNumber()}</h4>
                </a>
              </div>
              <div className="disp_flex">
                <img src={mailIcon} className="icon" />
                <h4>{data.getMail()}</h4>
              </div>
              <div className="disp_flex">
                <img src={dateIcon} className="icon" />
                <h4>{data.getbDay()}</h4>
              </div>
              <div className="disp_flex">
                <img src={pinIcon} className="icon" />
                <h4>{data.getCity()}</h4>
              </div>
            </div>
            <div className="avatar_wrap center_flex">
              <img src={data.getprofilePic()} class="profile_pic" />
            </div>
            <div className="user_socials_ctn center_flex">
              <a href={data.getLinkdin()} target="_blank" rel="noreferrer">
                <img src={linkeDin} class="social_icon" />
              </a>
              <a href={data.getBehance()} target="_blank" rel="noreferrer">
                <img src={behance} class="social_icon" />
              </a>
              <a href={data.getDribbble()} target="_blank" rel="noreferrer">
                <img src={dribbble} class="social_icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="big_mg prof_wrap">
          <h1>Profile</h1>
          <p>{data.getDescription()}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
