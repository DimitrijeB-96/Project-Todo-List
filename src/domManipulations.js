import { createNavSection } from './render.js';

function addProject() {
  if (document.querySelector('.project-div-creating') === null) {
    creatingProjectDiv();
  }
}

function creatingProjectDiv() {
  const createBtn = document.querySelector('.create-projects-btn');

  const div = document.createElement('div');
  div.classList.add('project-div-creating');

  const projectNameInput = document.createElement('input');
  projectNameInput.classList.add('project-name-input');

  const btnDiv = document.createElement('div');
  
  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('cancel-creating-btn');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.addEventListener('click', hideCreateProjectDiv);

  const addBtn = document.createElement('button');
  addBtn.classList.add('add-creating-btn');
  addBtn.textContent = 'Add';
  addBtn.addEventListener('click', newProject);

  createNavSection.insertBefore(div, createBtn);
  div.append(projectNameInput, btnDiv);
  btnDiv.append(cancelBtn, addBtn);

  projectNameInput.focus();
}

function hideCreateProjectDiv() {
  const hideDiv = document.querySelector('.project-div-creating');
  hideDiv.remove();
}

function newProject() {
  const projectNameInput = document.querySelector('.project-name-input');

  if (projectNameInput.value) {
    createProject(projectNameInput.value);
  }
}

function createProject(name) {
  const createBtn = document.querySelector('.create-projects-btn');

  const div = document.createElement('div');
  div.classList.add('project-div-container');

  const projectName = document.createElement('h3');
  projectName.textContent = name;

  const deleteProjectBtn = document.createElement('button');
  deleteProjectBtn.textContent = 'X';
  deleteProjectBtn.addEventListener('click', deleteProject)

  createNavSection.insertBefore(div, createBtn);
  div.append(projectName, deleteProjectBtn);

  hideCreateProjectDiv();
}

function deleteProject() {
  this.parentElement.remove();
}

export {
  addProject,
}