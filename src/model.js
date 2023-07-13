export class Model {
  constructor() {
    this.projects = [];
  }

  addProject(projectTitle) {
    const project = {
      id: this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 1,
      title: projectTitle,
    }

    this.projects.push(project);

    this.onProjectListChanged(this.projects);
  }

  returnProjects() {
    console.log(this.projects);
  }

  deleteProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);

    this.onProjectListChanged(this.projects);
  }

  bindProjectListChanged(callback) {
    this.onProjectListChanged = callback;
  }
}