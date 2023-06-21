import './style.css';
import nav, { createNavigation, createNewProject } from './displayNavigation.js';
import main, { createMain, addTask } from './displayMain.js';

import Project from './createProject.js';

function display() {
  document.body.appendChild(nav);
  document.body.appendChild(main);

  createNavigation();
  createMain();
}

display();

const addProjectBtn = document.querySelector('.add-project-btn');
addProjectBtn.addEventListener('click', createNewProject);

const addTaskBtn = document.querySelector('.new-task-btn');
addTaskBtn.addEventListener('click', addTask);




