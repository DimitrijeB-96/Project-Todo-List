import './style.css';
import { renderLayout } from './render';
import { createTodo, deleteTodo } from './logicTodo';
import { createProject,
         deleteProject,
         switchProject,  
         activeProject} from './logicProjects.js';

let projects = [];

renderLayout();






export {
  projects,
}





