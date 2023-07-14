export class Model {
  constructor() {
    this.projects = [];

    this.todos = []; // SHOULD CONTAINE CHECKBOX isComplete, TITLE, DESCRIPTION, TIME (CHECK date-fns)

    this.defaultProjects = [ // SHOULD ADD LOGIC HOW TO RENDER CONTENT FROM EACH OBJECT (MENU, TODAY, UPCOMING, IMPORTANT)
      {
        id: 1,
        title: 'Menu',
        todos: [],
      },
      {
        id: 2,
        title: 'Today',
        todos: [],
      },
      {
        id: 3,
        title: 'Upcoming',
        todos: [],
      },
      {
        id: 4,
        title: 'Important',
        todos: [],
      }
    ];
  }

  addProject(projectTitle) {
    const project = {
      id: this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 1,
      title: projectTitle,
      todos: [],
    }

    this.projects.push(project);

    this.onProjectListChanged(this.projects);
  }

  returnProjects() { // DELETE LATER
    console.log(this.projects); 
  }

  deleteProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);

    this.onProjectListChanged(this.projects);
  }

  bindProjectListChanged(callback) {
    this.onProjectListChanged = callback;
  }
}