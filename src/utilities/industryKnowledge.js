class IndustryKnowledge {
  constructor(firstSkill, sskill, tskill, ffskill) {
    this.firstSkill = firstSkill;
    this.sskill = sskill;
    this.tskill = tskill;
    this.ffskill = ffskill;
  }
  getFirstSkill() {
    return this.firstSkill;
  }
  getSskill() {
    return this.sskill;
  }
  getTskill() {
    return this.tskill;
  }
  getFskill() {
    return this.ffskill;
  }
}

const inKnLaur = new IndustryKnowledge(
  'UI/UX',
  'Visual Design',
  'Front-End Development',
  'Brand Development'
);

console.log(inKnLaur.getFskill());

export default inKnLaur;
