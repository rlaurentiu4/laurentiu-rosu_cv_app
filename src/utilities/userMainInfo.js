const ProfilePic = require('../assets/images/profile_pic.jpg');

class UserMainInfo {
  constructor(
    fname,
    sname,
    position,
    phonenr,
    mail,
    city,
    bDay,
    profilePic,
    website,
    profileDescription,
    linkeDin,
    behance,
    dribbble
  ) {
    this.fname = fname;
    this.sname = sname;
    this.position = position;
    this.phonenr = phonenr;
    this.mail = mail;
    this.bDay = bDay;
    this.city = city;
    this.profilePic = profilePic;
    this.website = website;
    this.profileDescription = profileDescription;
    this.linkeDin = linkeDin;
    this.behance = behance;
    this.dribbble = dribbble;
  }

  getfName() {
    return this.fname;
  }

  getsName() {
    return this.sname;
  }

  getPosition() {
    return this.position;
  }

  getPhoneNumber() {
    return this.phonenr;
  }

  getMail() {
    return this.mail;
  }

  getbDay() {
    return this.bDay;
  }

  getCity() {
    return this.city;
  }

  getprofilePic() {
    return this.profilePic;
  }

  getWebsite() {
    return this.website;
  }

  getDescription() {
    return this.profileDescription;
  }

  getLinkdin() {
    return this.linkeDin;
  }

  getBehance() {
    return this.behance;
  }

  getDribbble() {
    return this.dribbble;
  }
}

const laurentiu = new UserMainInfo(
  'Rosu',
  'Laurentiu - Ionut',
  'Front-End Developer',
  '0773862587',
  'rlaurentiu4@gmail.com',
  'Bucharest',
  '04.06.1995',
  ProfilePic,
  '',
  [
    'Living with purpose and enjoying every state of mind that a conversation or an opportunity can provide is the most beneficial way of living. Passionate, persevering, and a genuine wish to grow and help people along the way as much as possible. Playing with colors, shapes, or just some User Interfaces for the last years have changed me as a human. Making Logos for brands or just trying to figure out how I can make “that function” work has never been more fulfilling. “A sweet mix” of a Graphic Designer and a Frontend Developer.',
  ],
  'https://www.linkedin.com/in/lauren%C8%9Biu-ro%C8%99u-4799a6a8/',
  'https://www.behance.net/laurentiurosu',
  'https://dribbble.com/laurentiurosu'
);

export default laurentiu;
