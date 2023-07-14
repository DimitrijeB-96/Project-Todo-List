export class ContentController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindCreateTodo();
  }
}