import { parseISO, isToday, isFuture } from 'date-fns';

export class Model {
  constructor() {
    this.defaultProjects = [
      { id: 1, title: 'All', isActive: true },
      { id: 2, title: 'Today', isActive: false },
      { id: 3, title: 'Upcoming', isActive: false },
      { id: 4, title: 'Important', isActive: false }
    ];

    this.todos = JSON.parse(localStorage.getItem('todos')) || [];

    this.projects = JSON.parse(localStorage.getItem('projects')) || [];

    this.allProjects = this.defaultProjects;

    this.todayTodos = [];
    this.upcomingTodos = [];
    this.importantTodos = [];
  }

  _commitProjects(projects) {
    this.onProjectListChanged(projects);
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  _commitTodos(todos) {
    this.onTodoListChanged(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  addProject(projectTitle) {
    const project = {
      id: this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 5,
      title: projectTitle,
      isActive: false,
    }

    this.projects.push(project);
    this.updateAllProjects();

    this._commitProjects(this.projects);
  }

  addTask(name, description, date, isImportant) {
    let activeProject;

    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].isActive) {
        activeProject = this.projects[i];
      }
    }

    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      taskName: name,
      taskDescription: description,
      taskDate: date,
      isTaskCompleted: false,
      isTaskImportant: isImportant,
      whichProjectHoldThisTask: activeProject.title,
    }

    this.todos.push(todo);

    this._commitTodos(this.todos);
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

    this.deleteAllProjectTasks();
    this.updateAllProjects();
    this.menuPageIsActivePage();

    this._commitProjects(this.projects);
  }

  deleteTask(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    this._commitTodos(this.todos);
  }

  deleteAllProjectTasks() {
    let findTodosFromDeletedProject = this.todos.filter((todo) => !this.projects.find((project) => todo.whichProjectHoldThisTask === project.title));

    this.todos = this.todos.filter((todo) => !findTodosFromDeletedProject.some((foundTodo) => foundTodo.id === todo.id));

    this._commitTodos(this.todos);
  }

  changeTaskComplete(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { id: todo.id, taskName: todo.taskName, taskDescription: todo.taskDescription, taskDate: todo.taskDate, isTaskCompleted: !todo.isTaskCompleted, isTaskImportant: todo.isTaskImportant, whichProjectHoldThisTask: todo.whichProjectHoldThisTask} : todo,
    );

    this._commitTodos(this.todos);
  }

  changeTaskImportant(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { id: todo.id, taskName: todo.taskName, taskDescription: todo.taskDescription, taskDate: todo.taskDate, isTaskCompleted: todo.isTaskCompleted, isTaskImportant: !todo.isTaskImportant, whichProjectHoldThisTask: todo.whichProjectHoldThisTask} : todo,
    );

    this._commitTodos(this.todos);
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
    this._commitTodos(this.todos);
    return this.todos;
  }

  getTodaysTasks() {
    this.todayTodos = [];

    for (let i = 0; i < this.todos.length; i++) {
      // Date has to be converted from string into ISO
      if (isToday(parseISO(this.todos[i].taskDate))) {
        this.todayTodos.push(this.todos[i]);
      }
    }

    this._commitTodos(this.todos);
    return this.todayTodos;
  }

  getUpcomingTasks() {
    this.upcomingTodos = [];

    for (let i = 0; i < this.todos.length; i++) {
      if (isFuture(parseISO(this.todos[i].taskDate))) {
        this.upcomingTodos.push(this.todos[i]);
      }
    }

    this._commitTodos(this.todos);
    return this.upcomingTodos;
  }

  getImportantTasks() {
    this.importantTodos = [];

    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].isTaskImportant === 'checked') {
        this.importantTodos.push(this.todos[i]);
      }
    }

    this._commitTodos(this.todos);
    return this.importantTodos;
  }

  bindProjectListChanged(callback) {
    this.onProjectListChanged = callback;
  }

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }
}