import { projects, createHeaderSection } from '../index.js';
import { activeProject, changeProject } from '../logic/logicProjects.js';

function makeHeader() {
  const currentProject = document.createElement('h2');
  currentProject.textContent = setToHomePage();

  for (let i = 0; i < projects.length; i++) {
    if (currentProject.textContent !== activeProject()) {
      return currentProject.textContent = activeProject();
    }
  }

  createHeaderSection.append(currentProject);
}

function setToHomePage() {
  const showAllProjects = 0;
  return changeProject(showAllProjects);
}

export {
  makeHeader,
}