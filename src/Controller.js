export class Controller {
  constructor(model, navView, contentView) {
    this.model = model;
    this.navView = navView;
    this.contentView = contentView;
    
    this.model.bindProjectListChanged(this.onProjectListChanged);
    this.navView.bindAddProject();
    this.navView.bindCreatingProject(this.handleAddProject);
    this.navView.bindDeleteProject(this.handleDeleteProject);
    this.navView.bindSelectProject(this.handleActivePage);

    this.contentView.bindCreateTodo();

    this.contentView.setTitle(this.handleChangeTitle);
    
    this.onProjectListChanged(this.model.projects);
  }

  onProjectListChanged = (projects) => {
    this.navView.displayProjects(projects);
    this.model.returnProjects(); // DELETE LATER
  }

  handleAddProject = (projectTitle) => {
    this.model.addProject(projectTitle);
  }

  handleDeleteProject = (id) => {
    this.model.deleteProject(id);
    this.contentView.updateTitle();
  }

  handleActivePage = (id) => {
    this.model.changeActivePage(id);
    this.handleChangeTitle();
    this.model.returnProjects(); // DELETE LATER
  }

  // TO IMPLEMENT
  handleChangeTitle = () => {
    this.model.getActivePageTitle();
    this.contentView.setTitle();
  }
}