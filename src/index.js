import './style.css';
import nav, { createNavigation } from './displayNavigation.js';

function display() {
  document.body.appendChild(nav);

  createNavigation();
}

display();