export class View {
  constructor() {
    this.nav = this.createElement('div', 'nav-section');
    this.header = this.createElement('div', 'header-section');
    this.content = this.createElement('div', 'content-section');

    this.appTitle = this.createElement('h1');
    this.appTitle.textContent = 'TodoList';

    this.menuTitle = this.createElement('h2');
    this.menuTitle.textContent = 'Menu';

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
    this.createProjectForm.style.display = 'none';

    this.inputProjectTitle = this.createElement('input');
    this.inputProjectTitle.type = 'text';

    this.cancelBtn = this.createElement('button', 'cancel-project');
    this.cancelBtn.textContent = 'Cancel';

    this.saveBtn = this.createElement('button', 'save-project');
    this.saveBtn.textContent = 'Save';

    this.addProjectBtn = this.createElement('button');
    this.addProjectBtn.textContent = 'Add Project';

    this.menuList.append(this.menuAll, this.menuToday, this.menuUpcoming, this.menuImportant);

    this.createProjectForm.append(this.inputProjectTitle, this.cancelBtn, this.saveBtn);

    this.nav.append(this.appTitle, this.menuTitle, this.menuList, this.projectTitle, this.projectList, this.createProjectForm, this.addProjectBtn);

    document.body.append(this.nav, this.header, this.content);
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

  get _projectTitle() {
   return this.inputProjectTitle.value;  
  }

  _resetInput() {
   return this.inputProjectTitle.value = '';  
  }

  displayProjects(projects) {
    while (this.projectList.firstChild) {
      this.projectList.removeChild(this.projectList.firstChild);
    }

    if (projects.length !== 0) {
      projects.forEach((project) => {
        const li = this.createElement('li');

        const p = this.createElement('p');
        p.textContent = project.title;

        const btn = this.createElement('button', 'delete-project');
        btn.textContent = 'X';

        li.append(p, btn);

        this.projectList.append(li);
      })
    }
  }

  addProject() {
    
  }

  _showForm() {
    this.createProjectForm.style.display = 'flex';
  }

  _hideForm() {
    this.createProjectForm.style.display = 'none';
  }

  bindAddProject() {
    this.addProjectBtn.addEventListener('click', () => {
      this._showForm();
    })
  }

  bindCancelProject() {
    this.cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();

      this._hideForm();
    })
  }

  bindSaveProject(handler) {
    this.saveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (this._projectTitle) {
        handler(this._projectTitle);
        this._resetInput();
        this._hideForm();
      }
    })
  }
}