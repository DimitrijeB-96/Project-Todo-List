import { projects, createNavSection } from '../index.js';
import { createProject, deleteProject } from '../logic/logicProjects.js';

function createDefaults(name) {
  createProject(name, true);
  const div = document.createElement('div');
  div.classList.add('project-div-container');
  const defaultName = document.createElement('h3');
  defaultName.textContent = name;

  createNavSection.append(div);
  div.append(defaultName);
}

function createProjectsBtn() {
  const div = document.createElement('div');
  div.classList.add('project-div-container');

  const createProjectBtn = document.createElement('button');
  createProjectBtn.classList.add('create-projects-btn');
  createProjectBtn.textContent = 'Create Project';

  createProjectBtn.addEventListener('click', addProject);

  createNavSection.append(createProjectBtn);
}

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
  const projectName = projectNameInput.value;

  if (projectName) {
    displayProject(projectName);
    createProject(projectName);
    console.log(projects);

  }
}

function displayProject(name) {
  const createBtn = document.querySelector('.create-projects-btn');

  const div = document.createElement('div');
  div.classList.add('project-div-container');

  const projectName = document.createElement('h3');
  projectName.textContent = name;

  const deleteProjectBtn = document.createElement('button');
  deleteProjectBtn.textContent = 'X';
  deleteProjectBtn.addEventListener('click', deleteProjectDiv)

  createNavSection.insertBefore(div, createBtn);
  div.append(projectName, deleteProjectBtn);

  hideCreateProjectDiv();
}

function deleteProjectDiv() {
  this.parentElement.remove();
  for (let i = 0; i < projects.length; i++) {
    if (this.previousSibling.textContent === projects[i].name) {
      deleteProject(i);
      console.log(projects); // DELETE LATER
    }
  }
}

export {
  createDefaults,
  createProjectsBtn,
}