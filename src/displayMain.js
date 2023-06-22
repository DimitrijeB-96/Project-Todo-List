const mainSection = document.createElement('div');
mainSection.classList.add('main-section');

export function createMain() {
  headerMainSection();
  contentMainSection();
  footerMainSection();
}

function headerMainSection() {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header-div');

  const sectionName = document.createElement('h2');
  sectionName.textContent = 'Show All';

  headerDiv.append(sectionName);
  mainSection.append(headerDiv);
}

function contentMainSection() {
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content-div');

  const newTaskBtn = document.createElement('button');
  newTaskBtn.classList.add('new-task-btn');
  newTaskBtn.textContent = '+';

  contentDiv.append(newTaskBtn);
  mainSection.append(contentDiv);
}

function addTask() {
  createTaskMenu();
  background();
}

function createTaskMenu() {
  const menuTaskDiv = document.createElement('div');
  menuTaskDiv.classList.add('menu-task-div');

  const topDivTaskMenu = document.createElement('div');
  topDivTaskMenu.classList.add('top-div-task-menu');

  const menuTaskDivTitle = document.createElement('h2');
  menuTaskDivTitle.textContent = 'Add Task';

  const taskForm = document.createElement('form');
  taskForm.classList.add('task-form');
  
  topDivTaskMenu.append(menuTaskDivTitle);
  
  menuTaskDiv.append(topDivTaskMenu, taskForm);
  mainSection.append(menuTaskDiv);
  createTaskForm();
}

function createTaskForm() {
  const taskForm = document.querySelector('.task-form');

  const taskFromTitleDiv = document.createElement('div');
  const taskTitleLabel = document.createElement('label');
  taskTitleLabel.textContent = 'Title';
  taskTitleLabel.id = 'task-title';
  const taskTitleInput = document.createElement('input');
  taskTitleInput.id = 'task-title';

  const taskFromDescriptionDiv = document.createElement('div');
  const taskDescriptionLabel = document.createElement('label');
  taskDescriptionLabel.textContent = 'Add Description';
  taskDescriptionLabel.id = 'task-description';
  const taskDescriptionTextarea = document.createElement('textarea');
  taskDescriptionTextarea.id = 'task-description';

  const taskFromDateDiv = document.createElement('div');
  const taskDateLabel = document.createElement('label'); 
  taskDateLabel.textContent = 'Date';
  taskDateLabel.id = 'task-date';
  const taskDateInput = document.createElement('input');
  taskDateInput.type = 'date';
  taskDateInput.id = 'task-date';

  const taskFromImportantDiv = document.createElement('div');
  const taskImportantLabel = document.createElement('label');
  taskImportantLabel.textContent = 'Is this task important?';
  taskImportantLabel.id = 'task-important';
  const taskImportantCheck = document.createElement('input');
  taskImportantCheck.type = 'checkbox';
  taskImportantCheck.id = 'task-important';

  const taskFromBtnsDiv = document.createElement('div');
  const taskFromBtnCancel = document.createElement('button');
  taskFromBtnCancel.textContent = 'Cancel';
  taskFromBtnCancel.classList.add('cancel-btn');
  const taskFromBtnCreate = document.createElement('button');
  taskFromBtnCreate.textContent = 'Create';
  taskFromBtnCreate.classList.add('save-btn');

  taskFromTitleDiv.append(taskTitleLabel, taskTitleInput);
  taskFromDescriptionDiv.append(taskDescriptionLabel, taskDescriptionTextarea);
  taskFromDateDiv.append(taskDateLabel, taskDateInput);
  taskFromImportantDiv.append(taskImportantLabel, taskImportantCheck);
  taskFromBtnsDiv.append(taskFromBtnCancel, taskFromBtnCreate);
  taskForm.append(taskFromTitleDiv, taskFromDescriptionDiv, taskFromDateDiv, taskFromImportantDiv, taskFromBtnsDiv);
}

function background() {
  const background = document.createElement('div');
  background.classList.add('background');

  document.body.appendChild(background);
}

function footerMainSection() {
  const footerDiv = document.createElement('div');
  footerDiv.classList.add('footer-div');

  mainSection.append(footerDiv);
}

export default mainSection;

export {
  addTask
}