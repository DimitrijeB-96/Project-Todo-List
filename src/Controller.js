export class Controller {
  constructor(model, navView, contentView) {
    this.model = model;
    this.navView = navView;
    this.contentView = contentView;
    
    this.model.bindProjectListChanged(this.onProjectListChanged);
    this.model.bindTodoListChanged(this.onTodoListChanged);

    this.navView.bindAddProject();
    this.navView.bindCreatingProject(this.handleAddProject);
    this.navView.bindDeleteProject(this.handleDeleteProject);
    this.navView.bindSelectProject(this.handleActivePage);

    this.contentView.setTitle(this.handleChangeTitle);
    this.contentView.bindCreateTodo();
    this.contentView.bindSaveTodoList(this.handleAddTask);

    this.onProjectListChanged(this.model.projects);
    this.todos = this.model.projects['todos'];
    console.log(this.todos);
    this.onTodoListChanged(this.model.projects.todos);
  }

  onProjectListChanged = (projects) => {
    this.navView.displayProjects(projects);
    //this.model.returnProjects(); // DELETE LATER
  }

  onTodoListChanged = (task) => {
    this.contentView.displayTodoList(task);
  }

  handleAddProject = (projectTitle) => {
    this.model.addProject(projectTitle);
  }

  handleAddTask = (taskTitle, taskDescription, taskDate, taskImportant) => {
    this.model.addTask(taskTitle, taskDescription, taskDate, taskImportant);
  }

  handleDeleteProject = (id) => {
    this.model.deleteProject(id);
    this.contentView.updateTitle();
  }

  handleDeleteTask = (id) => {
    this.model.deleteTask(id);
  }

  handleActivePage = (id) => {
    this.model.changeActivePage(id);
    
    if (this.model.isActivePageProject(id)) {
      this.contentView.showAddTaskBtn();
    } else {
      this.contentView.hideAddTaskBtn();
    }
    
    this.handleChangeTitle();
    //this.model.returnProjects(); // DELETE LATER
  }

  handleChangeTitle = () => {
    this.model.getActivePageTitle();
    this.contentView.setTitle();
  }
}