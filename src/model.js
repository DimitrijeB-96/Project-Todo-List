export class Model {
  constructor() {
    this.defaultProjects = [
      {
        id: 1,
        title: 'Menu',
        todos: [],
        isActive: true,
      },
      {
        id: 2,
        title: 'Today',
        todos: [],
        isActive: false,
      },
      {
        id: 3,
        title: 'Upcoming',
        todos: [],
        isActive: false,
      },
      {
        id: 4,
        title: 'Important',
        todos: [],
        isActive: false,
      }
    ];

    this.projects = [];

    this.allProjects = this.defaultProjects.concat(this.projects);
  }

  addProject(projectTitle) {
    const project = {
      id: this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 1,
      title: projectTitle,
      todos: [],
      isActive: true,
    }

    this.projects.push(project);

    this.onProjectListChanged(this.projects);
  }

  returnProjects() { // DELETE LATER
    console.log(this.allProjects); 
  }

  deleteProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);

    this.onProjectListChanged(this.projects);
  }

  bindProjectListChanged(callback) {
    this.onProjectListChanged = callback;
  }
}