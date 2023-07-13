export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindProjectListChanged(this.onProjectListChanged);
    this.view.bindAddProject();
    this.view.bindCreatingProject(this.handleAddProject);
    this.view.bindDeleteProject(this.handleDeleteProject);
    
    this.onProjectListChanged(this.model.projects);
  }

  onProjectListChanged = (projects) => {
    this.view.displayProjects(projects);
    this.model.returnProjects();
  }

  handleAddProject = (projectTitle) => {
    this.model.addProject(projectTitle);
  }

  handleDeleteProject = (id) => {
    this.model.deleteProject(id);
  }
}