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

    this.allProjects = this.defaultProjects;
  }

  addProject(projectTitle) {
    const project = {
      id: this.projects.length > 0 ? this.projects[this.projects.length - 1].id + 1 : 5,
      title: projectTitle,
      todos: [],
      isActive: true,
    }

    this.changeActivePage();
    this.projects.push(project);
    this.updateAllProjects();

    this.onProjectListChanged(this.projects);
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

  changeActivePage() {
    for (let i = 0; i < this.allProjects.length; i++) {
      if (this.allProjects[i].isActive === true) {
        this.allProjects[i].isActive = false;
      }
    }
  }

  getDefaultPage() {
    const find = this.allProjects.find(project => project.isActive === true);
    if (find === undefined) {
      this.allProjects[0].isActive = true;
    }
  }

  deleteProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);
    
    this.updateAllProjects();
    this.getDefaultPage();
    this.onProjectListChanged(this.projects);
  }

  bindProjectListChanged(callback) {
    this.onProjectListChanged = callback;
  }
}