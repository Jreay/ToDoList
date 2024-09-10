import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToDo } from '../Components.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule, MatIconModule
  ],
  templateUrl: `./List.component.html`,
  styleUrl: './List.component.css',
})
export class ListComponent implements OnInit { 
  public listTask : Array<ToDo> = []

  ngOnInit() {
    this.loadTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.listTask));
  }

  private loadTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) this.listTask = JSON.parse(tasks);
  }

  public addNewTask(value: ToDo) : void{
    if(this.listTask.find( task => task.task == value.task )) return;
    this.listTask.push(value);
    if(this.listTask.length > 10) this.listTask.shift();
    this.saveTasks();
  }

  public completeTask( id : string) : void {
    const task = this.listTask.find( task => task.id == id )
    if (task) task.complete = !task.complete;
    this.saveTasks();
  }

  public removeTask( id : string) : void {
    this.listTask = this.listTask.filter( task => task.id != id );
    this.saveTasks();
  }


}
