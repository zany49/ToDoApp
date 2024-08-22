import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface TaskStatus {
  value: string;
  viewValue: string;
}
interface TaskObject {
  id:number;
  taskName: string;
  taskDescription: string;
  taskStatus:string
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  taskName:string = '';
  taskDescription:string = '';
  taskStatus:string='';
  taskStatusList: TaskStatus[] =[
    {value: 'notStarted', viewValue: 'Not yet started'},
    {value: 'onProcess', viewValue: 'On Process'},
    {value: 'completed', viewValue: 'Completed'},
  ]

  todoList:TaskObject[]=[]

  AddTaskArray():void{
    this.todoList.push({
      id:this.todoList.length+1,
      taskName: this.taskName,
      taskDescription: this.taskDescription,
      taskStatus:this.taskStatus
    })
    this.taskName = "",
    this.taskDescription = "",
    this.taskStatus = ""

    console.log(this.todoList)
  }
  EditTaskArray(tdata:TaskObject):void{
    let fildata = this.todoList.filter(d=>d.id != tdata.id)
    this.taskName = tdata.taskName,
    this.taskDescription = tdata.taskDescription,
    this.taskStatus = tdata.taskStatus,
    this.todoList = fildata
  }
  DeleteTaskArray(id:number):void{
    let fildata = this.todoList.filter(d=>d.id != id)
    this.todoList = fildata
  }
}
