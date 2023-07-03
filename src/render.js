const createNavSection = document.createElement('div');
createNavSection.classList.add('nav-section');

const createHeaderSection = document.createElement('div');
createHeaderSection.classList.add('header-section');

const createMainSection = document.createElement('div');
createMainSection.classList.add('main-section');

function renderLayout() {
  
  document.body.append(createNavSection, createHeaderSection, createMainSection);
}

export {
  renderLayout,
}