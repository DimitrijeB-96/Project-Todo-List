import { projects, createNavSection } from '../index.js';
import { createProject, changeProject, activeProject, deleteProject } from '../logic/logicProjects.js';
import { createDefaults, createProjectsBtn } from './navigationManipulations.js';

function navigation() {
  const projectTitle = document.createElement('h1');
  projectTitle.textContent = 'ToDo List';

  const projectsText = document.createElement('h2');
  projectsText.textContent = 'Projects';

  createNavSection.append(projectTitle);

  createDefaults("All");
  createDefaults("Today");
  createDefaults("Important");

  createNavSection.append(projectsText);

  createProjectsBtn();
}

export {
  navigation,
}