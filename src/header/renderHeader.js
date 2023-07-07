import { projects, createHeaderSection } from '../index.js';
import { activeProject, changeProject } from '../logic/logicProjects.js';

function makeHeader() {
  const currentProject = document.createElement('h2');
  currentProject.classList.add('header-project-text');
  currentProject.textContent = setToHomePage();

  createHeaderSection.append(currentProject);
}

function changeHeaderText() {
  const currectProjectText = document.querySelector('.header-project-text');

  for (let i = 0; i < projects.length; i++) {
    if (currectProjectText.textContent !== activeProject()) {
      return currectProjectText.textContent = activeProject();
    }
  }
}

function setToHomePage() {
  const showAllProjects = 0;
  return changeProject(showAllProjects);
}

export {
  makeHeader,
  changeHeaderText,
}