export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddProject();
    this.view.bindCancelProject();
    this.view.bindSaveProject(this.handleAddProject);

    this.model.bindProjectListChanged(this.onProjectListChanged);
    this.onProjectListChanged(this.model.projects);
  }

  onProjectListChanged = (projects) => {
    this.view.displayProjects(projects);
  }

  handleAddProject = (projectTitle) => {
    this.model.addProject(projectTitle);
  }

  handleDeleteProject = (id) => {
    this.model.deleteProject(id);
  }
}