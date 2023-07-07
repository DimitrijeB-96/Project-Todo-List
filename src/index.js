import './style.css';
import { makeHeader as header } from './header/renderHeader.js';
import { navigation } from './navigation/renderNavigation';
import { handlers } from './handlers.js';

let projects = [];

//SOMEWHERE ELSE
const createNavSection = document.createElement('div');
createNavSection.classList.add('nav-section');

const createHeaderSection = document.createElement('div');
createHeaderSection.classList.add('header-section');

const createMainSection = document.createElement('div');
createMainSection.classList.add('main-section');

//SOMEWHERE ELSE
function renderLayout() {
  document.body.append(createNavSection, createHeaderSection, createMainSection);
  navigation();
  header();
}

renderLayout();
handlers.getProject();


export {
  projects,
  createNavSection,
  createHeaderSection,
  createMainSection,
}





