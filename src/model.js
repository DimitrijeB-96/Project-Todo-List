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
      isActive: false,
    }

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

  bindProjectListChanged(callback) {
    this.onProjectListChanged = callback;
  }
}