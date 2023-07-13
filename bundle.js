(()=>{"use strict";new class{constructor(t,e){this.model=t,this.view=e,this.model.bindProjectListChanged(this.onProjectListChanged),this.view.bindAddProject(),this.view.bindCreatingProject(this.handleAddProject),this.view.bindDeleteProject(this.handleDeleteProject),this.onProjectListChanged(this.model.projects)}onProjectListChanged=t=>{this.view.displayProjects(t),this.model.returnProjects()};handleAddProject=t=>{this.model.addProject(t)};handleDeleteProject=t=>{this.model.deleteProject(t)}}(new class{constructor(){this.projects=[]}addProject(t){const e={id:this.projects.length>0?this.projects[this.projects.length-1].id+1:1,title:t};this.projects.push(e),this.onProjectListChanged(this.projects)}returnProjects(){console.log(this.projects)}deleteProject(t){this.projects=this.projects.filter((e=>e.id!==t)),this.onProjectListChanged(this.projects)}bindProjectListChanged(t){this.onProjectListChanged=t}},new class{constructor(){this.nav=this.createElement("div","nav-section"),this.header=this.createElement("div","header-section"),this.content=this.createElement("div","content-section"),this.appTitle=this.createElement("h1"),this.appTitle.textContent="TodoList",this.menuTitle=this.createElement("h2"),this.menuTitle.textContent="Menu",this.menuList=this.createElement("ul","menu-list"),this.menuAll=this.createElement("li"),this.menuAll.textContent="Menu",this.menuToday=this.createElement("li"),this.menuToday.textContent="Today",this.menuUpcoming=this.createElement("li"),this.menuUpcoming.textContent="Upcoming",this.menuImportant=this.createElement("li"),this.menuImportant.textContent="Important",this.projectTitle=this.createElement("h2"),this.projectTitle.textContent="Projects",this.projectList=this.createElement("ul","project-list"),this.createProjectForm=this.createElement("form","creat-project-form"),this.addProjectBtn=this.createElement("button"),this.addProjectBtn.textContent="Add Project",this.menuList.append(this.menuAll,this.menuToday,this.menuUpcoming,this.menuImportant),this.nav.append(this.appTitle,this.menuTitle,this.menuList,this.projectTitle,this.projectList,this.createProjectForm,this.addProjectBtn),document.body.append(this.nav,this.header,this.content)}createElement(t,e){const i=document.createElement(t);return e&&i.classList.add(e),i}getElement(t){return document.querySelector(t)}_hideChildElements(t){for(;t.firstChild;)t.removeChild(t.firstChild)}displayProjects(t){for(;this.projectList.firstChild;)this.projectList.removeChild(this.projectList.firstChild);0!==t.length&&t.forEach((t=>{const e=this.createElement("li");e.id=t.id;const i=this.createElement("p");i.textContent=t.title;const s=this.createElement("button","delete-project");s.textContent="X",e.append(i,s),this.projectList.append(e)}))}bindAddProject(){this.addProjectBtn.addEventListener("click",(()=>{if(0===this.createProjectForm.length){const t=this.createElement("input","input-title");t.type="text",t.name="project-title";const e=this.createElement("button","cancel-project");e.textContent="Cancel";const i=this.createElement("button","save-project");i.textContent="Save",this.createProjectForm.append(t,e,i)}}))}bindCreatingProject(t){this.createProjectForm.addEventListener("click",(e=>{if(e.preventDefault(),"cancel-project"===e.target.className)this._hideChildElements(this.createProjectForm);else if("save-project"===e.target.className){const e=this.getElement(".input-title").value;e&&(t(e),this._hideChildElements(this.createProjectForm))}}))}bindDeleteProject(t){this.projectList.addEventListener("click",(e=>{if("delete-project"===e.target.className){const i=parseInt(e.target.parentElement.id);t(i)}}))}})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQW1CRyxFQUFXQyxFQUM5RCxJQUVKLENBRUExRCxvQkFBb0IyRCxHQUNsQi9ELEtBQUtvQyxrQkFBa0JxQixpQkFBaUIsU0FBVU8sSUFHaEQsR0FGQUEsRUFBRUMsaUJBRXlCLG1CQUF2QkQsRUFBRUUsT0FBT3hCLFVBQ1gxQyxLQUFLaUQsbUJBQW1CakQsS0FBS29DLHdCQUV4QixHQUEyQixpQkFBdkI0QixFQUFFRSxPQUFPeEIsVUFBOEIsQ0FDaEQsTUFBTXlCLEVBQVFuRSxLQUFLOEMsV0FBVyxnQkFBZ0JzQixNQUMxQ0QsSUFDRkosRUFBUUksR0FDUm5FLEtBQUtpRCxtQkFBbUJqRCxLQUFLb0MsbUJBRWpDLElBRUosQ0FFQTlCLGtCQUFrQnlELEdBQ2hCL0QsS0FBS21DLFlBQVlzQixpQkFBaUIsU0FBVU8sSUFDMUMsR0FBMkIsbUJBQXZCQSxFQUFFRSxPQUFPeEIsVUFBZ0MsQ0FDM0MsTUFBTTdCLEVBQUt3RCxTQUFTTCxFQUFFRSxPQUFPSSxjQUFjekQsSUFDM0NrRCxFQUFRbEQsRUFDVixJQUVKLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vdmlldy5qcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBDb250cm9sbGVyKG5ldyBNb2RlbCgpLCBuZXcgVmlldygpKTtcblxuXG5cblxuXG5cbiIsImV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy52aWV3ID0gdmlldztcblxuICAgIHRoaXMubW9kZWwuYmluZFByb2plY3RMaXN0Q2hhbmdlZCh0aGlzLm9uUHJvamVjdExpc3RDaGFuZ2VkKTtcbiAgICB0aGlzLnZpZXcuYmluZEFkZFByb2plY3QoKTtcbiAgICB0aGlzLnZpZXcuYmluZENyZWF0aW5nUHJvamVjdCh0aGlzLmhhbmRsZUFkZFByb2plY3QpO1xuICAgIHRoaXMudmlldy5iaW5kRGVsZXRlUHJvamVjdCh0aGlzLmhhbmRsZURlbGV0ZVByb2plY3QpO1xuICAgIFxuICAgIHRoaXMub25Qcm9qZWN0TGlzdENoYW5nZWQodGhpcy5tb2RlbC5wcm9qZWN0cyk7XG4gIH1cblxuICBvblByb2plY3RMaXN0Q2hhbmdlZCA9IChwcm9qZWN0cykgPT4ge1xuICAgIHRoaXMudmlldy5kaXNwbGF5UHJvamVjdHMocHJvamVjdHMpO1xuICAgIHRoaXMubW9kZWwucmV0dXJuUHJvamVjdHMoKTtcbiAgfVxuXG4gIGhhbmRsZUFkZFByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgdGhpcy5tb2RlbC5hZGRQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gIH1cblxuICBoYW5kbGVEZWxldGVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgdGhpcy5tb2RlbC5kZWxldGVQcm9qZWN0KGlkKTtcbiAgfVxufSIsImV4cG9ydCBjbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHtcbiAgICAgIGlkOiB0aGlzLnByb2plY3RzLmxlbmd0aCA+IDAgPyB0aGlzLnByb2plY3RzW3RoaXMucHJvamVjdHMubGVuZ3RoIC0gMV0uaWQgKyAxIDogMSxcbiAgICAgIHRpdGxlOiBwcm9qZWN0VGl0bGUsXG4gICAgfVxuXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXG4gICAgdGhpcy5vblByb2plY3RMaXN0Q2hhbmdlZCh0aGlzLnByb2plY3RzKTtcbiAgfVxuXG4gIHJldHVyblByb2plY3RzKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHMpO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChpZCkge1xuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gaWQpO1xuXG4gICAgdGhpcy5vblByb2plY3RMaXN0Q2hhbmdlZCh0aGlzLnByb2plY3RzKTtcbiAgfVxuXG4gIGJpbmRQcm9qZWN0TGlzdENoYW5nZWQoY2FsbGJhY2spIHtcbiAgICB0aGlzLm9uUHJvamVjdExpc3RDaGFuZ2VkID0gY2FsbGJhY2s7XG4gIH1cbn0iLCJleHBvcnQgY2xhc3MgVmlldyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubmF2ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnbmF2LXNlY3Rpb24nKTtcbiAgICB0aGlzLmhlYWRlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hlYWRlci1zZWN0aW9uJyk7XG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY29udGVudC1zZWN0aW9uJyk7XG5cbiAgICB0aGlzLmFwcFRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRoaXMuYXBwVGl0bGUudGV4dENvbnRlbnQgPSAnVG9kb0xpc3QnO1xuXG4gICAgdGhpcy5tZW51VGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGhpcy5tZW51VGl0bGUudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICB0aGlzLm1lbnVMaXN0ID0gdGhpcy5jcmVhdGVFbGVtZW50KCd1bCcsICdtZW51LWxpc3QnKTtcblxuICAgIHRoaXMubWVudUFsbCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0aGlzLm1lbnVBbGwudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgdGhpcy5tZW51VG9kYXkgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGhpcy5tZW51VG9kYXkudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgIHRoaXMubWVudVVwY29taW5nID0gdGhpcy5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRoaXMubWVudVVwY29taW5nLnRleHRDb250ZW50ID0gJ1VwY29taW5nJztcbiAgICB0aGlzLm1lbnVJbXBvcnRhbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGhpcy5tZW51SW1wb3J0YW50LnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG5cbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aGlzLnByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICB0aGlzLnByb2plY3RMaXN0ID0gdGhpcy5jcmVhdGVFbGVtZW50KCd1bCcsICdwcm9qZWN0LWxpc3QnKTtcblxuICAgIHRoaXMuY3JlYXRlUHJvamVjdEZvcm0gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCAnY3JlYXQtcHJvamVjdC1mb3JtJyk7XG5cbiAgICB0aGlzLmFkZFByb2plY3RCdG4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMuYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG5cbiAgICB0aGlzLm1lbnVMaXN0LmFwcGVuZCh0aGlzLm1lbnVBbGwsIHRoaXMubWVudVRvZGF5LCB0aGlzLm1lbnVVcGNvbWluZywgdGhpcy5tZW51SW1wb3J0YW50KTtcblxuICAgIHRoaXMubmF2LmFwcGVuZCh0aGlzLmFwcFRpdGxlLCB0aGlzLm1lbnVUaXRsZSwgdGhpcy5tZW51TGlzdCwgdGhpcy5wcm9qZWN0VGl0bGUsIHRoaXMucHJvamVjdExpc3QsIHRoaXMuY3JlYXRlUHJvamVjdEZvcm0sIHRoaXMuYWRkUHJvamVjdEJ0bik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLm5hdiwgdGhpcy5oZWFkZXIsIHRoaXMuY29udGVudCk7XG4gIH1cblxuICBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGdldEVsZW1lbnQoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIF9oaWRlQ2hpbGRFbGVtZW50cyhwYXJlbnQpIHtcbiAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICB3aGlsZSAodGhpcy5wcm9qZWN0TGlzdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHRoaXMucHJvamVjdExpc3QuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuaWQgPSBwcm9qZWN0LmlkO1xuXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgY29uc3QgYnRuID0gdGhpcy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnZGVsZXRlLXByb2plY3QnKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ1gnO1xuXG4gICAgICAgIGxpLmFwcGVuZChwLCBidG4pO1xuXG4gICAgICAgIHRoaXMucHJvamVjdExpc3QuYXBwZW5kKGxpKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYmluZEFkZFByb2plY3QoKSB7XG4gICAgdGhpcy5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY3JlYXRlUHJvamVjdEZvcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGlucHV0UHJvamVjdFRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdpbnB1dCcsICdpbnB1dC10aXRsZScpO1xuICAgICAgICBpbnB1dFByb2plY3RUaXRsZS50eXBlID0gJ3RleHQnO1xuICAgICAgICBpbnB1dFByb2plY3RUaXRsZS5uYW1lID0gJ3Byb2plY3QtdGl0bGUnO1xuICBcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gdGhpcy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnY2FuY2VsLXByb2plY3QnKTtcbiAgICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIFxuICAgICAgICBjb25zdCBzYXZlQnRuID0gdGhpcy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnc2F2ZS1wcm9qZWN0Jyk7XG4gICAgICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0Rm9ybS5hcHBlbmQoaW5wdXRQcm9qZWN0VGl0bGUsIGNhbmNlbEJ0biwgc2F2ZUJ0bik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmRDcmVhdGluZ1Byb2plY3QoaGFuZGxlcikge1xuICAgIHRoaXMuY3JlYXRlUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY2FuY2VsLXByb2plY3QnKSB7XG4gICAgICAgIHRoaXMuX2hpZGVDaGlsZEVsZW1lbnRzKHRoaXMuY3JlYXRlUHJvamVjdEZvcm0pOyBcblxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdzYXZlLXByb2plY3QnKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5nZXRFbGVtZW50KCcuaW5wdXQtdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgaGFuZGxlcihpbnB1dCk7XG4gICAgICAgICAgdGhpcy5faGlkZUNoaWxkRWxlbWVudHModGhpcy5jcmVhdGVQcm9qZWN0Rm9ybSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmluZERlbGV0ZVByb2plY3QoaGFuZGxlcikge1xuICAgIHRoaXMucHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RlbGV0ZS1wcm9qZWN0Jykge1xuICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpO1xuICAgICAgICBoYW5kbGVyKGlkKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbn0iXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJtb2RlbCIsInZpZXciLCJ0aGlzIiwiYmluZFByb2plY3RMaXN0Q2hhbmdlZCIsIm9uUHJvamVjdExpc3RDaGFuZ2VkIiwiYmluZEFkZFByb2plY3QiLCJiaW5kQ3JlYXRpbmdQcm9qZWN0IiwiaGFuZGxlQWRkUHJvamVjdCIsImJpbmREZWxldGVQcm9qZWN0IiwiaGFuZGxlRGVsZXRlUHJvamVjdCIsInByb2plY3RzIiwiZGlzcGxheVByb2plY3RzIiwicmV0dXJuUHJvamVjdHMiLCJwcm9qZWN0VGl0bGUiLCJhZGRQcm9qZWN0IiwiaWQiLCJkZWxldGVQcm9qZWN0IiwicHJvamVjdCIsImxlbmd0aCIsInRpdGxlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJjYWxsYmFjayIsIm5hdiIsImNyZWF0ZUVsZW1lbnQiLCJoZWFkZXIiLCJjb250ZW50IiwiYXBwVGl0bGUiLCJ0ZXh0Q29udGVudCIsIm1lbnVUaXRsZSIsIm1lbnVMaXN0IiwibWVudUFsbCIsIm1lbnVUb2RheSIsIm1lbnVVcGNvbWluZyIsIm1lbnVJbXBvcnRhbnQiLCJwcm9qZWN0TGlzdCIsImNyZWF0ZVByb2plY3RGb3JtIiwiYWRkUHJvamVjdEJ0biIsImFwcGVuZCIsImRvY3VtZW50IiwiYm9keSIsInRhZyIsImNsYXNzTmFtZSIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRFbGVtZW50Iiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwiX2hpZGVDaGlsZEVsZW1lbnRzIiwicGFyZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZm9yRWFjaCIsImxpIiwicCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dFByb2plY3RUaXRsZSIsInR5cGUiLCJuYW1lIiwiY2FuY2VsQnRuIiwic2F2ZUJ0biIsImhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJpbnB1dCIsInZhbHVlIiwicGFyc2VJbnQiLCJwYXJlbnRFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==