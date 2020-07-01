class ToolsTechnologies {
  constructor(fTool, sTool, thTool, forthTool, fifTool, sitool) {
    this.fTool = fTool;
    this.sTool = sTool;
    this.thTool = thTool;
    this.forthTool = forthTool;
    this.fifTool = fifTool;
    this.sitool = sitool;
  }
  getfTool() {
    return this.fTool;
  }
  getsTool() {
    return this.sTool;
  }
  gethTool() {
    return this.thTool;
  }
  getforthTool() {
    return this.forthTool;
  }
  getfifTool() {
    return this.fifTool;
  }
  getsixTool() {
    return this.sitool;
  }
}

const laurTools = new ToolsTechnologies(
  'Adobe Creative Suite',
  'HTML, CSS/LESS',
  'JavaScript',
  'ReactJs',
  'Git',
  'Webpack'
);

export default laurTools;
