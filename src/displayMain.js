const mainSection = document.createElement('div');
mainSection.classList.add('main-section');

export function createMain() {
  headerMainSection();
  contentMainSection();
  footerMainSection();
}

function headerMainSection() {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header-div');

  const sectionName = document.createElement('h2');
  sectionName.textContent = 'Show All';

  headerDiv.append(sectionName);
  mainSection.append(headerDiv);
}

function contentMainSection() {
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content-div');

  const newTaskBtn = document.createElement('button');
  newTaskBtn.classList.add('new-task-btn');
  newTaskBtn.textContent = '+';

  contentDiv.append(newTaskBtn);
  mainSection.append(contentDiv);
}

function createTask() {
  console.log("HEy");
}

function footerMainSection() {
  const footerDiv = document.createElement('div');
  footerDiv.classList.add('footer-div');

  mainSection.append(footerDiv);
}

export default mainSection;

export {
  createTask
}