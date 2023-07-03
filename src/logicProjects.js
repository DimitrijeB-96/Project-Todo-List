import { projects } from "./index.js";

// create delete select active
// only one project can be active at the time

const createProject = (name, isDefault = false) => {
  
  changeProjectsToFalse(); //make other projects not active
  
  projects.push({
    name,
    toDoList: [], // is this ok ?
    active: true,
    isDefault,
  });
  //render it
};

//DO I NEED THIS ?
function activeProject() {
  let projectIsActive = projects.filter(project => project.active === true);

  return projectIsActive; // will this work ?
}

function switchProject(index) {
  changeProjectsToFalse();

  projects[index].active = true;
  
  // render logit, show this and hide rest
}

function deleteProject(index) {
  // make sure it is deleting currect project + do I need to make sure array length is greater then index provided
  if (projects[index].active === true) {
    projects[0].active = true;
  }

  if (projects[index].isDefault === true) {
    return;
  } else {
    projects.splice(index, 1);
  }
}

function changeProjectsToFalse() {
  for (let i = 0; i < projects.length; i++) {
    projects[i].active = false;
  }
}

export {
  createProject,
  activeProject,
  switchProject,
  deleteProject,
}
