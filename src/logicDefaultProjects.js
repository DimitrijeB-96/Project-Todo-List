import { projects } from "./index.js";

const createDefaults = (name) => {
  projects.push({
    name,
    toDoList: [],
    active: false,
  });
};

export {
  createDefaults,
}