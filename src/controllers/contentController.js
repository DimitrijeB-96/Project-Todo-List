export class ContentController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindCreateTodo();

    // this.model.bindAllProjectsListChanged(this.onAllProjectsListChanged.bind(this));
    // this.onAllProjectsListChanged(this.model.allProjects);
  }

  // onAllProjectsListChanged = (allProjects) => {
  //   this.view.changeCurrentPage(allProjects);
  // }
}