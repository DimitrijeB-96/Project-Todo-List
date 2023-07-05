import { projects } from "./index.js";
import { activeProject } from "./logicProjects.js";
import { addProject } from "./domManipulations.js";

const createNavSection = document.createElement('div');
createNavSection.classList.add('nav-section');

const createHeaderSection = document.createElement('div');
createHeaderSection.classList.add('header-section');

const createMainSection = document.createElement('div');
createMainSection.classList.add('main-section');

function renderLayout() {
  document.body.append(createNavSection, createHeaderSection, createMainSection);
  navigation();
  header();
  main();
}

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

function createDefaults(name) {
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

function header() {
  const currentProject = document.createElement('h2');
  currentProject.textContent = activeProject();

  createHeaderSection.append(currentProject);
}

function main() {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');

  createMainSection.append(mainContainer);
}

export {
  renderLayout,
  createNavSection,
}