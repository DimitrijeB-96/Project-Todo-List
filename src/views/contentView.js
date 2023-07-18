export class ContentView {
  constructor() {
    this.header = this.createElement('div', 'header-section');
    this.content = this.createElement('div', 'content-section');

    this.currentPage = this.createElement('h1', 'current-page-text');
    this.currentPage.textContent = 'Menu';

    this.contentDiv = this.createElement('div', 'content-div');

    this.todosList = this.createElement('ul', 'todos-list');

    this.addNewTodoBtn = this.createElement('button', 'new-todo-btn');
    this.addNewTodoBtn.textContent = '+';

    this.header.append(this.currentPage);

    this.contentDiv.append(this.todosList, this.addNewTodoBtn);

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

  // LABEL + INPUT of TITLE, LABEL + TEXTBOX for DESCRIPTION, LABEL + INPUT for TIME, BUTTON for CREATE
  bindCreateTodo() {
    this.addNewTodoBtn.addEventListener('click', () => {
      const div = this.createElement('div', 'create-todo-div');

      const background = this.createElement('div', 'background');

      const headerDiv = this.createElement('div', 'create-todo-header-div');

      const title = this.createElement('h2');
      title.textContent = 'Create Task';

      const closeBtn = this.createElement('button', 'close-todo-create-btn');
      closeBtn.textContent = 'X';

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

      const createTaskBtn = this.createElement('button', 'create-todo-btn');
      createTaskBtn.textContent = 'Create';

      headerDiv.append(title, closeBtn);

      form.append(titleText, titleInput, dateText, dateInput, descriptionText, descriptionInput, createTaskBtn);

      div.append(headerDiv, form);

      document.body.append(background, div);
    })
  }
}