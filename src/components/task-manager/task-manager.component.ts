import { Component } from 'angular-ts-decorators';
import { TasksService, ITasklist, PartialTask } from '../../tasks.service';

import './tasks.scss';
const template = require('./task-manager.html');

@Component({
  selector: 'taskManager',
  template
})
export class TaskManager implements ng.IComponentController {
  tasklist: PartialTask;

  /*@ngInject*/
  constructor(private TasksService: TasksService) {}

  $onInit() {
    setTimeout(() => window['componentHandler'].upgradeAllRegistered(), 10);
    this.tasklist = { id: this.TasksService.tasklistId };
  }

  changeTasklist($event: { tasklist: ITasklist }) {
    this.tasklist = $event.tasklist;
  }
}
