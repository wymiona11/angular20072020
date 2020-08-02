import { Task } from './task';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key: string]: string | Date } = null;
  public task: string = 'prac matka, prac...';
  public taskDate: Date;
  public tasks: Task[] = [
    { name: 'pranie', deadline: new Date('12.02.2020'), done: false },
    { name: 'prasowanie', deadline: new Date('2020-02-15'), done: false },
    { name: 'odkuzanie', deadline: new Date('2020-02-18'), done: false },
  ];
  clear() {
    this.tasks = [];
  }
  add() {
    const taskRoboczy: Task = {
      name: this.task,
      deadline: new Date(this.taskDate),
      done: false,
    };
    this.tasks.push(taskRoboczy);
    this.task = '';
  }
  zrobione(item:Task){
    item.done = true;
  }
  constructor() {
    this.config = {
      title: 'lista zadan',
      timeData: new Date(),
      footer: 'to jest zajebana stopka',
    };
  }
}
