import { createMainSection } from '../index.js';

function main() {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');

  createMainSection.append(mainContainer);
}

export {
  main,
}