const navSection = document.createElement('div');
navSection.classList.add('navigation-section');

export function createNavigation() {
  topNavSection();
  mainNavSection();
  projectNavSection();
}

function topNavSection() {
  const resizeBtnDiv = document.createElement('div');
  resizeBtnDiv.classList.add('resize-div');

  const resizeNavBtn = document.createElement('button');
  resizeNavBtn.classList.add('resize-btn');

  resizeBtnDiv.appendChild(resizeNavBtn);

  navSection.append(resizeBtnDiv);
}

function mainNavSection() {
  const mainNavDiv = document.createElement('div');
  mainNavDiv.classList.add('main-nav-div'); // maybe won't need 
  navSection.appendChild(mainNavDiv);

  const showAllText = document.createElement('h3');
  showAllText.classList.add('show-all-nav');
  showAllText.textContent = 'Show All';

  const todayText = document.createElement('h3');
  todayText.classList.add('today-nav');
  todayText.textContent = 'Today';

  const upcomingText = document.createElement('h3');
  upcomingText.classList.add('upcoming-nav');
  upcomingText.textContent = 'Upcoming';

  const importantText = document.createElement('h3');
  importantText.classList.add('important-nav');
  importantText.textContent = 'Important';

  mainNavDiv.append(showAllText, todayText, upcomingText, importantText);
}

function projectNavSection() {
  const projectNavDiv = document.createElement('div');
  projectNavDiv.classList.add('project-nav-div');
  navSection.appendChild(projectNavDiv);

  const projectSectionText = document.createElement('h2');
  projectSectionText.textContent = 'Projects';

  const addProjectBtn = document.createElement('button');
  addProjectBtn.classList.add('add-project-btn');
  addProjectBtn.textContent = 'Add Project';

  projectNavDiv.append(projectSectionText, addProjectBtn);
}

function createNewProject() {
  const addProjectBtn = document.querySelector('.add-project-btn');
  const projectNavDiv = document.querySelector('.project-nav-div');

  if (document.querySelector('.new-projects-div') === null) {
    const newProjectDiv = document.createElement('div');
    newProjectDiv.classList.add('new-projects-div');
    newProjectDiv.style.display = 'flex';

    const btnsDiv = document.createElement('div');
    btnsDiv.classList.add('new-projects-btns-div');
  
    const newProjectInput = document.createElement('input');
    newProjectInput.classList.add('new-project-input');
    newProjectInput.focus();
    const cancelProjectBtn = document.createElement('button');
    cancelProjectBtn.classList.add('cancel-btn');
    cancelProjectBtn.textContent = 'Cancel';
    const saveProjectBtn = document.createElement('button');
    saveProjectBtn.classList.add('save-btn');
    saveProjectBtn.textContent = 'Save';
  
    saveProjectBtn.addEventListener('click', saveProject);
  
    cancelProjectBtn.addEventListener('click', cancelProject);
  
    projectNavDiv.insertBefore(newProjectDiv, addProjectBtn);
    btnsDiv.append(cancelProjectBtn, saveProjectBtn);
    newProjectDiv.append(newProjectInput, btnsDiv);
  }
}

function cancelProject() {
  document.querySelector('.new-project-input').remove();
  document.querySelector('.cancel-btn').remove();
  document.querySelector('.save-btn').remove();

  document.querySelector('.new-projects-div').remove();
}

function saveProject() {
  console.log('saved');
}

export default navSection;

export {
  createNewProject,
};