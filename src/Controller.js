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
    this.contentView.bindDeleteTask(this.handleDeleteTask);

    this.onProjectListChanged(this.model.projects);
    this.onTodoListChanged(this.model.todos); // PROBLEM HERE ???
  }

  onProjectListChanged = (projects) => {
    this.navView.displayProjects(projects);
    //this.model.returnProjects(); // DELETE LATER
  }

  // THIS IS WHERE THE PROBLEM IS, I HAVE TO FIND THE WAY TO MAKE SURE THAT CONTENT WILL RENDER ONLY SPECIFIC ARRAY AND NOT ALL TODOS
  onTodoListChanged = (todos) => {
    this.contentView.displayTodoList(todos);
  }

  handleAddProject = (projectTitle) => {
    this.model.addProject(projectTitle);
  }

  handleAddTask = (taskTitle, taskDescription, taskDate, taskImportant) => {
    this.model.addTask(taskTitle, taskDescription, taskDate, taskImportant);
    this.contentView.displayTodoList(this.model.getActiveProjectTasks());
    console.log(this.model.todos);
  }

  handleDeleteProject = (id) => {
    this.model.deleteProject(id);
    this.contentView.updateTitle();
  }

  handleDeleteTask = (id) => {
    this.model.deleteTask(id);

    if (this.model.getActivePageTitle() === 'All') {
      console.log("ALL");
      this.contentView.displayTodoList(this.model.todos);
    } else if (this.model.getActivePageTitle() === 'Today') {
      console.log("TODAY");
      this.model.getTodaysTasks();
      this.contentView.displayTodoList(this.model.todayTodos);
    } else if (this.model.getActivePageTitle() === 'Upcoming') {
      console.log("UPCOMING");
      this.model.getUpcomingTasks();
      this.contentView.displayTodoList(this.model.upcomingTodos);
    } else if (this.model.getActivePageTitle() === 'Important') {
      console.log("IMPORTANT");
      this.model.getImportantTasks();
      this.contentView.displayTodoList(this.model.importantTodos);
    } else {
      console.log("INSIDE PROJECTS!");
      this.contentView.displayTodoList(this.model.getActiveProjectTasks());
    }
    console.log(this.model.todos); // DELETE LATER
  }

  handleActivePage = (id) => {
    this.model.changeActivePage(id);

    if (this.model.isActivePageProject(id)) {
      this.contentView.showAddTaskBtn();
      this.contentView.displayTodoList(this.model.getActiveProjectTasks());
    } else {
      this.contentView.hideAddTaskBtn();
      if (id === 1) {
        this.contentView.displayTodoList(this.model.todos);
      } else if (id === 2) {
        this.model.getTodaysTasks();
        this.contentView.displayTodoList(this.model.todayTodos);
      } else if (id === 3) {
        this.model.getUpcomingTasks();
        this.contentView.displayTodoList(this.model.upcomingTodos);
      } else if (id === 4) {
        this.model.getImportantTasks();
        this.contentView.displayTodoList(this.model.importantTodos);
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