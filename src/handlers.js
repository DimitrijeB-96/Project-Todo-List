import { projects } from "./index.js";
import { changeProject, activeProject } from "./logic/logicProjects";

const handlers = (() => {
  function getProject() {
    const selectCurrentProject = document.querySelectorAll('.project-div-container');
    selectCurrentProject.forEach(current => current.addEventListener('click', (e) => {
      for (let i = 0; i < projects.length; i++) {
        if(e.target.innerText === projects[i].name) {
          changeProject(i);
          activeProject();
          console.log('TEST');
        }
      }
    }));
  }
  
  return {
    getProject,
  }
})();

export {
  handlers,
}

