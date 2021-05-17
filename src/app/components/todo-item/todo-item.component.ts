import { splitClasses, ThrowStmt } from '@angular/compiler';
import { Component, OnInit ,Input,EventEmitter, Output} from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = {id :1,title : "",completed : false};
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService : TodoService) { 
  
  }

  ngOnInit(): void {
  
  }
  // set dynamic classes
  setClasses() {
    let classes = {
       todo: true,
       'is-complete' : this.todo.completed

    }
    return classes;
  }
  onToggle(todo:Todo){
    // Toggle in UI
    todo.completed = !todo.completed;
    //Toggle in servdr
    this.todoService.toggleCompleted(todo).subscribe(todo =>{
      console.log(todo);
    }
      )

  }
  onDelete(todo:Todo){
    console.log('delete');
    this.deleteTodo.emit(todo);
  }

}
