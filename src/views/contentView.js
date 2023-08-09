export class ContentView {
  constructor() {
    this.header = this.createElement('div', 'header-section');
    this.content = this.createElement('div', 'content-section');

    this.currentPage = this.createElement('h1', 'current-page-text');
    this.currentPage.textContent = 'All';

    this.contentDiv = this.createElement('div', 'content-div');

    this.contentDivTop = this.createElement('div', 'content-div-top');

    this.todosList = this.createElement('ul', 'todos-list');

    //THIS SHOULD BE DISPLAYED ONLY WHEN PROJECT IS ACTIVE
    this.addNewTodoBtn = this.createElement('button', 'new-todo-btn');
    this.addNewTodoBtn.textContent = '+';
    this.addNewTodoBtn.style.display = 'none';

    this.header.append(this.currentPage);

    this.contentDiv.append(this.contentDivTop, this.todosList, this.addNewTodoBtn);

    this.content.append(this.contentDiv);

    document.body.append(this.header, this.content);
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

  setTitle() {
    let title = this.currentPage;
    
    const navSection = this.getElement('.nav-section');
    navSection.addEventListener('click', (e) => {
      if (e.target.className === 'project') {
        title.textContent = e.target.firstChild.textContent;
      }
    });
  }

  updateTitle() {
    let title = this.currentPage;

    let elementFound = false;

    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      if (project.firstChild.textContent === title.textContent) {
        elementFound = true;
      }
    });

    if (elementFound === false) {
      title.textContent = projects[0].textContent;
      this.hideAddTaskBtn();
    }
  }

  bindCreateTodo() {
    this.addNewTodoBtn.addEventListener('click', () => {
      const div = this.createElement('div', 'create-todo-div');

      const background = this.createElement('div', 'background');

      const headerDiv = this.createElement('div', 'create-todo-header-div');

      const title = this.createElement('h2');
      title.textContent = 'Create Task';

      const closeBtn = this.createElement('button', 'close-todo-create-btn');
      closeBtn.textContent = '❌';

      const form = this.createElement('form', 'create-todo-form');

      const titleText = this.createElement('label');
      titleText.textContent = 'Task Title';
      titleText.htmlFor = 'task-title';

      const titleInput = this.createElement('input');
      titleInput.type = 'text';
      titleInput.id = 'task-title';
      titleInput.name = 'task-title';

      const dateText = this.createElement('label');
      dateText.textContent = 'Task Date';
      dateText.htmlFor = 'task-date';

      const dateInput = this.createElement('input');
      dateInput.type = 'date';
      dateInput.id = 'task-date';
      dateInput.name = 'task-date';

      const descriptionText = this.createElement('label');
      descriptionText.textContent = 'Description';
      descriptionText.htmlFor = 'task-description';

      const descriptionInput = this.createElement('textarea');
      descriptionInput.id = 'task-description';
      descriptionInput.name = 'task-description';

      const checkboxDiv = this.createElement('div', 'create-todo-checkbox-div');

      const isImportantText = this.createElement('label');
      isImportantText.textContent = 'Mark as important';
      isImportantText.htmlFor = 'task-important';

      const isImportant = this.createElement('input');
      isImportant.type = 'checkbox';
      isImportant.id = 'task-important';
      isImportant.name = 'task-important';

      const createTaskBtn = this.createElement('button', 'create-todo-btn');
      createTaskBtn.textContent = 'Create';
      createTaskBtn.type = 'button';

      headerDiv.append(title, closeBtn);

      checkboxDiv.append(isImportant, isImportantText);

      form.append(titleText, titleInput, dateText, dateInput, descriptionText, descriptionInput, checkboxDiv, createTaskBtn);

      div.append(headerDiv, form);

      document.body.append(background, div);
    })
  }

  bindSaveTodoList(handler) {
    document.addEventListener('click', (e) => {

      const titleInput = this.getElement('#task-title');
      const dateInput = this.getElement('#task-date');
      const descriptionInput = this.getElement('#task-description');

      const isImportant = this.getElement('#task-important');

      if (e.target.className === 'create-todo-btn') {
        if (titleInput.value !== '' && dateInput.value !== '' && descriptionInput.value !== '') {
          if (isImportant.checked) {
            isImportant.status = 'checked';
          } else {
            isImportant.status = 'unchecked';
          }
          handler(titleInput.value, descriptionInput.value, dateInput.value, isImportant.status);
          this._hideTodoCreatingDiv();
        }
      }
      
      if (e.target.className === 'close-todo-create-btn') {
        this._hideTodoCreatingDiv();
      }
    })
  }

  _hideTodoCreatingDiv() {
    const div = this.getElement('.create-todo-div');
    const background = this.getElement('.background');

    div.remove();
    background.remove();
  }

  showAddTaskBtn() {
    this.addNewTodoBtn.style.display = 'inline';
  }

  hideAddTaskBtn() {
    this.addNewTodoBtn.style.display = 'none';
  }

  displayTodoList(todos) {
    while (this.todosList.firstChild) {
      this.todosList.removeChild(this.todosList.firstChild);
    }

    // ONLY SHOW TASKS THAT ARE FOR FROM THAT PROJECT
    if (todos.length !== 0) {
      todos.forEach(todo => {
        const li = this.createElement('li', 'task');
        li.id = todo.id;

        const taskTitleAndDescriptionDiv = this.createElement('div', 'task-title-description-div');

        const taskName = this.createElement('h3', 'task-name');
        taskName.textContent = todo.taskName;

        const taskDescription = this.createElement('p', 'task-description');
        taskDescription.textContent = todo.taskDescription;

        const taskDate = this.createElement('p', 'task-date');
        taskDate.textContent = todo.taskDate;

        const isImportant = this.createElement('input', 'task-important');
        isImportant.type = 'checkbox';
        if (todo.isTaskImportant === 'checked') {
          isImportant.checked = true;
        } else {
          isImportant.checked = false;
        }

        const deleteTaskBtn = this.createElement('button', 'delete-task-btn');
        deleteTaskBtn.textContent = '❌';
        deleteTaskBtn.type = 'button';

        const isTaskCompleted = this.createElement('input', 'task-completed');
        isTaskCompleted.type = 'checkbox';

        taskTitleAndDescriptionDiv.append(taskName, taskDescription);
        li.append(isTaskCompleted, taskTitleAndDescriptionDiv, taskDate, isImportant, deleteTaskBtn);

        this.todosList.append(li);
      })
    }
  }

  bindDeleteTask(handler) {
    this.todosList.addEventListener('click', (e) => {
      if (e.target.className === "delete-task-btn") {
        const id = parseInt(e.target.parentElement.id);
        handler(id);
      }
    });
  }
}