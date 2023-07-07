import { projects } from "./index.js";

const createTodo = (index, name, description, date, isImportant) => {
  projects[index].toDoList.push({
    name,
    description,
    date,
    isImportant
  });
  // RENDER
};

function deleteTodo(index) {
  const thisArray = projects[index].toDoList;
  thisArray.splice(0, thisArray.length);
}

export {
  createTodo,
  deleteTodo,
}