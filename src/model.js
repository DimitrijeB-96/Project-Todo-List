export class Model {
  constructor() {
    this.projects = []
    this.todos = [];
  }

  addProject(projectTitle) {
    const project = {
      id: this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 1,
      title: projectTitle,
    }

    console.log(this.projects);
  }

  deleteProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);
  }

  bindProjectListChanged(callback) {
    this.onProjectListChanged = callback;
  }
}