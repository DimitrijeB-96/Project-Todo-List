export class Controller {
  constructor(model, navView, contentView) {
    this.model = model;
    this.navView = navView;
    this.contentView = contentView;
    
    this.model.bindProjectListChanged(this.onProjectListChanged);
    //this.model.bindTodoListChanged(this.onTodoListChanged);

    this.navView.bindAddProject();
    this.navView.bindCreatingProject(this.handleAddProject);
    this.navView.bindDeleteProject(this.handleDeleteProject);
    this.navView.bindSelectProject(this.handleActivePage);

    this.contentView.setTitle(this.handleChangeTitle);
    this.contentView.bindCreateTodo();
    this.contentView.bindSaveTodoList(this.handleAddTask);

    //this.onTodoListChanged(this.model.projects.todos);
    this.onProjectListChanged(this.model.projects);
  }

  onProjectListChanged = (projects) => {
    this.navView.displayProjects(projects);
    this.model.returnProjects(); // DELETE LATER
  }

  // onTodoListChanged = (todos) => {
  //   this.contentView.displayTodoList(todos);
  // }

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
    this.model.returnProjects(); // DELETE LATER
  }

  // TO IMPLEMENT
  handleChangeTitle = () => {
    this.model.getActivePageTitle();
    this.contentView.setTitle();
  }
}