class Education {
  constructor(profile, year, name, location) {
    this.profile = profile;
    this.year = year;
    this.name = name;
    this.location = location;
  }

  getProfEdu() {
    return this.profile;
  }

  getYear() {
    return this.year;
  }

  getEduName() {
    return this.name;
  }

  getLocation() {
    return this.location;
  }
}

const eduLaur = new Education(
  'Mathematics - Computer Science',
  '2010-2014',
  'Colegiul "Stefan Odobleja"',
  'Craiova'
);

export default eduLaur;
