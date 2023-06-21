export class Project {
  constructor(projectName) {
    this._projectName = projectName;
  }

  get name() {
    return this._projectName;
  }

  set name(value) {
    if (value) {
      return this._projectName = value;
    }
  }
}