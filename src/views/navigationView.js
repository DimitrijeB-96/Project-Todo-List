export class NavigationView {
  constructor() {
    this.nav = this.createElement('div', 'nav-section');

    this.appTitle = this.createElement('h1');
    this.appTitle.textContent = 'TodoList';

    this.menuList = this.createElement('ul', 'menu-list');

    this.menuAll = this.createElement('li');
    this.menuAll.textContent = 'Menu';
    this.menuToday = this.createElement('li');
    this.menuToday.textContent = 'Today';
    this.menuUpcoming = this.createElement('li');
    this.menuUpcoming.textContent = 'Upcoming';
    this.menuImportant = this.createElement('li');
    this.menuImportant.textContent = 'Important';

    this.projectTitle = this.createElement('h2');
    this.projectTitle.textContent = 'Projects';

    this.projectList = this.createElement('ul', 'project-list');

    this.createProjectForm = this.createElement('form', 'creat-project-form');

    this.addProjectBtn = this.createElement('button', 'add-project-btn');
    this.addProjectBtn.textContent = 'Add Project';

    this.menuList.append(this.menuAll, this.menuToday, this.menuUpcoming, this.menuImportant);

    this.nav.append(this.appTitle, this.menuList, this.projectTitle, this.projectList, this.createProjectForm, this.addProjectBtn);

    document.body.append(this.nav);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  _hideChildElements(parent) {
    while(parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  displayProjects(projects) {
    while (this.projectList.firstChild) {
      this.projectList.removeChild(this.projectList.firstChild);
    }

    if (projects.length !== 0) {
      projects.forEach((project) => {
        const li = this.createElement('li');
        li.id = project.id;

        const p = this.createElement('p');
        p.textContent = project.title;

        const btn = this.createElement('button', 'delete-project-btn');
        btn.textContent = 'X';

        li.append(p, btn);

        this.projectList.append(li);
      })
    }
  }

  bindAddProject() {
    this.addProjectBtn.addEventListener('click', () => {
      if (this.createProjectForm.length === 0) {
        const inputProjectTitle = this.createElement('input', 'input-title');
        inputProjectTitle.type = 'text';
        inputProjectTitle.name = 'project-title';
  
        const cancelBtn = this.createElement('button', 'cancel-project-btn');
        cancelBtn.textContent = 'Cancel';
  
        const saveBtn = this.createElement('button', 'save-project-btn');
        saveBtn.textContent = 'Save';

        this.createProjectForm.append(inputProjectTitle, cancelBtn, saveBtn);
        inputProjectTitle.focus();
      }
    })
  }

  bindCreatingProject(handler) {
    this.createProjectForm.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.className === 'cancel-project-btn') {
        this._hideChildElements(this.createProjectForm); 

      } else if (e.target.className === 'save-project-btn') {
        const input = this.getElement('.input-title').value;
        if (input) {
          handler(input);
          this._hideChildElements(this.createProjectForm);
        }
      }
    })
  }

  bindDeleteProject(handler) {
    this.projectList.addEventListener('click', (e) => {
      if (e.target.className === 'delete-project-btn') {
        const id = parseInt(e.target.parentElement.id);
        handler(id);
      }
    })
  }

}