export class NavigationView {
  constructor() {
    this.nav = this.createElement('div', 'nav-section');

    this.appTitle = this.createElement('h1');
    this.appTitle.textContent = 'TodoList';

    this.menuList = this.createElement('ul', 'menu-list');

    this.menuAll = this.createElement('li', 'project');
    this.menuAll.textContent = 'All';
    this.menuAll.id = 1;

    this.menuToday = this.createElement('li', 'project');
    this.menuToday.textContent = 'Today';
    this.menuToday.id = 2;

    this.menuUpcoming = this.createElement('li', 'project');
    this.menuUpcoming.textContent = 'Upcoming';
    this.menuUpcoming.id = 3;

    this.menuImportant = this.createElement('li', 'project');
    this.menuImportant.textContent = 'Important';
    this.menuImportant.id = 4;

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

  _hideAddProjectBtn() {
    this.addProjectBtn.style.display = 'none';
  }

  _showAddProjectBtn() {
    this.addProjectBtn.style.display = 'block';
  }

  displayProjects(projects) {
    while (this.projectList.firstChild) {
      this.projectList.removeChild(this.projectList.firstChild);
    }

    if (projects.length !== 0) {
      projects.forEach((project) => {
        const li = this.createElement('li', 'project');
        li.textContent = project.title;
        li.id = project.id;

        const btn = this.createElement('button', 'delete-project-btn');
        btn.textContent = 'X';

        li.append(btn);

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

        this._hideAddProjectBtn();
      }
    })
  }

  bindCreatingProject(handler) {
    this.createProjectForm.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.className === 'cancel-project-btn') {
        this._hideChildElements(this.createProjectForm); 
        this._showAddProjectBtn();

      } else if (e.target.className === 'save-project-btn') {
        const input = this.getElement('.input-title').value;
        if (input) {
          handler(input);
          this._hideChildElements(this.createProjectForm);
          this._showAddProjectBtn();
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

  bindSelectProject(handler) {
    this.nav.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
          const id = parseInt(e.target.id);
          handler(id);
        }
    })
  }
}