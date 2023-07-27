export class Model {
  constructor() {
    this.defaultProjects = [
      {
        id: 1,
        title: 'All',
        // Checkbox isTaskCompleted, h3 taskTitle, p taskDescription, checkbox isImportant, button removeTask
        todos: [{id: 1, taskName: 'First task in all tasks', taskDescription: 'This task is not really a task.', date: '30.07.2023', isTaskCompleted: false, isTaskImportant: false}],
        isActive: true,
      },
      {
        id: 2,
        title: 'Today',
        todos: [{id: 1, task: 'This is todays task', taskDescription: 'Do this today...', date: '27.07.2023', isTaskCompleted: false, isTaskImportant: false}],
        isActive: false,
      },
      {
        id: 3,
        title: 'Upcoming',
        todos: [{id: 1, task: 'Upcoming task', taskDescription: 'This is task to do in futre', date: '31.12.2023', isTaskCompleted: false, isTaskImportant: false}],
        isActive: false,
      },
      {
        id: 4,
        title: 'Important',
        todos: [{id: 1, task: 'This is important task!', taskDescription: 'You must do this task!', date: '28.07.2023', isTaskCompleted: false, isTaskImportant: true}],
        isActive: false,
      }
    ];

    this.projects = [];

    this.allProjects = this.defaultProjects;

    this.todos = [];
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

  // do I need to check where it is located ?
  addTask(name, description, date, isImportant) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      taskName: name,
      taskDescription: description,
      taskDate: date,
      isTaskCompleted: false,
      isTaskImportant: isImportant,
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

    // Add more methods for deling task
  }

  changeActivePage(id) {
    this.setPagesToFalse();
    this.updateAllProjects();
    this.allProjects[id - 1].isActive = true;
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

  getAllTasks() {
    // Implement logic to show all tasks
    return this.todos;
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

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }
}