import './style.css';
import { renderLayout } from './render';
import { createTodo, deleteTodo } from './logicTodo';
import { createProject,
         deleteProject,
         changeProject,  
         activeProject} from './logicProjects.js';

let projects = [];



createProject('All', true);
createProject('Today', true);
createProject('Important', true);

createProject('First Project');
createProject('Second Project');
deleteProject(4);
changeProject(1);

renderLayout();







export {
  projects,
}





