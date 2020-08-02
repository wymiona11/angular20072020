import { Task } from './task';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key: string]: string | Date } = null;
  public tasks: Task[] = [
    { name: 'pranie', deadline: '2020-02-12', done: false },
    { name: 'prasowanie', deadline: '2020-02-15', done: false },
    { name: 'odkuzanie', deadline: '2020-02-18', done: false },
  ];
clear(){
  this.tasks = [];
}

  constructor() {
    this.config = {
      title: 'lista zadan',
      timeData: new Date(),
      footer: 'to jest zajebana stopka',
    };
  }
}
