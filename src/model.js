export class Model {
  constructor() {
    this.defaultProjects = [
      { id: 1, title: 'All', todos: [], isActive: true },
      { id: 2, title: 'Today', todos: [], isActive: false },
      { id: 3, title: 'Upcoming', todos: [], isActive: false },
      { id: 4, title: 'Important', todos: [], isActive: false }
    ];

    this.projects = [];

    this.allProjects = this.defaultProjects;
  }

  addProject(projectTitle) {
    const project = {
      id: this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 5,
      title: projectTitle,
      todos: [],
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
      id: activeProject.todos.length > 0 ? activeProject.todos[activeProject.todos.length - 1].id + 1 : 1,
      taskName: name,
      taskDescription: description,
      taskDate: date,
      isTaskCompleted: false,
      isTaskImportant: isImportant,
    }

    this.updateAllProjects();

    activeProject.todos.push(todo);

    // this.onTodoListChanged(this.todos);
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

  getAllTasks() {
    // Implement logic to show all tasks
  }

  getTodaysTasks() {
    // Implement logic to show only tasks where todays date is the same as task date
  }

  getUpcomingTasks() {
    // Implement logic to show only tasks where task date is "greater" then todays date
  }

  getImportantTasks() {
    // Implement logic to show only tasks where checkbox isImportant is checked
  }

  bindProjectListChanged(callback) {
    this.onProjectListChanged = callback;
  }

  // ?
  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }
}