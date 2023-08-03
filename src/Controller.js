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
    this.onTodoListChanged(this.model.todos);
  }

  onProjectListChanged = (projects) => {
    this.navView.displayProjects(projects);
    //this.model.returnProjects(); // DELETE LATER
  }

  onTodoListChanged = (todos) => {
    this.contentView.displayTodoList(todos);
  }

  handleAddProject = (projectTitle) => {
    this.model.addProject(projectTitle);
  }

  handleAddTask = (taskTitle, taskDescription, taskDate, taskImportant) => {
    this.model.addTask(taskTitle, taskDescription, taskDate, taskImportant);
    this.contentView.displayTodoList(this.model.getActiveProjectTasks());
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
      this.contentView.displayTodoList(this.model.getActiveProjectTasks());
    } else {
      this.contentView.hideAddTaskBtn();
      if (id === 1) {
        this.contentView.displayTodoList(this.model.getAllTasks());
      } else if (id === 2) {
        this.contentView.displayTodoList(this.model.getTodaysTasks());
      } else if (id === 3) {
        this.contentView.displayTodoList(this.model.getUpcomingTasks());
      } else if (id === 4) {
        this.contentView.displayTodoList(this.model.getImportantTasks());
      }
    }
    
    this.handleChangeTitle();
    //this.model.returnProjects(); // DELETE LATER
  }

  handleChangeTitle = () => {
    this.model.getActivePageTitle();
    this.contentView.setTitle();
  }
}