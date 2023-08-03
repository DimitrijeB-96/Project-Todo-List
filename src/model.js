export class Model {
  constructor() {
    this.defaultProjects = [
      { id: 1, title: 'All', isActive: true },
      { id: 2, title: 'Today', isActive: false },
      { id: 3, title: 'Upcoming', isActive: false },
      { id: 4, title: 'Important', isActive: false }
    ];

    this.todos = [];

    this.projects = [];

    this.allProjects = this.defaultProjects;
  }

  addProject(projectTitle) {
    const project = {
      id: this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 5,
      title: projectTitle,
      isActive: false,
    }

    this.projects.push(project);
    this.updateAllProjects();

    this.onProjectListChanged(this.projects);
  }

  addTask(name, description, date, isImportant) {
    let activeProject;

    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].isActive) {
        activeProject = this.projects[i];
      }
    }

    const todo = {
      id: this.todos > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      taskName: name,
      taskDescription: description,
      taskDate: date,
      isTaskCompleted: false,
      isTaskImportant: isImportant,
      whichProjectHoldThisTask: activeProject.title,
    }

    this.todos.push(todo);

    this.onTodoListChanged(this.todos);
  }

  returnProjects() { // DELETE LATER
    console.log('Projects: ');
    console.log(this.projects);
    console.log('All Projects: ');
    console.log(this.allProjects); 
  }

  updateAllProjects() {
    this.allProjects = [...this.defaultProjects, ...this.projects];
  }

  setPagesToFalse() {
    for (let i = 0; i < this.allProjects.length; i++) {
      if (this.allProjects[i].isActive === true) {
        this.allProjects[i].isActive = false;
      }
    }
  }

  menuPageIsActivePage() {
    const find = this.allProjects.find(project => project.isActive === true);
    if (find === undefined) {
      this.allProjects[0].isActive = true;
    }
  }

  deleteProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);
    
    this.updateAllProjects();
    this.menuPageIsActivePage();

    this.onProjectListChanged(this.projects);
  }

  deleteTask(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    // ADJUST HERE
  }

  changeActivePage(id) {
    this.setPagesToFalse();
    this.updateAllProjects();

    for (let i = 0; i < this.allProjects.length; i++) {
      if (this.allProjects[i].id === id) {
        this.allProjects[i].isActive = true;
      }
    }
  }

  getActivePageTitle() {
    let title;
    for (let i = 0; i < this.allProjects.length; i++) {
      if (this.allProjects[i].isActive === true) {
        title = this.allProjects[i].title;
      }
    }

    return title;
  }

  isActivePageProject(id) {
    let isProjectActive = false;

    if (this.projects.length > 0) {
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].id === id) {
          if (this.projects[i].isActive) {
            isProjectActive = true;
          }
        }
      }
    }

    return isProjectActive;
  }

  getActiveProjectTasks() {
    let activePageTasks = [];

    for (let i = 0; i < this.projects.length; i++) {
      for (let j = 0; j < this.todos.length; j++) {
        if (this.projects[i].isActive) {
          if (this.todos[j].whichProjectHoldThisTask === this.projects[i].title) {
            activePageTasks.push(this.todos[j]);
          }
        }
      }
    }

    return activePageTasks;
  }

  getAllTasks() {
    // Implement logic to show all todos
    return this.todos;
  }

  getTodaysTasks() {
    // Implement logic to show only todos where todays date is the same as task date
  }

  getUpcomingTasks() {
    // Implement logic to show only todos where task date is "greater" then todays date
  }

  getImportantTasks() {
    let onlyImportantTasks = [];

    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].isTaskImportant === 'checked') {
        onlyImportantTasks.push(this.todos[i]);
      }
    }

    return onlyImportantTasks;
  }

  bindProjectListChanged(callback) {
    this.onProjectListChanged = callback;
  }

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }
}